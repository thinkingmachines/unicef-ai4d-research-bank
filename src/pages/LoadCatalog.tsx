import { fetchCatalogItems } from 'api'
import CatalogueItemCard from 'components/CatalogueItemCard'
import { useEffect, useState } from 'react'
import type { CatalogueItemType } from 'types/CatalogueItem.type'

const LoadCatalog = () => {
	const [catalogueItems, setCatalogueItems] = useState<CatalogueItemType[]>([])

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		const fetchData = async () => {
			const nextCatalogueItems = await fetchCatalogItems()
			setCatalogueItems(nextCatalogueItems)
		}

		void fetchData()
	}, [])

	if (catalogueItems.length === 0) {
		return <div>Loading...</div>
	}
	return (
		<div>
			{catalogueItems.map(catalogueItem => (
				<CatalogueItemCard
					key={catalogueItem.id}
					catalogueItemData={catalogueItem}
				/>
			))}
		</div>
	)
}
export default LoadCatalog
