/* eslint-disable unicorn/no-null */
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
): Promise<CatalogueItemType | null> => {
	const catalog = await fetchCatalogItems()
	const matchCatalog = catalog.filter(item => item.id === id)
	if (matchCatalog.length > 0) {
		const nextItem = matchCatalog[0]
		return nextItem
	}
	return null
}
