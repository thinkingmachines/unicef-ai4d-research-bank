import type { CatalogueItemType } from 'types/CatalogueItem.type'
import HOME_PATH from '../constants'

// eslint-disable-next-line import/prefer-default-export
export const fetchCatalogItems = async (): Promise<CatalogueItemType[]> => {
	try {
		const response = await fetch(`${HOME_PATH}/api/data/catalog.json`)
		const catalog: CatalogueItemType[] =
			(await response.json()) as CatalogueItemType[]
		return catalog
	} catch (error) {
		// eslint-disable-next-line no-console, @typescript-eslint/restrict-template-expressions
		console.log(`Error: no catalog items found due to error: ${error}`)
		return []
	}
}
