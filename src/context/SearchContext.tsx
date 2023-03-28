import type { ReactNode } from 'react'
import React, { useMemo, useState } from 'react'
import type { SearchOptionsType } from 'types/SearchFilters.type'

interface SearchContextType {
	searchInput: string
	setSearchInput: React.Dispatch<React.SetStateAction<string>>
	searchOptions: SearchOptionsType[]
	setSearchOptions: React.Dispatch<React.SetStateAction<SearchOptionsType[]>>
}

interface Props {
	children: ReactNode
}

export const SearchContext = React.createContext<SearchContextType>(
	{} as SearchContextType
)

export const SearchProvider = ({ children }: Props) => {
	const [searchInput, setSearchInput] = useState('')
	const [searchOptions, setSearchOptions] = useState<SearchOptionsType[]>([])

	const contextObj = useMemo(
		() => ({
			searchInput,
			setSearchInput,
			searchOptions,
			setSearchOptions
		}),
		[searchInput, setSearchInput, searchOptions, setSearchOptions]
	)

	return (
		<SearchContext.Provider value={contextObj}>
			{children}
		</SearchContext.Provider>
	)
}

export const useSearchContext = () => React.useContext(SearchContext)
