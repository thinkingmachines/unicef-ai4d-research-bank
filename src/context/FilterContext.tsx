import type { ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import type { FilterOption } from '../types/SearchFilters.type'
import {
	getCountryOptions,
	getOrganizationOptions,
	getTagsOptions
} from '../utils/Filters.util'
import { useCatalogueItemContext } from './CatalogueItemContext'

interface FilterContextType {
	isFilterOptionsLoading: boolean
	countries: FilterOption[]
	organizations: FilterOption[]
	tags: FilterOption[]
}

interface Properties {
	children: ReactNode
}

export const FilterContext = React.createContext<FilterContextType>(
	{} as FilterContextType
)

export const FilterProvider = ({ children }: Properties) => {
	const { catalogueItems } = useCatalogueItemContext()

	const [isFilterOptionsLoading, setIsFilterOptionsLoading] = useState(true)
	const [countries, setCountries] = useState<FilterOption[]>([])
	const [organizations, setOrganizations] = useState<FilterOption[]>([])
	const [tags, setTags] = useState<FilterOption[]>([])

	const contextObj = useMemo(
		() => ({ isFilterOptionsLoading, countries, organizations, tags }),
		[isFilterOptionsLoading, countries, organizations, tags]
	)

	useEffect(() => {
		if (catalogueItems.length === 0) return

		setIsFilterOptionsLoading(true)

		const countryOptions = getCountryOptions(catalogueItems)
		setCountries(countryOptions)

		const organizationOptions = getOrganizationOptions(catalogueItems)
		setOrganizations(organizationOptions)

		const tagOptions = getTagsOptions(catalogueItems)
		setTags(tagOptions)

		setIsFilterOptionsLoading(false)
	}, [catalogueItems])

	return (
		<FilterContext.Provider value={contextObj}>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterContext = () => React.useContext(FilterContext)
