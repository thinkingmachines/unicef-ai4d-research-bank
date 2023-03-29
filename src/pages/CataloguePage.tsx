import { DatePicker, Select, Skeleton, Space } from 'antd'
import CatalogueItemCard from 'components/CatalogueItemCard'
import SearchInput from 'components/SearchInput'
import { useCatalogueItemContext } from 'context/CatalogueItemContext'
import { useFilterContext } from 'context/FilterContext'
import type { DateFilterType } from 'types/SearchFilters.type'
import CatalogueHeroImg from '../assets/catalogue-hero-bg.jpg'

const { RangePicker } = DatePicker

const CataloguePage = () => {
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

	const onDateCreatedChange = (dates: DateFilterType) => {
		setFilters(prevFilters => ({ ...prevFilters, dateCreatedFilter: dates }))
	}

	const onDateUpdatedChange = (dates: DateFilterType) => {
		setFilters(prevFilters => ({ ...prevFilters, dateUpdatedFilter: dates }))
	}

	const onSearchBtnClick = (searchValue: string) => {
		setFilters(prevFilters => ({ ...prevFilters, searchValue }))
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

	if (!isLoading && filteredCatalogueItems.length > 0) {
		catalogueItemsSection = (
			<>
				<span className='text-sm text-gray-500'>
					{filteredCatalogueItems.length} results available
				</span>
				<div className='grid grid-cols-1 divide-y divide-gray-100 '>
					{filteredCatalogueItems.map(catalogueItem => (
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
								defaultValue={filters.countryFilter}
								onChange={onCountryRegionChange}
								options={countries}
							/>
						</div>

						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Date Created</span>
							<RangePicker
								style={{ width: '100%', marginTop: '8px' }}
								onChange={onDateCreatedChange}
								defaultValue={filters.dateCreatedFilter}
							/>
						</div>

						<div className='pt-3'>
							<span className='font-bold text-cloud-burst'>Date Updated</span>
							<RangePicker
								style={{ width: '100%', marginTop: '8px' }}
								onChange={onDateUpdatedChange}
								defaultValue={filters.dateUpdatedFilter}
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
					<SearchInput onSearchBtnClick={onSearchBtnClick} path='' />
					<div className='mt-3 text-cloud-burst'>{catalogueItemsSection}</div>
				</div>
			</div>
		</div>
	)
}

export default CataloguePage
