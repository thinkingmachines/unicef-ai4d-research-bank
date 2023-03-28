import type { ReactNode } from 'react'

interface TagProperties {
	value: string
	children: ReactNode
	onFilterClick: (value: string) => void
}

const Tag = ({ onFilterClick, children, value }: TagProperties) => (
	<button
		className='whitespace-nowrap rounded-md bg-cloud-burst py-1 px-3 text-sm tracking-tight text-white hover:bg-opacity-95 '
		type='button'
		onClick={() => onFilterClick(value)}
	>
		{children}
	</button>
)

export default Tag
