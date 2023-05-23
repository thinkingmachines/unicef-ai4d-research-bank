import { CopyOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface Props {
	url: string
	placeholder?: string
}

const onCopyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text)
}

const CopyLinkButton = ({ url, placeholder }: Props) => {
	const [isCopied, setIsCopied] = useState(false)

	const onCopyClick = () => {
		void onCopyToClipboard(url)

		setIsCopied(true)
		setTimeout(() => {
			setIsCopied(false)
		}, 1500)
	}

	return (
		<button
			type='button'
			className='my-3 rounded-md bg-gray-200  p-10 py-1 pl-2 pr-4 text-left text-xs font-semibold tracking-tight text-gray-600 hover:bg-black hover:bg-opacity-20'
			onClick={onCopyClick}
		>
			<CopyOutlined style={{ marginRight: '8px' }} />
			{isCopied ? 'Copied!' : placeholder}
		</button>
	)
}

export default CopyLinkButton

CopyLinkButton.defaultProps = {
	placeholder: 'Enter URL'
}
