/* eslint-disable unicorn/no-null */
import {
	CalendarOutlined,
	EnvironmentOutlined,
	TagsOutlined
} from '@ant-design/icons'
import { Skeleton, Tabs } from 'antd'
import CatalogueItemData from 'components/CatalogueItemData'
import CatalogueItemLinks from 'components/CatalogueItemLinks'
import CatalogueItemOverview from 'components/CatalogueItemOverview'
import NotFound from 'components/NotFound'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useSearchContext } from 'context/SearchContext'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { formatString } from 'utils/String.util'
import Tag from '../components/Tag'
import {
	TEMP_NUMBER_OF_DOWNLOADS,
	TEMP_WHO_DOWNLOADED
} from '../constants/index'
import type { CatalogueItemType } from '../types/CatalogueItem.type'

const defaultFilters = {
	countryFilter: [],
	organizationFilter: [],
	tagsFilter: [],
	yearFilter: null,
	searchValue: ''
}

const CatalogueItemPage = () => {
	const { id } = useParams()
	const { setSearchInput } = useSearchContext()
	const { setFilters, setIsFiltersLoading } = useFilterContext()
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState(true)
	const [catalogueItem, setCatalogueItem] = useState<
		CatalogueItemType | undefined
	>()

	const catalogueItemContext = useCatalogueItemContext()
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			if (id && !catalogueItemContext.isLoading) {
				const nextCatalogueItem = catalogueItemContext.catalogueItems.find(
					item => item.id === id
				)
				if (nextCatalogueItem) {
					setCatalogueItem(nextCatalogueItem)
				}
			}
			setIsLoading(false)
		}
		void fetchData()
	}, [catalogueItemContext, id])

	const onTagClick = (value: string) => {
		setIsFiltersLoading(true)
		setSearchInput('')
		setFilters({
			...defaultFilters,
			tagsFilter: [value]
		})
		navigate('../')
	}

	if (isLoading || catalogueItemContext.isLoading) {
		return (
			<div className='h-[calc(100vh_-_3rem)]  bg-white'>
				<div className='flex h-[11rem] flex-col gap-2 bg-cloud-burst p-10'>
					<Skeleton active title paragraph={false} />
					<Skeleton.Input active size='large' block />
					<Skeleton active title paragraph={false} />
				</div>
				<div className='p-10'>
					<Skeleton />
				</div>
			</div>
		)
	}

	if (!catalogueItem) {
		return <NotFound />
	}

	const {
		name,
		organization,
		'date-added': dateAdded,
		'date-modified': dateModified,
		'year-period': yearPeriod,
		'country-region': countryRegion,
		tags,
		'detail-image-url': detailImage
	} = catalogueItem

	let yearPeriodTitle
	if (yearPeriod) {
		yearPeriodTitle = <span>({yearPeriod})</span>
	}

	const tabItems = [
		{
			key: '1',
			label: 'Overview',
			children: <CatalogueItemOverview catalogueItem={catalogueItem} />
		},
		{
			key: '2',
			label: 'Data',
			children: <CatalogueItemData catalogueItem={catalogueItem} />
		},
		{
			key: '3',
			label: 'Related Links',
			children: <CatalogueItemLinks catalogueItem={catalogueItem} />
		}
	]

	const bannerImage = detailImage ? `../${detailImage}` : null

	return (
		<div className='min-h-[calc(100vh_-_3rem)] bg-white'>
			<div className='relative flex min-h-[10rem] flex-col items-center justify-center bg-cloud-burst p-10 text-white'>
				{detailImage ? (
					<img
						src={bannerImage ?? ''}
						alt='BannerImage'
						className='bg absolute z-0 h-full w-full object-cover'
					/>
				) : null}
				<div className='absolute z-10 h-full w-full bg-cloud-burst opacity-80 brightness-75' />

				<span className='z-20 self-start pl-28 text-3xl font-medium tracking-tighter'>
					{name} {yearPeriodTitle}
				</span>
				<div className='z-20 mt-2 flex flex-row gap-3 self-start pl-28 text-sm'>
					<a
						href={organization.url}
						className='z-20 self-start text-sm hover:underline'
						target='_blank'
						rel='noreferrer'
					>
						{organization.name}
					</a>
					<div>&#8226;</div>
					<div>{TEMP_NUMBER_OF_DOWNLOADS} downloads</div>
				</div>
			</div>

			<div className='flex flex-col pl-28 md:flex-row'>
				<div className='flex w-full flex-col gap-4 p-10 text-cloud-burst md:w-2/3'>
					<Tabs defaultActiveKey='1' items={tabItems} />
				</div>
				<div
					className='flex w-full flex-col gap-5 p-10 text-cloud-burst md:w-1/3'
					data-cy='catalog-item-aside'
				>
					<div className='rounded bg-gray-50 p-6'>
						<div className='flex flex-col gap-5'>
							<div className='align-center flex flex-row gap-3'>
								<EnvironmentOutlined
									style={{
										color: '#6b7280',
										fontSize: '24px',
										margin: 'auto 0'
									}}
								/>
								<div className='flex flex-col'>
									<span className='text-xs font-medium text-gray-500'>
										COUNTRY / REGION
									</span>
									<span className='text-sm font-medium'>
										{countryRegion ? formatString(countryRegion) : '-'}
									</span>
								</div>
							</div>
							<div className='align-center flex flex-row gap-3'>
								<CalendarOutlined
									style={{
										color: '#6b7280',
										fontSize: '24px',
										margin: 'auto 0'
									}}
								/>
								<div className='flex flex-col'>
									<span className='text-xs font-medium text-gray-500'>
										YEAR / PERIOD
									</span>
									<span className='text-sm font-medium'>
										{yearPeriod ?? '-'}
									</span>
								</div>
							</div>

							<div className='align-center flex flex-row gap-3'>
								<CalendarOutlined
									style={{
										color: '#6b7280',
										fontSize: '24px',
										margin: 'auto 0'
									}}
								/>
								<div className='flex flex-col'>
									<span className='text-xs font-medium text-gray-500'>
										DATE CREATED
									</span>
									<span className='text-sm font-medium'>
										{dayjs(dateAdded).format('MMM DD, YYYY')}
									</span>
								</div>
							</div>
							{dateModified ? (
								<div className='flex flex-col'>
									<span className='text-xs font-medium text-gray-500'>
										DATE UPDATED
									</span>
									<span className='text-sm font-medium'>
										{dayjs(dateModified).format('MMM DD, YYYY')}
									</span>
								</div>
							) : undefined}
						</div>
					</div>
					<div className='rounded bg-gray-50 p-5'>
						<span className='text-sm font-semibold'>
							This dataset has been downloaded by:
						</span>
						{TEMP_WHO_DOWNLOADED.map(data => (
							<div className='flex flex-wrap gap-3 py-3' key={data}>
								{data}
							</div>
						))}
					</div>
					<div
						className='bg-gray-50p-5 rounded'
						data-cy='catalog-item-aside-tags'
					>
						<span className='text-sm font-semibold'>
							<TagsOutlined style={{ marginRight: '8px' }} />
							Tags
						</span>
						<div className='flex flex-wrap gap-3 py-3'>
							{tags?.map(tag => (
								<Tag key={tag} value={tag} onFilterClick={onTagClick}>
									{tag}
								</Tag>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogueItemPage
