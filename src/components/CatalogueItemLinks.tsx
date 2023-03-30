import type { CatalogueItemType, LinkType } from 'types/CatalogueItem.type'
import { formatString } from 'utils/String.util'

interface Props {
	catalogueItem: CatalogueItemType
}

const CatalogueItemLinks = ({ catalogueItem }: Props) => {
	const { links } = catalogueItem

	const groupedLinks = links
		.filter(link => !link.type.includes('dataset'))
		.reduce((grouped: Record<string, LinkType[]>, link: LinkType) => {
			const { type } = link
			grouped[type] ??= []
			grouped[type].push(link)
			return grouped
		}, {})

	let relatedLinksSection
	if (Object.keys(groupedLinks).length > 0) {
		relatedLinksSection = (
			<div className='mb-5 flex flex-col gap-6'>
				{Object.keys(groupedLinks).map(linkType => (
					<div className='flex flex-col gap-2' key={linkType}>
						<span className='mb-1 font-semibold text-gray-700'>
							{formatString(linkType)}
						</span>
						{groupedLinks[linkType].map(link => (
							<a
								href={link.url}
								key={link.description}
								target='_blank'
								rel='noreferrer'
								className='hover:underline'
							>
								{link.description}
							</a>
						))}
					</div>
				))}
			</div>
		)
	}

	return <div>{relatedLinksSection}</div>
}

export default CatalogueItemLinks
