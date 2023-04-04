/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/no-array-index-key */
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
	const {
		links,
		'data-columns': dataColumns,
		'sample-data': sampleData
	} = catalogueItem

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

	let dataColumnsSection
	if (dataColumns) {
		dataColumnsSection = (
			<div className='flex flex-col'>
				<span className='mb-1 font-semibold text-gray-700'>Data Schema</span>
				<table className='border-collapse'>
					<thead>
						<tr className='bg-gray-300'>
							<td className='p-2 font-semibold text-cloud-burst'>
								Column Name
							</td>
							<td className='p-2 font-semibold text-cloud-burst'>Type</td>
						</tr>
					</thead>
					<tbody>
						{dataColumns.map(column => (
							<tr key={column.name} className='even:bg-gray-100'>
								<td className='p-2 font-medium'>{column.name}</td>
								<td className='p-2'>{column.type.toUpperCase()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}

	let dataPreviewSection
	if (sampleData) {
		dataPreviewSection = (
			<div className='flex flex-col'>
				<span className='mb-1 font-semibold text-gray-700'>Data Preview</span>
				<table className='block table-auto border-collapse overflow-x-scroll'>
					{dataColumns ? (
						<thead>
							<tr className='bg-gray-300'>
								<td className='px-2 py-1' />
								{dataColumns.map(column => (
									<td
										key={column.name}
										className='min-w-[100px] max-w-[500px] py-1 px-2 font-semibold text-cloud-burst'
									>
										{column.name}
									</td>
								))}
							</tr>
						</thead>
					) : undefined}
					<tbody>
						{sampleData.map((row, rowIndex) => (
							<tr key={rowIndex} className='even:bg-gray-100'>
								<td className='px-2 py-1 font-semibold text-cloud-burst'>
									{rowIndex}
								</td>
								{row.map((field, fieldIndex) => (
									<td
										className='px-2 py-1 font-medium'
										key={`${field}-${fieldIndex}`}
									>
										<div className='max-h-[100px] min-w-[100px] max-w-[500px] overflow-y-scroll '>
											{field}
										</div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		)
	}

	return (
		<div className='mb-5 flex flex-col gap-6'>
			{trainingDatasetSection}
			{rawDatasetsSection}
			{dataColumnsSection}
			{dataPreviewSection}
		</div>
	)
}

export default CatalogueItemData
