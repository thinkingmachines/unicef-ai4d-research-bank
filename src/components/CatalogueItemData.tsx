/* eslint-disable react/jsx-handler-names */
import { CopyOutlined } from '@ant-design/icons'
import type { CatalogueItemType } from 'types/CatalogueItem.type'
import { getFileFormat } from 'utils/String.util'

interface Props {
	catalogueItem: CatalogueItemType
}

const onCopyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text)
}

const CatalogueItemData = ({ catalogueItem }: Props) => {
	const { links } = catalogueItem

	const trainingDatasets = links.filter(link =>
		link.type.includes('training-dataset')
	)

	const datasets = links.filter(link => link.type.startsWith('dataset-'))

	let trainingDatasetSection
	if (trainingDatasets.length > 0) {
		trainingDatasetSection = (
			<div className='flex flex-col gap-2'>
				<span className='mb-1 font-semibold text-gray-700'>
					Training Dataset
				</span>
				{trainingDatasets.map(dataset => (
					<div className='flex flex-row items-center' key={dataset.description}>
						<div className='w-2/3'>
							<a
								href={dataset.url}
								key={`${dataset.description}`}
								target='_blank'
								rel='noreferrer'
								className='hover:underline'
							>
								{dataset.description}
							</a>
							<span className='ml-3 rounded-3xl bg-gray-200 py-1 px-2 text-xs font-semibold text-gray-600'>
								{getFileFormat(dataset.type, 'training-dataset-').toUpperCase()}
							</span>
						</div>
						<button
							type='button'
							className='ml-auto rounded bg-cloud-burst p-2 tracking-tight text-white hover:bg-opacity-95'
							onClick={() => {
								void onCopyToClipboard(dataset.url)
							}}
						>
							<CopyOutlined style={{ marginRight: '8px' }} />
							Copy link
						</button>
					</div>
				))}
			</div>
		)
	}

	let rawDatasetsSection
	if (datasets.length > 0) {
		rawDatasetsSection = (
			<div className='flex flex-col gap-2'>
				<span className='mb-1 font-semibold text-gray-700'>
					Results Datasets
				</span>
				{datasets.map(dataset => (
					<div className='flex flex-row items-center' key={dataset.description}>
						<div className='w-2/3'>
							<a
								href={dataset.url}
								key={`${dataset.description}`}
								target='_blank'
								rel='noreferrer'
								className='hover:underline'
							>
								{dataset.description}
							</a>
							<span className='ml-3 rounded-3xl bg-gray-200 py-1 px-2 text-xs font-semibold text-gray-600'>
								{dataset.type.includes('raw')
									? getFileFormat(dataset.type, 'dataset-raw-').toUpperCase()
									: getFileFormat(dataset.type, 'dataset-').toUpperCase()}
							</span>
						</div>
						{dataset.type.includes('raw') && (
							<button
								type='button'
								className='ml-auto rounded bg-cloud-burst p-2 tracking-tight text-white hover:bg-opacity-95'
								onClick={() => {
									void onCopyToClipboard(dataset.url)
								}}
							>
								<CopyOutlined style={{ marginRight: '8px' }} />
								Copy link
							</button>
						)}
					</div>
				))}
			</div>
		)
	}

	return (
		<div className='mb-5 flex flex-col gap-6'>
			{trainingDatasetSection}
			{rawDatasetsSection}
		</div>
	)
}

export default CatalogueItemData
