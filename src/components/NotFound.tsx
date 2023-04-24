import { FrownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import HOME_PATH from '../constants'

const NotFound = () => (
	<div className='flex h-[calc(100vh_-_3rem)] flex-col items-center justify-center gap-5 border-t border-gray-200 bg-white text-cloud-burst'>
		<FrownOutlined style={{ color: '#24295C', fontSize: '100px' }} />
		<h1 className='text-3xl font-bold'>Page Not Found!</h1>
		<p className='mx-8 text-center'>
			Sorry, the page you are looking for could not be found.
		</p>
		<Link
			to={`${HOME_PATH}/`}
			className='rounded bg-cloud-burst p-2 text-left tracking-tight text-white hover:bg-opacity-95'
		>
			Go to homepage
		</Link>
	</div>
)

export default NotFound
