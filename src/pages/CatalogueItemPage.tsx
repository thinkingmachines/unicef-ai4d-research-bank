import { useParams } from 'react-router-dom'
import CatalogueItemsMock from '../mocks/CatalogueItems.data.json'

const CatalogueItemPage = () => {
	const { id } = useParams()

	const catalogueItem = CatalogueItemsMock.items.find(
		mockCatalogueItem => mockCatalogueItem.id === id
	)

	if (!catalogueItem) {
		return <div>error</div>
	}

	const {
		name,
		description,
		organization,
		'date-added': dateAdded,
		'year-period': yearPeriod,
		'country-region': countryRegion,
		'evaluation-metrics': evaluationMetrics,
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
						<tr>
							<td className='font-bold'>Country/Region:</td>
							<td>{countryRegion}</td>
						</tr>
						<tr>
							<td className='font-bold'>Year/Period:</td>
							<td>{yearPeriod}</td>
						</tr>
						<tr>
							<td className='mr-3 font-bold'>Evaluation Metric:</td>
							<td>
								<a href={evaluationMetrics.link.url}>
									{evaluationMetrics.metric['metric-type']}(
									{evaluationMetrics.metric.value})
								</a>
							</td>
						</tr>
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
