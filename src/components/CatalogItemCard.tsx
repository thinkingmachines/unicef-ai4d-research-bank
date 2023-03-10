import CatalogItemMock from '../mocks/CatalogItem.data.json'

const CatalogItemCard = () => {
	const {
		name,
		description,
		organization,
		'country-region': countryRegion,
		'date-added': dateAdded,
		'year-period': yearPeriod
	} = CatalogItemMock

	return (
		<div className='my-3 flex flex-col rounded border p-3'>
			<span className='text-xs text-cloud-burst'>{organization.name}</span>
			<span className='text-md font-bold text-cloud-burst'>
				{name} ({yearPeriod})
			</span>
			<p className='text-xs text-gray-600'>{description}</p>
			<div className='mt-3 flex flex-row'>
				<span className='w-1/2 text-xs text-gray-600'>
					Country/Region: {countryRegion}
				</span>
				<span className='w-1/2 text-xs text-gray-600'>
					Date Created: {dateAdded}
				</span>
			</div>
		</div>
	)
}

export default CatalogItemCard
