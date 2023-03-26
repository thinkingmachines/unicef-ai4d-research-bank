import type { ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import type { FilterOption, FiltersType } from '../types/SearchFilters.type'
import {
	getCountryOptions,
	getIntersectionOfIds,
	getOrganizationOptions,
	getTagsOptions,
	getUnionOfIdsByFilter,
	isFiltersEmpty
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
		const generateFilterOptions = () => {
			if (isLoading || catalogueItems.length === 0) return

			setIsFilterOptionsLoading(true)
			const countryOptions = getCountryOptions(catalogueItems)
			setCountries(countryOptions)
			const organizationOptions = getOrganizationOptions(catalogueItems)
			setOrganizations(organizationOptions)
			const tagOptions = getTagsOptions(catalogueItems)
			setTags(tagOptions)
			setIsFilterOptionsLoading(false)
		}

		generateFilterOptions()
	}, [catalogueItems, isLoading])

	useEffect(() => {
		const filterCatalogueItems = () => {
			const { countryFilter, organizationFilter, tagsFilter } = filters

			if (isFiltersEmpty(filters)) {
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
			const tagFilteredIds: Set<string> = getUnionOfIdsByFilter(
				tagsFilter,
				tags
			)

			const filteredSets = [countryFilteredIds, orgFilteredIds, tagFilteredIds]
			const filteredIds = getIntersectionOfIds(filteredSets)
			setFilteredCatalogueItems(
				catalogueItems.filter(catalogueItem =>
					filteredIds.has(catalogueItem.id)
				)
			)
		}

		filterCatalogueItems()
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
