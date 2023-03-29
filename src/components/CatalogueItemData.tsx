import type { CatalogueItemType } from 'types/CatalogueItem.type'

interface Props {
	catalogueItem: CatalogueItemType
}

const CatalogueItemData = ({ catalogueItem }: Props) => {
	const { links } = catalogueItem

	return (
		<div className='mb-5 grid-cols-1 divide-y divide-gray-100'>
			{links.map(link => (
				<div key={link.url} className='align-center flex flex-col rounded p-5'>
					<span className='text-xs text-gray-600'>{link.type}</span>
					<a
						href={link.url}
						key={`${link.description}`}
						target='_blank'
						rel='noreferrer'
						className='w-full hover:underline'
					>
						{link.description}
					</a>
				</div>
			))}
		</div>
	)
}

export default CatalogueItemData
