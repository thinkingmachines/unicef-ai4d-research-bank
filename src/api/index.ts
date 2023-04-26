/* eslint-disable no-console, @typescript-eslint/restrict-template-expressions */
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import HOME_PATH from '../constants'

export const fetchCatalogItems = async (): Promise<CatalogueItemType[]> => {
	try {
		const response = await fetch(`${HOME_PATH}/api/data/catalog.json`)
		const catalog: CatalogueItemType[] =
			(await response.json()) as CatalogueItemType[]
		return catalog
	} catch (error) {
		console.log(`Error: no catalog items found due to error: ${error}`)
		return []
	}
}

export const fetchFeaturedIds = async (): Promise<Record<string, string>[]> => {
	try {
		const response = await fetch(`${HOME_PATH}/api/data/featured.json`)
		const featured: Record<string, string>[] =
			(await response.json()) as Record<string, string>[]
		return featured
	} catch (error) {
		console.log(`Error: no featured items found due to error: ${error}`)
		return []
	}
}
