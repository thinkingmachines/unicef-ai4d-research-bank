import type { PaginationProps } from 'antd'
import { DatePicker, Pagination, Select, Skeleton, Space } from 'antd'
import CatalogueItemCard from 'components/CatalogueItemCard'
import CustomRadio from 'components/CustomRadio'
import CustomSelect from 'components/CustomSelect'
import SearchInput from 'components/SearchInput'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import { useSearchContext } from 'context/SearchContext'
import { useEffect, useState } from 'react'
import type { DateFilterType } from 'types/SearchFilters.type'
import CatalogueHeroImg from '../assets/catalogue-hero-bg.jpg'
import type { SelectOption, ToggleOption } from '../constants/index'
import { PAGE_SIZE, SELECT_OPTIONS, TOGGLE_OPTIONS } from '../constants/index'
import '../css/Pagination.css'

const { RangePicker } = DatePicker

const CataloguePage = () => {
	const [currentPage, setCurrentPage] = useState<number>(1)
	const [radioOptions, setRadioOptions] = useState<ToggleOption>(
		TOGGLE_OPTIONS.All
	)
	const [selectOptions, setSelectOptions] = useState<SelectOption>(
		SELECT_OPTIONS.none
	)

	const { setSearchInput } = useSearchContext()
	const { filteredCatalogueItems, isLoading: isCatalogueItemsLoading } =
		useCatalogueItemContext()

	const [filteredData, setFilteredData] = useState(filteredCatalogueItems)

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

	useEffect(() => {
		const toggleFilteredData = filteredCatalogueItems.filter(item => {
			if (radioOptions === TOGGLE_OPTIONS.model) {
				return item['card-type'] === 'model'
			}
			if (radioOptions === TOGGLE_OPTIONS.dataset) {
				return item['card-type'] === 'dataset'
			}

			return true
		})

		const sortedData = [...toggleFilteredData] // Create a copy of toggleFilteredData

		if (selectOptions === SELECT_OPTIONS.yearAsc) {
			sortedData.sort((a, b) => {
				const yearPeriodA = a['year-period']
					? Number.parseInt(a['year-period'], 10)
					: 0
				const yearPeriodB = b['year-period']
					? Number.parseInt(b['year-period'], 10)
					: 0

				return yearPeriodA - yearPeriodB
			})
		}

		if (selectOptions === SELECT_OPTIONS.yearDesc) {
			sortedData.sort((a, b) => {
				const yearPeriodA = a['year-period']
					? Number.parseInt(a['year-period'], 10)
					: 0
				const yearPeriodB = b['year-period']
					? Number.parseInt(b['year-period'], 10)
					: 0

				return yearPeriodB - yearPeriodA
			})
		}

		if (selectOptions === SELECT_OPTIONS.nameAsc) {
			sortedData.sort((a, b) => a.name.localeCompare(b.name))
		}

		if (selectOptions === SELECT_OPTIONS.nameDesc) {
			sortedData.sort((a, b) => b.name.localeCompare(a.name))
		}

		setFilteredData(sortedData)
	}, [radioOptions, filteredCatalogueItems, selectOptions])

	const startIndex = (currentPage - 1) * PAGE_SIZE
	const endIndex = startIndex + PAGE_SIZE

	if (!isLoading && filteredData.length > 0) {
		catalogueItemsSection = (
			<>
				<span className='text-sm text-gray-500'>
					{filteredData.length}
					{filteredData.length === 1 ? ' result ' : ' results '}
					available
				</span>
				<div className='grid grid-cols-1 divide-y divide-gray-100 '>
					{filteredData.slice(startIndex, endIndex).map(catalogueItem => (
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
		<div className='min-h-[calc(100vh_-_3rem)] w-full bg-white'>
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

				<div className='flex w-full flex-col md:flex-row'>
					<div className='mr-16 w-full self-start rounded-md bg-gray-50 p-6 md:w-1/3'>
						<span className='font-semibold text-cloud-burst'>FILTERS</span>
						<Space style={{ width: '100%' }} direction='vertical'>
							<div className='pt-3'>
								<span
									className='font-bold text-cloud-burst'
									data-cy='country-filter'
								>
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
									data-cy='select-tags'
								/>
							</div>
						</Space>
					</div>
					<div className='my-5 w-full flex-col md:my-0 md:w-2/3'>
						<div className='flex flex-col md:flex-row'>
							<div className='mb-5 md:mb-auto'>
								<CustomRadio
									updateParentOptions={(value: ToggleOption) => {
										setRadioOptions(value)
									}}
								/>
							</div>
							<div className='py-1 text-sm font-normal text-[#82838D] md:mx-6'>
								Sort by:
							</div>
							<div data-cy='catalogue-dropdown-filter'>
								<CustomSelect
									updateParentOptions={(value: SelectOption) => {
										setSelectOptions(value)
									}}
								/>
							</div>
						</div>

						<div className='my-3  text-cloud-burst'>
							{catalogueItemsSection}
						</div>
						<Pagination
							current={currentPage}
							onChange={onChange}
							total={filteredData.length}
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
