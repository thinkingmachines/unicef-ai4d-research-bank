import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
import AirQualityThailandImage from 'assets/featured/airquality-thailand-model.png'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import { formatString } from 'utils/String.util'

interface Props {
	item: CatalogueItemType
}

const FeaturedItemCard = ({ item }: Props) => (
	<div className='rounded-t-md border border-gray-300'>
		<div className='h-[200px]'>
			<img
				src={AirQualityThailandImage}
				alt={item.name}
				className='h-full w-full rounded-t-md object-cover'
			/>
		</div>
		<div className='flex flex-col py-3 px-5'>
			<span className='text-xs text-gray-600'>{item.organization.name}</span>
			<span className='text-base font-semibold text-cloud-burst'>
				{item.name} ({item['year-period']})
			</span>
			<div className='flex flex-row'>
				{item['country-region'] ? (
					<div className='flex flex-row items-center'>
						<EnvironmentOutlined
							style={{
								color: '#4B5563',
								marginRight: '4px',
								fontSize: '14px'
							}}
						/>
						<span className='w-1/2 text-xs text-gray-600'>
							Year/Period: {formatString(item['country-region'])}
						</span>
					</div>
				) : undefined}
				{item['year-period'] ? (
					<div>
						<CalendarOutlined
							style={{
								color: '#4B5563',
								marginRight: '4px',
								fontSize: '14px'
							}}
						/>
						<span className='w-1/2 text-xs text-gray-600'>
							Year/Period: {item['year-period']}
						</span>
					</div>
				) : undefined}
			</div>
		</div>
	</div>
)

export default FeaturedItemCard
