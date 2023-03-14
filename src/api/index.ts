import type { CatalogueItemType } from 'types/CatalogueItem.type'

// eslint-disable-next-line import/prefer-default-export
export const fetchCatalogItems = async (): Promise<CatalogueItemType[]> => {
	const response = await fetch('/api/data/catalog.json') // Replace with your own JSON file path
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const catalog: CatalogueItemType[] = await response.json()
	return catalog
}

export const fetchCatalogItem = async (
	catalogItemId?: string
): Promise<CatalogueItemType | undefined> => {
	const catalogItems: CatalogueItemType[] = await fetchCatalogItems()
	return catalogItems.find(item => item.id === catalogItemId)
}
