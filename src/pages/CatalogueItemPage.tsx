import { fetchCatalogItem } from 'api'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { CatalogueItemType } from '../types/CatalogueItem.type'

const CatalogueItemPage = () => {
	const { id } = useParams()
	const [isLoading, setIsLoading] = useState(true)
	const [catalogueItem, setCatalogueItem] = useState<
		CatalogueItemType | undefined
	>()

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const nextCatalogueItem = await fetchCatalogItem(id)
			setCatalogueItem(nextCatalogueItem)
			setIsLoading(false)
		}
		void fetchData()
	}, [id])

	if (isLoading) {
		return (
			<div className='h-[calc(100vh_-_3rem)] bg-white text-cloud-burst'>
				Loading...
			</div>
		)
	}

	if (!catalogueItem) {
		return (
			<div className='h-[calc(100vh_-_3rem)] bg-white text-cloud-burst'>
				error
			</div>
		)
	}

	const {
		name,
		description,
		organization,
		'date-added': dateAdded,
		'year-period': yearPeriod,
		'country-region': countryRegion,
		links
	} = catalogueItem

	return (
		<div className='h-[calc(100vh_-_3rem)] bg-white'>
			<div className='flex flex-col bg-cloud-burst p-10 text-white'>
				<span>{organization.name}</span>
				<span className='text-2xl font-bold'>
					{name} ({yearPeriod})
				</span>
				<div>
					<span>Date created: {dateAdded}</span>
				</div>
			</div>
			<div className='p-10 text-cloud-burst'>
				<p>{description}</p>
				<section className='mt-5'>
					<h2 className='text-xl font-bold'>Properties</h2>
					<table className='border-separate border-spacing-x-5 border-spacing-y-2'>
						<tbody>
							<tr>
								<td className='font-bold'>Country/Region:</td>
								<td>{countryRegion}</td>
							</tr>
							<tr>
								<td className='font-bold'>Year/Period:</td>
								<td>{yearPeriod}</td>
							</tr>
						</tbody>
					</table>
				</section>
				<section className='mt-5'>
					<h2 className='mb-2 text-xl font-bold'>Links</h2>
					<div className='flex flex-col pl-5'>
						{links.map(link => (
							<a href={link.url} key={`${link.description}`}>
								{link.description}
							</a>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}

export default CatalogueItemPage
