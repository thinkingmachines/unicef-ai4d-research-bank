/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading  */

import 'github-markdown-css'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import type { PluggableList } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { CONTRIBUTION_URL } from '../constants/index'
/**
 * Use !important modifiers to allow tailwind to override styles
 * provided by github-markdown-css' markdown-body class
 *
 */

const ContributionPage = () => {
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		void fetch(CONTRIBUTION_URL)
			.then(async res => res.text())
			.then(md => setMarkdown(md))
	}, [])

	return (
		<div className=' markdown-body flex justify-center border-t-[1px] bg-white p-12'>
			<div className=' max-w-[850px] text-black'>
				<ReactMarkdown
					components={{
						h1: ({ children }) => (
							<h1 className='!border-0 text-cloud-burst'> {children}</h1>
						),
						h2: ({ children }) => (
							<h2 className='!border-0 text-cloud-burst'> {children}</h2>
						),
						h3: ({ children }) => (
							<h3 className='!border-0 text-cloud-burst'> {children}</h3>
						),
						a: ({ children, ...props }) => (
							<a
								className='!text-[#82838D] !underline  hover:!text-sky-600'
								{...props}
							>
								{children}
							</a>
						),
						p: ({ children }) => <p className='text-[#82838D]'>{children}</p>,
						ul: ({ children }) => (
							<ul className='list-disc  text-[#82838D]'>{children}</ul>
						),
						ol: ({ children }) => (
							<ol className='list-disc  text-[#82838D]'>{children}</ol>
						),
						pre: ({ children }) => (
							<pre className='!text-md  !bg-[#f6f6f6] font-normal text-[#24295C]'>
								{children}
							</pre>
						),
						code: ({ children }) => (
							<code className='!bg-[#f6f6f6] !text-[#24295C]'>{children}</code>
						),
						tr: ({ children }) => (
							<tr className='!bg-white text-[#82838D] '>{children}</tr>
						)
					}}
					remarkPlugins={[remarkGfm] as PluggableList}
				>
					{markdown}
				</ReactMarkdown>
			</div>
		</div>
	)
}

export default ContributionPage
