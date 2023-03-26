import type { ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import { fetchCatalogItems } from '../api'
import type { CatalogueItemType } from '../types/CatalogueItem.type'

interface CatalogueItemContextType {
	catalogueItems: CatalogueItemType[]
	setCatalogueItems: React.Dispatch<React.SetStateAction<CatalogueItemType[]>>
	isLoading: boolean
	filteredCatalogueItems: CatalogueItemType[]
	setFilteredCatalogueItems: React.Dispatch<
		React.SetStateAction<CatalogueItemType[]>
	>
}

interface Props {
	children: ReactNode
}

export const CatalogueItemContext =
	React.createContext<CatalogueItemContextType>({} as CatalogueItemContextType)

export const CatalogueItemProvider = ({ children }: Props) => {
	const [isLoading, setIsLoading] = useState(true)
	const [catalogueItems, setCatalogueItems] = useState<CatalogueItemType[]>([])
	const [filteredCatalogueItems, setFilteredCatalogueItems] = useState<
		CatalogueItemType[]
	>([])

	const contextObj = useMemo(
		() => ({
			isLoading,
			catalogueItems,
			setCatalogueItems,
			filteredCatalogueItems,
			setFilteredCatalogueItems
		}),
		[
			isLoading,
			catalogueItems,
			setCatalogueItems,
			filteredCatalogueItems,
			setFilteredCatalogueItems
		]
	)

	useEffect(() => {
		const fetchAllCatalogueItems = async () => {
			setIsLoading(true)
			const allCatalogueItems = await fetchCatalogItems()
			setCatalogueItems(allCatalogueItems)
			setFilteredCatalogueItems(allCatalogueItems)
			setIsLoading(false)
		}
		void fetchAllCatalogueItems()
	}, [])

	return (
		<CatalogueItemContext.Provider value={contextObj}>
			{children}
		</CatalogueItemContext.Provider>
	)
}

export const useCatalogueItemContext = () =>
	React.useContext(CatalogueItemContext)
