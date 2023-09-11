import { Link } from 'react-router-dom'
import HOME_PATH from '../constants'

const Footer = () => (
	<div
		className='flex justify-center bg-[#F9FAFB] p-2 px-10 text-xs text-[#82838D] sm:h-12 sm:p-3 sm:text-base'
		data-cy='footer'
	>
		<div>
			Want to contribute to the ML catalogue?{' '}
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
