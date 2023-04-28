import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import { formatString } from 'utils/String.util'

interface Props {
	suggestion: CatalogueItemType
}

const SearchSuggestion = ({ suggestion }: Props) => {
	const {
		organization,
		name,
		'year-period': yearPeriod,
		'country-region': countryRegion
	} = suggestion

	return (
		<div className='flex flex-col py-1'>
			<span className='text-xs text-gray-600'>{organization.name}</span>
			<span className='text-base font-semibold text-cloud-burst'>
				{name} ({yearPeriod})
			</span>
			<div className='flex flex-row gap-10'>
				{countryRegion ? (
					<div className='flex flex-row items-center'>
						<EnvironmentOutlined
							style={{
								color: '#4B5563',
								marginRight: '4px',
								fontSize: '14px'
							}}
						/>
						<span className='w-1/2 text-xs text-gray-600'>
							Country/Region: {formatString(countryRegion)}
						</span>
					</div>
				) : undefined}
				{yearPeriod ? (
					<div>
						<CalendarOutlined
							style={{
								color: '#4B5563',
								marginRight: '4px',
								fontSize: '14px'
							}}
						/>
						<span className='w-1/2 text-xs text-gray-600'>
							Year/Period: {yearPeriod}
						</span>
					</div>
				) : undefined}
			</div>
		</div>
	)
}

export default SearchSuggestion
