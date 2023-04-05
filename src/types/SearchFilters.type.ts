import type { Dayjs } from 'dayjs'
import type { RangeValue } from 'rc-picker/lib/interface'
import type { CatalogueItemType } from './CatalogueItem.type'

export interface ValueLabel {
	label: string | undefined
	value: string | undefined
}

export interface FilterOption {
	label: string
	value: string
	catalogueIds: string[]
}

export interface FiltersType {
	countryFilter: string[]
	organizationFilter: string[]
	tagsFilter: string[]
	yearFilter: DateFilterType
	searchValue: string
}

export type DateFilterType = RangeValue<Dayjs>

export interface SearchOptionsType {
	value: string
	data: CatalogueItemType
	label: JSX.Element
}
