import type { ReactNode } from 'react'

interface TagProperties {
	children: ReactNode
}

const Tag = ({ children }: TagProperties) => (
	<button
		className='whitespace-nowrap rounded-md bg-cloud-burst py-1 px-3 text-sm tracking-tight text-white hover:bg-opacity-95 '
		type='button'
	>
		{children}
	</button>
)

export default Tag
