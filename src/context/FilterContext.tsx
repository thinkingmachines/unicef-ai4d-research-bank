import type { ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import type { FilterOption } from '../types/SearchFilters.type'
import { getFilterOptions } from '../utils/Filters.util'
import { useCatalogueItemContext } from './CatalogueItemContext'

interface FilterContextType {
	isFilterOptionsLoading: boolean
	countries: FilterOption[]
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

	const contextObj = useMemo(
		() => ({ isFilterOptionsLoading, countries }),
		[isFilterOptionsLoading, countries]
	)

	useEffect(() => {
		if (catalogueItems.length === 0) return

		setIsFilterOptionsLoading(true)

		const countryOptions = getFilterOptions('country-region', catalogueItems)
		setCountries(countryOptions)

		setIsFilterOptionsLoading(false)
	}, [catalogueItems])

	return (
		<FilterContext.Provider value={contextObj}>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterContext = () => React.useContext(FilterContext)
