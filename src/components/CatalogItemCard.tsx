import type { CatalogItemType } from 'types/CatalogItem.type'

interface CatalogItemProperties {
	catalogItemData: CatalogItemType
}

const CatalogItemCard = ({ catalogItemData }: CatalogItemProperties) => {
	const {
		name,
		description,
		organization,
		'country-region': countryRegion,
		'date-added': dateAdded,
		'date-modified': dateModified,
		'year-period': yearPeriod
	} = catalogItemData

	let yearPeriodSection
	if (yearPeriod) {
		yearPeriodSection = <span> ({yearPeriod})</span>
	}

	let countryRegionSection
	if (countryRegion) {
		countryRegionSection = (
			<span className='w-1/2 text-xs text-gray-600'>
				Country/Region: {countryRegion}
			</span>
		)
	}

	let dateModifiedSection
	if (dateModified) {
		dateModifiedSection = (
			<span className='w-1/2 text-xs text-gray-600'>
				Date Created: {dateModified}
			</span>
		)
	}

	return (
		<div className='my-3 flex flex-col rounded border p-3'>
			<span className='text-xs text-cloud-burst'>{organization.name}</span>
			<div className='text-md font-bold text-cloud-burst'>
				{name}
				{yearPeriodSection}
			</div>
			<p className='text-xs text-gray-600'>{description}</p>
			<div className='mt-3 flex flex-row'>
				{countryRegionSection}
				<span className='w-1/2 text-xs text-gray-600'>
					Date Created: {dateAdded}
				</span>
				{dateModifiedSection}
			</div>
		</div>
	)
}

export default CatalogItemCard
