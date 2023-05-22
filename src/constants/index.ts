export default import.meta.env.VITE_HOME_PATH as string

export const CONTRIBUTION_URL =
	'https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/catalog-contribution.md'

export const PAGE_SIZE = 5

export const TOGGLE_OPTIONS = {
	All: 'All',
	model: 'model',
	dataset: 'dataset'
} as const

export type ToggleOption = (typeof TOGGLE_OPTIONS)[keyof typeof TOGGLE_OPTIONS]

export const SELECT_OPTIONS = {
	none: 'none',
	nameAsc: 'Name Ascending',
	nameDesc: 'Name Descending',
	yearAsc: 'Year Ascending',
	yearDesc: 'Year Descending'
} as const

export type SelectOption = (typeof SELECT_OPTIONS)[keyof typeof SELECT_OPTIONS]
