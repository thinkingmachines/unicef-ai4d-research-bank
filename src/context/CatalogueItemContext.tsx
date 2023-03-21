import type { ReactNode } from 'react'
import React, { useEffect, useMemo, useState } from 'react'
import { fetchCatalogItems } from '../api'
import type { CatalogueItemType } from '../types/CatalogueItem.type'

interface CatalogueItemContextType {
	catalogueItems: CatalogueItemType[]
	setCatalogueItems: React.Dispatch<React.SetStateAction<CatalogueItemType[]>>
	isLoading: boolean
}

interface Props {
	children: ReactNode
}

export const CatalogueItemContext =
	React.createContext<CatalogueItemContextType>({} as CatalogueItemContextType)

export const CatalogueItemProvider = ({ children }: Props) => {
	const [isLoading, setIsLoading] = useState(true)
	const [catalogueItems, setCatalogueItems] = useState<CatalogueItemType[]>([])

	const contextObj = useMemo(
		() => ({
			isLoading,
			catalogueItems,
			setCatalogueItems
		}),
		[isLoading, catalogueItems, setCatalogueItems]
	)

	useEffect(() => {
		const fetchAllCatalogueItems = async () => {
			setIsLoading(true)
			const allCatalogueItems = await fetchCatalogItems()
			setCatalogueItems(allCatalogueItems)
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
