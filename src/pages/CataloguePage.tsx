import type { PaginationProps } from 'antd'
import { DatePicker, Pagination, Select, Skeleton, Space } from 'antd'
import CatalogueItemCard from 'components/CatalogueItemCard'
import CustomRadio from 'components/Radio'
import SearchInput from 'components/SearchInput'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useSearchContext } from 'context/SearchContext'
import { useState } from 'react'
import type { DateFilterType } from 'types/SearchFilters.type'
import CatalogueHeroImg from '../assets/catalogue-hero-bg.jpg'
import { PAGE_SIZE } from '../constants/index'
import '../css/Pagination.css'

const { RangePicker } = DatePicker

const CataloguePage = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)

	const { setSearchInput } = useSearchContext()
	const { filteredCatalogueItems, isLoading: isCatalogueItemsLoading } =
		useCatalogueItemContext()
	const {
		countries,
		organizations,
		tags,
		filters,
		setFilters,
		isFiltersLoading
	} = useFilterContext()
	const isLoading = isCatalogueItemsLoading || isFiltersLoading
	let catalogueItemsSection

	const onCountryRegionChange = (value: string[]) => {
		setFilters(prevFilters => ({ ...prevFilters, countryFilter: value }))
	}

	const onOrganizationChange = (value: string[]) => {
		setFilters(prevFilters => ({ ...prevFilters, organizationFilter: value }))
	}

	const onTagsChange = (value: string[]) => {
		setFilters(prevFilters => ({ ...prevFilters, tagsFilter: value }))
	}

	const onYearChange = (years: DateFilterType) => {
		setFilters(prevFilters => ({ ...prevFilters, yearFilter: years }))
	}

	const onSearchBtnClick = (
		searchValue: string,
		event?:
			| React.ChangeEvent<HTMLInputElement>
			| React.KeyboardEvent<HTMLInputElement>
			| React.MouseEvent<HTMLElement, MouseEvent> // eslint-disable-line @typescript-eslint/no-unnecessary-type-arguments
	) => {
		setFilters(prevFilters => ({ ...prevFilters, searchValue }))

		if (event?.type === 'click' && event.currentTarget.localName === 'input') {
			setSearchInput('')
		}
	}

	if (isLoading) {
		catalogueItemsSection = (
			<div className='mt-3 p-3'>
				<Skeleton />
			</div>
		)
	}

	if (!isLoading && filteredCatalogueItems.length === 0) {
		catalogueItemsSection = <span>No catalogue items available.</span>
	}

	const startIndex = (currentPage - 1) * PAGE_SIZE
	const endIndex = startIndex + PAGE_SIZE

	if (!isLoading && filteredCatalogueItems.length > 0) {
		catalogueItemsSection = (
			<>
				<span className='text-sm text-gray-500'>
					{filteredCatalogueItems.length}
					{filteredCatalogueItems.length === 1 ? ' result ' : ' results '}
					available
				</span>
				<div className='grid grid-cols-1 divide-y divide-gray-100 '>
					{filteredCatalogueItems
						.slice(startIndex, endIndex)
						.map(catalogueItem => (
							<CatalogueItemCard
								key={catalogueItem.id}
								catalogueItemData={catalogueItem}
							/>
						))}
				</div>
			</>
		)
	}

	const onChange: PaginationProps['onChange'] = page => {
		setCurrentPage(page)
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
			<div className='flex flex-col px-10 pb-8 pt-5 '>
				<div className='pb-5'>
					<SearchInput onSearchBtnClick={onSearchBtnClick} path='' />
				</div>

				<div className='flex'>
					<div className='mr-16 w-full self-start rounded-md bg-gray-50 p-6 md:w-1/3'>
						<span className='font-semibold text-cloud-burst'>FILTERS</span>
						<Space style={{ width: '100%' }} direction='vertical'>
							<div className='pt-3'>
								<span className='font-bold text-cloud-burst'>
									Country/Region
								</span>
								<Select
									mode='multiple'
									allowClear
									style={{ width: '100%', marginTop: '8px' }}
									placeholder='Select a country/region...'
									defaultValue={filters.countryFilter}
									onChange={onCountryRegionChange}
									options={countries}
								/>
							</div>

							<div className='pt-3'>
								<span className='font-bold text-cloud-burst'>Year</span>
								<RangePicker
									style={{ width: '100%', marginTop: '8px' }}
									onChange={onYearChange}
									defaultValue={filters.yearFilter}
									picker='year'
									allowEmpty={[true, true]}
								/>
							</div>

							<div className='pt-3'>
								<span className='font-bold text-cloud-burst'>Organization</span>
								<Select
									mode='multiple'
									allowClear
									style={{ width: '100%', marginTop: '8px' }}
									placeholder='Select an organization...'
									defaultValue={filters.organizationFilter}
									onChange={onOrganizationChange}
									options={organizations}
								/>
							</div>

							<div className='pt-3'>
								<span className='font-bold text-cloud-burst'>Tags</span>
								<Select
									mode='tags'
									allowClear
									style={{ width: '100%', marginTop: '8px' }}
									placeholder='Select a tag...'
									defaultValue={filters.tagsFilter}
									onChange={onTagsChange}
									options={tags}
								/>
							</div>
						</Space>
					</div>
					<div className='my-5 flex w-full flex-col md:my-0 md:w-2/3'>
						<div className='flex'>
							<div className='bg-sky-200'>
								<CustomRadio />
							</div>
							<div className='bg-sky-200'>Dropdown</div>
						</div>

						<div className='my-3  text-cloud-burst'>
							{catalogueItemsSection}
						</div>
						<Pagination
							current={currentPage}
							onChange={onChange}
							total={filteredCatalogueItems.length}
							pageSize={PAGE_SIZE}
							showSizeChanger={false}
							showTotal={total => `Total ${total} items`}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CataloguePage
