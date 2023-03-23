import type { CatalogueItemType } from 'types/CatalogueItem.type'
import type { FilterOption, ValueLabel } from 'types/SearchFilters.type'

export const makeLabels = (items: (string | undefined)[]): ValueLabel[] =>
	items
		.filter(item => item !== undefined)
		.map(item => ({ label: item, value: item }))

export const getFilterOptions = (
	filterKey: keyof CatalogueItemType,
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems.reduce<FilterOption[]>((acc, item) => {
		if (!item[filterKey]) {
			return acc
		}

		const entry = acc.find(obj => obj.value === item[filterKey])
		if (entry) {
			entry.catalogueIds.push(item.id)
			return acc
		}

		acc.push({
			catalogueIds: [item.id],
			label: item[filterKey] as string,
			value: item[filterKey] as string
		})
		return acc
	}, [])
