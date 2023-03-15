import { Link } from 'react-router-dom'
import HOME_PATH from '../constants'

const Header = () => (
	<div className='flex h-12 justify-between bg-white p-3 px-10 text-cloud-burst'>
		<Link
			to={`${HOME_PATH}/`}
			className='font-semibold hover:text-gray-600 hover:duration-500'
		>
			AI4D Research Bank
		</Link>
		<Link
			to={`${HOME_PATH}/catalogue`}
			className='font-medium text-gray-500 hover:text-cloud-burst hover:duration-500'
		>
			Catalogue
		</Link>
	</div>
)

export default Header
