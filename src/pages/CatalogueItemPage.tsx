import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { Skeleton } from 'antd'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import formatString from 'utils/String.util'
import Tag from '../components/Tag'
import type { CatalogueItemType } from '../types/CatalogueItem.type'

const defaultFilters = {
	countryFilter: [],
	organizationFilter: [],
	tagsFilter: [],
	// eslint-disable-next-line unicorn/no-null
	dateCreatedFilter: null,
	// eslint-disable-next-line unicorn/no-null
	dateUpdatedFilter: null,
	searchValue: ''
}

const CatalogueItemPage = () => {
	const { id } = useParams()
	const { setFilters } = useFilterContext()
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
		return (
			<div className='h-[calc(100vh_-_3rem)] bg-white text-cloud-burst'>
				error
			</div>
		)
	}

	const {
		name,
		description,
		organization,
		'date-added': dateAdded,
		'date-modified': dateModified,
		'year-period': yearPeriod,
		'country-region': countryRegion,
		'evaluation-metrics': evaluationMetric,
		'card-type': cardType,
		links,
		tags
	} = catalogueItem

	const evaluationMetricSection = evaluationMetric?.map(evalItem => {
		const { metric, link } = evalItem
		// Metric and link can be undefined so there is a need to check if it exists
		const metricItem = metric && (
			<>
				{metric['metric-type']} ({metric.value})
			</>
		)
		const linkItem = link && (
			<a
				href={link.url}
				target='_blank'
				rel='noreferrer'
				className='hover:underline'
			>
				{link.description}
			</a>
		)
		if (metric && link) {
			return (
				<div className='' key={metric['metric-type']}>
					{metricItem}
					<br />
					{linkItem}
				</div>
			)
		}
		if (metric) {
			return <div key={metric['metric-type']}>{metricItem}</div>
		}
		if (link) {
			return <div key={link.url}>{linkItem}</div>
		}
		return '-'
	})

	let yearPeriodTitle
	if (yearPeriod) {
		yearPeriodTitle = <span>({yearPeriod})</span>
	}

	return (
		<div className='min-h-[calc(100vh_-_3rem)] bg-white'>
			<div className='flex min-h-[10rem] flex-col bg-cloud-burst p-10 text-white'>
				<a
					href={organization.url}
					className='text-sm hover:underline'
					target='_blank'
					rel='noreferrer'
				>
					{organization.name}
				</a>
				<span className='text-3xl font-medium tracking-tighter'>
					{name} {yearPeriodTitle}
				</span>
				<div className='mt-2 flex flex-row gap-10 text-sm'>
					<span>Country/Region: {countryRegion ?? '-'}</span>
					<span>Date Created: {dateAdded}</span>
					{dateModified ? <span>Date Updated: {dateModified}</span> : undefined}
					<span>Type: {cardType}</span>
				</div>
			</div>
			<div className='flex flex-col md:flex-row'>
				<div className='flex w-full flex-col gap-4 p-10 text-cloud-burst md:w-2/3'>
					<section className='mb-5'>
						<span className='text-sm font-semibold'>Overview</span>
						<p className='mx-5 mt-3 text-gray-600'>{description}</p>
					</section>
					<section>
						<h2 className='mt-5 text-sm font-semibold'>Properties</h2>
						<table className='mt-3 mb-5 border-separate border-spacing-x-5 border-spacing-y-2'>
							<tbody>
								<tr>
									<td className='font-medium'>Country/Region</td>
									<td className='text-gray-600'>{countryRegion ?? '-'}</td>
								</tr>
								<tr>
									<td className='font-medium'>Year/Period</td>
									<td className='text-gray-600'>{yearPeriod ?? '-'}</td>
								</tr>
								{evaluationMetric !== undefined && (
									<tr>
										<td className='align-top font-medium'>Evaluation Metric</td>
										<td>
											<div className='flex flex-col gap-3 text-gray-600'>
												{evaluationMetricSection}
											</div>
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</section>
					<section>
						<h2 className='mt-5 mb-3 text-sm font-semibold'>Data</h2>
						<div className='mb-5 grid-cols-1 divide-y divide-gray-100'>
							{links.map(link => (
								<div
									key={link.url}
									className='align-center flex flex-col rounded p-5'
								>
									<span className='text-xs text-gray-600'>{link.type}</span>
									<a
										href={link.url}
										key={`${link.description}`}
										target='_blank'
										rel='noreferrer'
										className='w-full hover:underline'
									>
										{link.description}
									</a>
								</div>
							))}
						</div>
					</section>
				</div>
				<div className='flex w-full flex-col gap-5 p-10 text-cloud-burst md:w-1/3'>
					<div className='rounded bg-gray-50 p-6'>
						<span className='font-semibold'>Details</span>
						<div className='flex flex-col gap-5'>
							<div className='align-center mt-5 flex flex-row gap-3'>
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
									<span className='font-medium'>
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
									<span className='font-medium'>{yearPeriod ?? '-'}</span>
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
									<span className='font-medium'>
										{dayjs(dateAdded).format('MMM DD, YYYY')}
									</span>
								</div>
							</div>
							{dateModified ? (
								<div className='flex flex-col'>
									<span className='text-xs font-medium text-gray-500'>
										DATE UPDATED
									</span>
									<span className='font-medium'>
										{dayjs(dateModified).format('MMM DD, YYYY')}
									</span>
								</div>
							) : undefined}
						</div>
					</div>
					<div className='rounded bg-gray-50 p-5'>
						<span className='text-sm font-semibold'>Tags</span>
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
