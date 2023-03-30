import { InfoCircleOutlined } from '@ant-design/icons'
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
			<div className='flex flex-col'>
				<span className='text-xs font-semibold text-cloud-burst'>
					{metric['metric-type'].toUpperCase()}
				</span>
				<span className='text-2xl font-semibold text-cloud-burst'>
					{metric.value}
				</span>
			</div>
		)
		const linkItem = link && (
			<div className='self-center'>
				<InfoCircleOutlined style={{ marginRight: '8px' }} />
				<a
					href={link.url}
					target='_blank'
					rel='noreferrer'
					className='hover:underline'
				>
					{link.description}
				</a>
			</div>
		)
		if (metric && link) {
			return (
				<div
					className='align-center mt-3 flex grid-rows-1 flex-row gap-5 p-5'
					key={metric['metric-type']}
				>
					{metricItem}
					{linkItem}
				</div>
			)
		}
		if (metric) {
			return (
				<div className='p-5' key={metric['metric-type']}>
					{metricItem}
				</div>
			)
		}
		if (link) {
			return (
				<div className='p-5' key={link.url}>
					{linkItem}
				</div>
			)
		}
		return '-'
	})
	return (
		<div>
			<p className='mb-5 text-gray-600'>{description}</p>
			{evaluationMetric !== undefined && (
				<div className='flex flex-col'>
					<span className='font-semibold text-gray-700'>Evaluation Metric</span>
					<div className='grid-cols-1 gap-5 divide-y divide-gray-200 text-gray-600'>
						{evaluationMetricSection}
					</div>
				</div>
			)}
		</div>
	)
}

export default CatalogueItemOverview
