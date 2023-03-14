import { fetchCatalogItems } from 'api'
import CatalogueItemCard from 'components/CatalogueItemCard'
import { useEffect, useState } from 'react'
import type { CatalogueItemType } from 'types/CatalogueItem.type'

const CataloguePage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [catalogueItems, setCatalogueItems] = useState<CatalogueItemType[]>([])
	let catalogueItemsSection

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const nextCatalogueItems = await fetchCatalogItems()
			setCatalogueItems(nextCatalogueItems)
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		void fetchData()
	}, [])

	if (isLoading) {
		catalogueItemsSection = <span>Loading...</span>
	}

	if (!isLoading && catalogueItems.length === 0) {
		catalogueItemsSection = <span>No catalogue items available.</span>
	}

	if (!isLoading && catalogueItems.length > 0) {
		catalogueItemsSection = catalogueItems.map(catalogueItem => (
			<CatalogueItemCard
				key={catalogueItem.id}
				catalogueItemData={catalogueItem}
			/>
		))
	}

	return (
		<div className='h-[calc(100vh_-_3rem)] bg-white'>
			<div className='bg-cloud-burst py-10 px-10 text-3xl text-white'>
				Search Catalogue
			</div>
			<div className='my-8 flex flex-row px-10'>
				<div className='w-1/3 font-bold text-cloud-burst'>Filters</div>
				<div className='flex w-2/3 flex-col'>
					<input
						placeholder='Search for a dataset or a model'
						className='appearance-none rounded border py-2 px-3 text-cloud-burst shadow'
					/>
					<div className='mt-3 text-cloud-burst'>{catalogueItemsSection}</div>
				</div>
			</div>
		</div>
	)
}

export default CataloguePage
