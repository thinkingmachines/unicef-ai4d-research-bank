import CatalogItemCard from 'components/CatalogItemCard'
import type { CatalogItemType } from 'types/CatalogItem.type'
import CatalogItemsMock from '../mocks/CatalogItems.data.json'

const CataloguePage = () => {
	const catalogItems = CatalogItemsMock.items as CatalogItemType[]

	return (
		<div className='h-[calc(100vh_-_3rem)] bg-white'>
			<div className='bg-cloud-burst py-10 px-10 text-3xl text-white'>
				Search Catalogue
			</div>
			<div className='my-8 flex flex-row px-10'>
				<div className='w-1/3 font-bold text-cloud-burst'>Filters</div>
				<div className='flex w-2/3 flex-col'>
					<input
						placeholder='Search for a dataset or a model'
						className='appearance-none rounded border py-2 px-3 text-cloud-burst shadow'
					/>
					{catalogItems.map(catalogItem => (
						<CatalogItemCard
							key={catalogItem.id}
							catalogItemData={catalogItem}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default CataloguePage
