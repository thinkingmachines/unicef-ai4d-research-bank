/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unicorn/no-null */

import dayjs from 'dayjs'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import type {
	DateFilterType,
	FilterOption,
	FiltersType
} from 'types/SearchFilters.type'
import { formatString } from './String.util'

export const getCountryOptions = (
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems
		.reduce<FilterOption[]>((acc, item) => {
			const { 'country-region': countryRegion, id } = item

			if (!countryRegion) {
				return acc
			}

			const countryObj = acc.find(obj => obj.value === countryRegion)
			if (countryObj) {
				countryObj.catalogueIds.push(id)
				return acc
			}

			acc.push({
				catalogueIds: [id],
				label: formatString(countryRegion),
				value: countryRegion
			})
			return acc
		}, [])
		.sort((a, b) => a.value.localeCompare(b.value))

export const getOrganizationOptions = (
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems
		.reduce<FilterOption[]>((acc, item) => {
			const { organization, id } = item

			const orgObj = acc.find(obj => obj.value === organization.name)
			if (orgObj) {
				orgObj.catalogueIds.push(id)
				return acc
			}

			acc.push({
				catalogueIds: [id],
				label: organization.name,
				value: organization.name
			})

			return acc
		}, [])
		.sort((a, b) => a.value.localeCompare(b.value))

export const getTagsOptions = (
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems
		.reduce<FilterOption[]>((acc, item) => {
			const { tags, id } = item

			if (!tags) {
				return acc
			}

			for (const tag of tags) {
				const tagObj = acc.find(obj => obj.value === tag)
				if (tagObj) {
					tagObj.catalogueIds.push(id)
				} else {
					acc.push({ catalogueIds: [id], label: tag, value: tag })
				}
			}

			return acc
		}, [])
		.sort((a, b) => a.value.localeCompare(b.value))

export const getUnionOfIdsByFilter = (
	selectedFilters: string[],
	filterOptions: FilterOption[]
): Set<string> => {
	let filteredIds = new Set<string>()

	for (const filter of selectedFilters) {
		const filterObj = filterOptions.find(option => option.value === filter)
		if (filterObj) {
			filteredIds = new Set([...filteredIds, ...filterObj.catalogueIds])
		}
	}

	return filteredIds
}

const isFilterEmpty = (filter: DateFilterType | string[] | string | null) =>
	filter === null || filter.length === 0

export const isFiltersEmpty = (filters: FiltersType): boolean =>
	Object.values(filters).every(
		(value: DateFilterType | string[] | string | null) => isFilterEmpty(value)
	)

export const getIntersectionOfIds = (
	filteredIdSets: Record<keyof FiltersType, Set<string>>,
	filters: FiltersType
) => {
	// Filter sets for filters where there is no value
	const nonEmptySets = Object.entries(filteredIdSets)
		.filter(([key]) => !isFilterEmpty(filters[key as keyof FiltersType]))
		.map(([_, value]) => value)

	if (nonEmptySets.length === 0) {
		return new Set<string>()
	}

	return nonEmptySets.reduce(
		(acc, currentSet) => new Set([...acc].filter(x => currentSet.has(x)))
	)
}

export const getCatalogueIdsByYear = (
	yearFilter: DateFilterType,
	catalogueItems: CatalogueItemType[]
) => {
	let yearFilteredIds = new Set<string>()

	if (!yearFilter) return yearFilteredIds

	const filteredItems = catalogueItems.filter(item => {
		if (!item['year-period']) {
			return false
		}

		const years = item['year-period'].toString().split('-')

		for (const year of years) {
			const currentDate = dayjs(`${year}-01-01`)
			if (
				currentDate.isBetween(
					`${yearFilter[0]?.year()}-01-01`,
					`${yearFilter[1]?.year()}-01-01`,
					null,
					'[]'
				)
			) {
				return true
			}
		}

		return false
	})

	yearFilteredIds = new Set(filteredItems.map(item => item.id))
	return yearFilteredIds
}

export const getCatalogueIdSuggestions = (
	searchValue: string,
	catalogueItems: CatalogueItemType[]
) => {
	const options = catalogueItems.filter(item =>
		item.name.toLowerCase().includes(searchValue.toLowerCase())
	)
	return new Set(options.map(option => option.id))
}
