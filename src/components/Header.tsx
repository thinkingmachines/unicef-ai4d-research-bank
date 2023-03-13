import { Link } from 'react-router-dom'
import HOME_PATH from '../constants'

const Header = () => (
	<div className='flex h-12 justify-between bg-white p-3 px-10 text-cloud-burst'>
		<Link to={`${HOME_PATH}/`}>AI4D Research Bank</Link>
		<Link to={`${HOME_PATH}/catalogue`}>Catalogue</Link>
	</div>
)

export default Header
