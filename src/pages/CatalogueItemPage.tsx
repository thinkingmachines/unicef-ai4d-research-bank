import { useParams } from 'react-router-dom'
import CatalogItemsMock from '../mocks/CatalogItems.data.json'

const CatalogueItemPage = () => {
	const { id } = useParams()

	const catalogueItem = CatalogItemsMock.items.find(
		mockCatalogItem => mockCatalogItem.id === id
	)

	if (!catalogueItem) {
		return <div>error</div>
	}

	const { name, description, organization } = catalogueItem

	return (
		<div className='h-[calc(100vh_-_3rem)] bg-white'>
			<div className='flex flex-col bg-cloud-burst p-10 text-white'>
				<span>{organization.name}</span>
				<span className='text-2xl font-bold'>{name}</span>
			</div>
			<div className='p-10'>
				<p className='text-cloud-burst'>{description}</p>
			</div>
		</div>
	)
}

export default CatalogueItemPage