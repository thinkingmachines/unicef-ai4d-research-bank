import type { ReactNode } from 'react'
import React, { useMemo, useState } from 'react'
import type { SearchSuggestionsType } from 'types/SearchFilters.type'

interface SearchContextType {
	searchInput: string
	setSearchInput: React.Dispatch<React.SetStateAction<string>>
	searchSuggestions: SearchSuggestionsType[]
	setSearchSuggestions: React.Dispatch<
		React.SetStateAction<SearchSuggestionsType[]>
	>
}

interface Props {
	children: ReactNode
}

export const SearchContext = React.createContext<SearchContextType>(
	{} as SearchContextType
)

export const SearchProvider = ({ children }: Props) => {
	const [searchInput, setSearchInput] = useState('')
	const [searchSuggestions, setSearchSuggestions] = useState<
		SearchSuggestionsType[]
	>([])

	const contextObj = useMemo(
		() => ({
			searchInput,
			setSearchInput,
			searchSuggestions,
			setSearchSuggestions
		}),
		[searchInput, setSearchInput, searchSuggestions, setSearchSuggestions]
	)

	return (
		<SearchContext.Provider value={contextObj}>
			{children}
		</SearchContext.Provider>
	)
}

export const useSearchContext = () => React.useContext(SearchContext)
