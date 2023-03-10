import { Link } from 'react-router-dom'

interface HeaderProperties {
	homePath: string
}

const Header = ({ homePath }: HeaderProperties) => (
	<div className='flex h-12 justify-between bg-white p-3 px-10 text-cloud-burst'>
		<Link to={`${homePath}`}>AI4D Research Bank</Link>
		<Link to={`${homePath}/catalogue`}>Catalogue</Link>
	</div>
)

export default Header
