import type { CatalogueItemType } from 'types/CatalogueItem.type'
import HOME_PATH from '../constants'

export const fetchCatalogItems = async (): Promise<CatalogueItemType[]> => {
	const response = await fetch(`${HOME_PATH}/api/data/catalog.json`)
	const catalog: CatalogueItemType[] =
		(await response.json()) as CatalogueItemType[]
	return catalog
}

export const fetchCatalogItem = async (
	id: string
): Promise<CatalogueItemType | undefined> => {
	const catalog = await fetchCatalogItems()
	return catalog.find(item => item.id === id)
}
