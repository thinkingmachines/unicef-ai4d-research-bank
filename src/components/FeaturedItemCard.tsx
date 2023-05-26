import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import { formatString } from 'utils/String.util'
import HOME_PATH from '../constants'

interface Props {
	item: CatalogueItemType
	image: string
}

const FeaturedItemCard = ({ item, image }: Props) => {
	const handleItemCardType =
		item['card-type'] === 'model' ? 'MACHINE LEARNING MODEL' : 'DATASET'

	return (
		<div className='rounded-md border border-gray-300' data-cy='featured-card'>
			<Link to={`${HOME_PATH}/catalogue/${item.id}`}>
				<div className='h-[200px]'>
					<img
						// src={image}
						src={`${HOME_PATH}/${item['detail-image-url'] ?? image}`}
						alt={item.name}
						className='h-full w-full rounded-t-sm object-cover'
					/>
				</div>
				<div className='flex flex-col py-3 px-5'>
					<span
						className='text-xs text-gray-600'
						data-cy='featured-card-org-name'
					>
						{item.organization.name}
					</span>
					<span
						className='text-base font-semibold text-cloud-burst'
						data-cy='featured-card-name'
					>
						{item.name} ({item['year-period']})
					</span>
					<div className='flex'>
						<div className='align-center my-2 rounded-md bg-[#EDF8FC] py-1  px-2 text-sm font-normal  text-[#24295C] '>
							{handleItemCardType}
						</div>
						<div />
					</div>
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
								<span
									className='text-xs text-gray-600'
									data-cy='featured-card-country-region'
								>
									Country/Region: {formatString(item['country-region'])}
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
								<span
									className='text-xs text-gray-600'
									data-cy='featured-card-year-period'
								>
									Year/Period: {item['year-period']}
								</span>
							</div>
						) : undefined}
					</div>
				</div>
			</Link>
		</div>
	)
}
export default FeaturedItemCard
