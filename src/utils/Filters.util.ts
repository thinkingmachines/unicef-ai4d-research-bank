import type { CatalogueItemType } from 'types/CatalogueItem.type'
import type { FilterOption } from 'types/SearchFilters.type'

export const getCountryOptions = (
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems.reduce<FilterOption[]>((acc, item) => {
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
			label: countryRegion,
			value: countryRegion
		})
		return acc
	}, [])

export const getOrganizationOptions = (
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems.reduce<FilterOption[]>((acc, item) => {
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

export const getTagsOptions = (
	catalogueItems: CatalogueItemType[]
): FilterOption[] =>
	catalogueItems.reduce<FilterOption[]>((acc, item) => {
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
