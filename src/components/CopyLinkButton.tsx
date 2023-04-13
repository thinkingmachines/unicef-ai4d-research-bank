import { CopyOutlined } from '@ant-design/icons'
import { useState } from 'react'

interface Props {
	url: string
}

const onCopyToClipboard = async (text: string) => {
	await navigator.clipboard.writeText(text)
}

const CopyLinkButton = ({ url }: Props) => {
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
			className='ml-auto w-[100px] rounded bg-cloud-burst p-2 text-left tracking-tight text-white hover:bg-opacity-95'
			onClick={onCopyClick}
		>
			<CopyOutlined style={{ marginRight: '8px' }} />
			{isCopied ? 'Copied!' : 'Copy Link'}
		</button>
	)
}

export default CopyLinkButton
