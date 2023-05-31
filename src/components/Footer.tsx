import { Link } from 'react-router-dom'
import HOME_PATH from '../constants'

const Footer = () => (
	<div
		className='flex h-12 justify-center bg-[#F9FAFB] p-3 px-10 text-[#82838D]'
		data-cy='footer'
	>
		<div>
			Want to contribute to the research bank?{' '}
			<Link
				to={`${HOME_PATH}/contribute`}
				className='font-medium text-[#82838D] underline hover:text-cloud-burst hover:duration-500'
			>
				Here&apos;s how.
			</Link>
		</div>
	</div>
)

export default Footer
