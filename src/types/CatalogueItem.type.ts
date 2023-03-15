export interface CatalogueItemType {
	id: string
	name: string
	description: string
	'card-type': string
	organization: OrganizationType
	'date-added': string
	'date-modified'?: string
	tags?: string[]
	'country-region'?: string
	'year-period'?: number
	'used-by'?: UsedByType
	'evaluation-metrics'?: EvaluationMetricsType[]
	links: LinkType[]
}

export interface OrganizationType {
	name: string
	url: string
}

export interface UsedByType {
	name?: string
	url?: string
}

export interface EvaluationMetricsType {
	metric?: MetricType
	link?: MetricLink
}

export interface MetricType {
	'metric-type': string
	value: number
}

export interface MetricLink {
	description: string
	url: string
}

export interface LinkType {
	description: string
	url: string
	type: string
}
