import { Link } from 'react-router-dom'
import HOME_PATH from '../constants'

const Header = () => (
	<div className='flex h-12 bg-white p-4 px-5 text-cloud-burst sm:p-3 sm:px-10'>
		<Link
			to={`${HOME_PATH}/`}
			className='text-sm font-semibold hover:text-gray-600 hover:duration-500 sm:text-base'
		>
			AI4D ML Web Catalog
		</Link>
		<Link
			to={`${HOME_PATH}/catalogue`}
			className='ml-5 text-sm font-medium text-gray-500 hover:text-cloud-burst hover:duration-500 sm:text-base'
		>
			Catalogue
		</Link>
	</div>
)

export default Header
