// eslint-disable-next-line import/no-extraneous-dependencies
import { AutoComplete, DatePicker, Select, Space } from 'antd'
import {
	fetchCatalogItems,
	getCountryList,
	getOrganizationList,
	getTagList
} from 'api'
import CatalogueItemCard from 'components/CatalogueItemCard'
import { useEffect, useState } from 'react'
import type { CatalogueItemType } from 'types/CatalogueItem.type'

const { RangePicker } = DatePicker
interface ValueLabel {
	label: string | undefined
	value: string | undefined
}
const onCountryRegionChange = () => {}
const onTagsChange = () => {}
const onOrganizationChange = () => {}

const makeLabels = (items: (string | undefined)[]): ValueLabel[] =>
	items
		.filter(item => item !== undefined)
		.map(item => ({ label: item, value: item }))

const CataloguePage = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [catalogueItems, setCatalogueItems] = useState<CatalogueItemType[]>([])
	const [countryList, setCountryList] = useState<ValueLabel[]>([])
	const [orgList, setOrgList] = useState<ValueLabel[]>([])
	const [tagList, setTagList] = useState<ValueLabel[]>([])
	let catalogueItemsSection

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			const nextCatalogueItems = await fetchCatalogItems()
			setCatalogueItems(nextCatalogueItems)
			const nextCountryList = await getCountryList()
			const nextCountryLabels = makeLabels(nextCountryList)
			setCountryList(nextCountryLabels)
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

	if (isLoading) {
		catalogueItemsSection = <span>Loading...</span>
	}

	if (!isLoading && catalogueItems.length === 0) {
		catalogueItemsSection = <span>No catalogue items available.</span>
	}

	if (!isLoading && catalogueItems.length > 0) {
		catalogueItemsSection = catalogueItems.map(catalogueItem => (
			<CatalogueItemCard
				key={catalogueItem.id}
				catalogueItemData={catalogueItem}
			/>
		))
	}

	return (
		<div className='h-[calc(100vh_-_3rem)] bg-white'>
			<div className='bg-cloud-burst py-10 px-10 text-3xl text-white'>
				Search Catalogue
			</div>
			<div className='my-8 flex flex-row px-10'>
				<div className='w-1/3 px-10'>
					<span className='font-bold text-cloud-burst'>Filters</span>
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
								options={countryList}
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
								style={{ width: '100%' }}
								placeholder='Select a tag...'
								onChange={onTagsChange}
								options={tagList}
							/>
						</div>
					</Space>
				</div>
				<div className='flex w-2/3 flex-col'>
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
