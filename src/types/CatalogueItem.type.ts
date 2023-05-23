export interface CatalogueItemType {
	id: string
	name: string
	description: string
	'card-type': string
	organization: OrganizationType
	'date-added': string
	'date-modified'?: string
	tags?: string[]
	'country-region'?: string[] | string
	'year-period'?: string
	'used-by'?: UsedByType
	'evaluation-metrics'?: EvaluationMetricsType[]
	links: LinkType[]
	'data-columns'?: DataColumnType[]
	'sample-data'?: (number | string)[][]
	'detail-image-url'?: string
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
	url: string
	description: string
	type: string
	name: string
	'alt-format': AltFormatType[]
}

export interface AltFormatType {
	url: string
	type: string
}

export interface DataColumnType {
	name: string
	type: string
}
