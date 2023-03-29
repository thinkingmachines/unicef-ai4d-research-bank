import type { CatalogueItemType } from 'types/CatalogueItem.type'

interface Props {
	catalogueItem: CatalogueItemType
}

const CatalogueItemOverview = ({ catalogueItem }: Props) => {
	const { description, 'evaluation-metrics': evaluationMetric } = catalogueItem

	const evaluationMetricSection = evaluationMetric?.map(evalItem => {
		const { metric, link } = evalItem
		// Metric and link can be undefined so there is a need to check if it exists
		const metricItem = metric && (
			<>
				{metric['metric-type']} ({metric.value})
			</>
		)
		const linkItem = link && (
			<a
				href={link.url}
				target='_blank'
				rel='noreferrer'
				className='hover:underline'
			>
				{link.description}
			</a>
		)
		if (metric && link) {
			return (
				<div className='' key={metric['metric-type']}>
					{metricItem}
					<br />
					{linkItem}
				</div>
			)
		}
		if (metric) {
			return <div key={metric['metric-type']}>{metricItem}</div>
		}
		if (link) {
			return <div key={link.url}>{linkItem}</div>
		}
		return '-'
	})
	return (
		<div>
			<p className='mb-5 text-gray-600'>{description}</p>
			{evaluationMetric !== undefined && (
				<div className='flex flex-col'>
					<span className='font-semibold'>Evaluation Metric</span>
					<div className='flex flex-col gap-3 text-gray-600'>
						{evaluationMetricSection}
					</div>
				</div>
			)}
		</div>
	)
}

export default CatalogueItemOverview
