import type { ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import type { FilterOption, FiltersType } from '../types/SearchFilters.type'
import {
	getCountryOptions,
	getOrganizationOptions,
	getTagsOptions,
	getUnionOfIdsByFilter
} from '../utils/Filters.util'
import { useCatalogueItemContext } from './CatalogueItemContext'

interface FilterContextType {
	isFilterOptionsLoading: boolean
	countries: FilterOption[]
	organizations: FilterOption[]
	tags: FilterOption[]
	filters: FiltersType
	setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}

interface Properties {
	children: ReactNode
}

const defaultFilters = {
	countryFilter: [],
	organizationFilter: [],
	tagsFilter: []
}

export const FilterContext = React.createContext<FilterContextType>(
	{} as FilterContextType
)

export const FilterProvider = ({ children }: Properties) => {
	const { catalogueItems, setFilteredCatalogueItems, isLoading } =
		useCatalogueItemContext()
	const [isFilterOptionsLoading, setIsFilterOptionsLoading] = useState(true)
	const [countries, setCountries] = useState<FilterOption[]>([])
	const [organizations, setOrganizations] = useState<FilterOption[]>([])
	const [tags, setTags] = useState<FilterOption[]>([])
	const [filters, setFilters] = useState<FiltersType>(defaultFilters)

	const contextObj = useMemo(
		() => ({
			isFilterOptionsLoading,
			countries,
			organizations,
			tags,
			filters,
			setFilters
		}),
		[isFilterOptionsLoading, countries, organizations, tags, filters]
	)

	useEffect(() => {
		setIsFilterOptionsLoading(true)
		if (isLoading || catalogueItems.length === 0) return

		const countryOptions = getCountryOptions(catalogueItems)
		setCountries(countryOptions)

		const organizationOptions = getOrganizationOptions(catalogueItems)
		setOrganizations(organizationOptions)

		const tagOptions = getTagsOptions(catalogueItems)
		setTags(tagOptions)

		setIsFilterOptionsLoading(false)
	}, [catalogueItems, isLoading])

	useEffect(() => {
		const { countryFilter, organizationFilter, tagsFilter } = filters

		if (
			countryFilter.length === 0 &&
			organizationFilter.length === 0 &&
			tagsFilter.length === 0
		) {
			setFilteredCatalogueItems(catalogueItems)
			return
		}

		const countryFilteredIds: Set<string> = getUnionOfIdsByFilter(
			countryFilter,
			countries
		)

		const orgFilteredIds: Set<string> = getUnionOfIdsByFilter(
			organizationFilter,
			organizations
		)

		const tagFilteredIds: Set<string> = getUnionOfIdsByFilter(tagsFilter, tags)

		// Get intersection of all filtered ids
		const nonEmptySets = [
			countryFilteredIds,
			orgFilteredIds,
			tagFilteredIds
		].filter(set => set.size > 0)

		if (nonEmptySets.length === 0) {
			setFilteredCatalogueItems(catalogueItems)
			return
		}

		const filteredIds = nonEmptySets.reduce(
			(acc, currentSet) => new Set([...acc].filter(x => currentSet.has(x)))
		)

		setFilteredCatalogueItems(
			catalogueItems.filter(catalogueItem => filteredIds.has(catalogueItem.id))
		)
	}, [
		filters,
		countries,
		organizations,
		tags,
		catalogueItems,
		setFilteredCatalogueItems
	])

	return (
		<FilterContext.Provider value={contextObj}>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterContext = () => React.useContext(FilterContext)
