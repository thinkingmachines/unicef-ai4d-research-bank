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
}
