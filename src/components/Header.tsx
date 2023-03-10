import { Link } from 'react-router-dom'

const Header = () => (
	<div className='flex h-12 justify-between bg-white p-3 px-10 text-cloud-burst'>
		<Link to='/unicef-ai4d-research-bank/'>AI4D Research Bank</Link>
		<Link to='/unicef-ai4d-research-bank/catalogue'>Catalogue</Link>
	</div>
)

export default Header
