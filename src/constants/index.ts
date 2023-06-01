export default import.meta.env.VITE_HOME_PATH as string

export const CONTRIBUTION_URL =
	'https://raw.githubusercontent.com/thinkingmachines/my-ai4d-research-bank/main/catalog-contribution.md'

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

export const TEMP_NUMBER_OF_DOWNLOADS = 121

export const TEMP_WHO_DOWNLOADED = ['UNICEF', 'WFP', 'WHO']

export const TEMP_REDIRECT_FORM =
	'https://inform.unicef.org/eapro/researchbank/downloadform?url='
