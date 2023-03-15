import type { CatalogueItemType } from 'types/CatalogueItem.type'
import HOME_PATH from '../constants'

export const fetchCatalogItems = async (): Promise<CatalogueItemType[]> => {
	const response = await fetch(`${HOME_PATH}/api/data/catalog.json`)
	const catalog: CatalogueItemType[] =
		(await response.json()) as CatalogueItemType[]
	return catalog
}

export const fetchCatalogItem = async (
	catalogItemId?: string
): Promise<CatalogueItemType | undefined> => {
	const catalogItems: CatalogueItemType[] = await fetchCatalogItems()
	return catalogItems.find(item => item.id === catalogItemId)
}
