import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import { formatString } from 'utils/String.util'
import HOME_PATH from '../constants'

interface Props {
	item: CatalogueItemType
	image: string
}

const FeaturedItemCard = ({ item, image }: Props) => (
	<div className='rounded-md border border-gray-300'>
		<Link to={`${HOME_PATH}/catalogue/${item.id}`}>
			<div className='h-[200px]'>
				<img
					src={image}
					alt={item.name}
					className='h-full w-full rounded-t-sm object-cover'
				/>
			</div>
			<div className='flex flex-col py-3 px-5'>
				<span className='text-xs text-gray-600'>{item.organization.name}</span>
				<span className='text-base font-semibold text-cloud-burst'>
					{item.name} ({item['year-period']})
				</span>
				<div className='align-center m-t-auto my-2 flex flex-row gap-5'>
					{item['country-region'] ? (
						<div className='flex flex-row'>
							<EnvironmentOutlined
								style={{
									color: '#4B5563',
									marginRight: '4px',
									fontSize: '14px'
								}}
							/>
							<span className='text-xs text-gray-600'>
								Year/Period: {formatString(item['country-region'])}
							</span>
						</div>
					) : undefined}
					{item['year-period'] ? (
						<div className='flex flex-row'>
							<CalendarOutlined
								style={{
									color: '#4B5563',
									marginRight: '4px',
									fontSize: '14px'
								}}
							/>
							<span className='text-xs text-gray-600'>
								Year/Period: {item['year-period']}
							</span>
						</div>
					) : undefined}
				</div>
			</div>
		</Link>
	</div>
)

export default FeaturedItemCard
