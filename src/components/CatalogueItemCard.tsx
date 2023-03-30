import { EnvironmentOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import { formatString } from 'utils/String.util'
import HOME_PATH from '../constants'

interface CatalogueItemProperties {
	catalogueItemData: CatalogueItemType
}

const CatalogueItemCard = ({ catalogueItemData }: CatalogueItemProperties) => {
	const {
		id,
		name,
		description,
		organization,
		'country-region': countryRegion,
		'year-period': yearPeriod
	} = catalogueItemData

	let yearPeriodSection
	if (yearPeriod) {
		yearPeriodSection = (
			<>
				<EnvironmentOutlined
					style={{ color: '#4B5563', marginRight: '4px', fontSize: '14px' }}
				/>
				<span className='w-1/2 text-xs text-gray-600'>
					Year/Period: {yearPeriod}
				</span>
			</>
		)
	}

	let countryRegionSection
	if (countryRegion) {
		countryRegionSection = (
			<>
				<EnvironmentOutlined
					style={{ color: '#4B5563', marginRight: '4px', fontSize: '14px' }}
				/>
				<span className='w-1/2 text-xs text-gray-600'>
					Country/Region: {formatString(countryRegion)}
				</span>
			</>
		)
	}

	return (
		<Link to={`${HOME_PATH}/catalogue/${id}`}>
			<div className='my-3 flex flex-col rounded p-3 hover:bg-gray-100 hover:duration-300'>
				<span className='text-xs text-gray-600'>{organization.name}</span>
				<div className='text-base font-semibold text-cloud-burst'>
					{name}
					{yearPeriod ? <span> ({yearPeriod})</span> : ''}
				</div>
				<p className='text-xs text-gray-600 line-clamp-2'>{description}</p>
				<div className='mt-3 flex flex-row'>
					{countryRegionSection}
					{yearPeriodSection}
				</div>
			</div>
		</Link>
	)
}

export default CatalogueItemCard
