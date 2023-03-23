// eslint-disable-next-line import/no-extraneous-dependencies
import { AutoComplete, DatePicker, Select, Skeleton, Space } from 'antd'
import { getOrganizationList, getTagList } from 'api'
import CatalogueItemCard from 'components/CatalogueItemCard'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useEffect, useState } from 'react'
import type { ValueLabel } from 'types/SearchFilters.type'
import { makeLabels } from 'utils/Filters.util'
import CatalogueHeroImg from '../assets/catalogue-hero-bg.jpg'

const { RangePicker } = DatePicker

const onCountryRegionChange = () => {}
const onTagsChange = () => {}
const onOrganizationChange = () => {}

const CataloguePage = () => {
	const { catalogueItems, isLoading: isCatalogueItemsLoading } =
		useCatalogueItemContext()
	const { countries } = useFilterContext()
	const [isLoading, setIsLoading] = useState(true)
	const [orgList, setOrgList] = useState<ValueLabel[]>([])
	const [tagList, setTagList] = useState<ValueLabel[]>([])
	let catalogueItemsSection

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const nextOrgList = await getOrganizationList()
			const nextOrgLabels = makeLabels(nextOrgList)
			setOrgList(nextOrgLabels)
			const nextTagList = await getTagList()
			const nextTagLabels = makeLabels(nextTagList)
			setTagList(nextTagLabels)
			setIsLoading(false)
		}
		void fetchData()
	}, [])

	if (isLoading || isCatalogueItemsLoading) {
		catalogueItemsSection = (
			<div className='mt-3 p-3'>
				<Skeleton />
			</div>
		)
	}

	if (!isLoading && catalogueItems.length === 0) {
		catalogueItemsSection = <span>No catalogue items available.</span>
	}

	if (!isLoading && catalogueItems.length > 0) {
		catalogueItemsSection = (
			<>
				<span className='text-sm text-gray-500'>
					{catalogueItems.length} results available
				</span>
				<div className='grid grid-cols-1 divide-y divide-gray-100 '>
					{catalogueItems.map(catalogueItem => (
						<CatalogueItemCard
							key={catalogueItem.id}
							catalogueItemData={catalogueItem}
						/>
					))}
				</div>
			</>
		)
	}

	return (
		<div className='min-h-[calc(100vh_-_3rem)] bg-white'>
			<div className='relative flex flex-col items-center justify-center py-10 px-10 '>
				<img
					src={CatalogueHeroImg}
					alt='BannerImage'
					className='absolute z-0 h-full w-full object-cover'
				/>
				<div className='absolute z-10 h-full w-full bg-gradient-to-r from-cloud-burst to-transparent' />
				<span className='z-20 self-start text-3xl font-medium tracking-tighter text-white '>
					Search Catalogue
				</span>
			</div>
			<div className='my-8 flex flex-col px-10 md:flex-row'>
				<div className='mr-16 w-full rounded-md bg-gray-50 p-6 md:w-1/3'>
					<span className='font-semibold text-cloud-burst'>FILTERS</span>
					<Space style={{ width: '100%' }} direction='vertical'>
						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Country/Region</span>
							<Select
								mode='multiple'
								allowClear
								style={{ width: '100%', marginTop: '8px' }}
								placeholder='Select a country/region...'
								defaultValue={[]}
								onChange={onCountryRegionChange}
								options={countries}
							/>
						</div>

						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Date Created</span>
							<RangePicker style={{ width: '100%', marginTop: '8px' }} />
						</div>

						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Date Updated</span>
							<RangePicker style={{ width: '100%', marginTop: '8px' }} />
						</div>

						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Organization</span>
							<Select
								mode='multiple'
								allowClear
								style={{ width: '100%', marginTop: '8px' }}
								placeholder='Select an organization...'
								defaultValue={[]}
								onChange={onOrganizationChange}
								options={orgList}
							/>
						</div>

						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Tags</span>
							<Select
								mode='tags'
								allowClear
								style={{ width: '100%', marginTop: '8px' }}
								placeholder='Select a tag...'
								onChange={onTagsChange}
								options={tagList}
							/>
						</div>
					</Space>
				</div>
				<div className='my-5 flex w-full flex-col md:my-0 md:w-2/3'>
					<AutoComplete
						style={{ width: '100%' }}
						options={[{ value: 'Poverty Mapping for Timor Leste' }]}
						placeholder='Search for a dataset or a model'
						filterOption={(inputValue, option) =>
							option!.value.toUpperCase().includes(inputValue.toUpperCase())
						}
					/>
					<div className='mt-3 text-cloud-burst'>{catalogueItemsSection}</div>
				</div>
			</div>
		</div>
	)
}

export default CataloguePage
