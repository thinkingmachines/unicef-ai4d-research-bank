import type { ValueLabel } from 'types/SearchFilters.type'

const makeLabels = (items: (string | undefined)[]): ValueLabel[] =>
	items
		.filter(item => item !== undefined)
		.map(item => ({ label: item, value: item }))

export default makeLabels
