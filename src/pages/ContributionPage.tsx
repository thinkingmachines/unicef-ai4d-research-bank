/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading  */
/* eslint-disable react/prop-types  */

import { Skeleton } from 'antd'
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
		<div className='markdown-body flex justify-center border-t-[1px] bg-white p-12'>
			{markdown ? (
				<div className='w-full max-w-[850px] text-black sm:w-auto'>
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
							img: ({ children, ...props }) => {
								let rawUrl = props.src ?? ''

								if (rawUrl.includes('github.com') && rawUrl.includes('/blob')) {
									rawUrl = rawUrl
										.replace('github.com', 'raw.githubusercontent.com')
										.replace('/blob', '')
								}

								return <img className='' src={rawUrl} alt={props.alt} />
							},
							p: ({ children }) => <p className='text-[#82838D]'>{children}</p>,
							ul: ({ children }) => (
								<ul className='list-disc  text-[#82838D]'>{children}</ul>
							),
							ol: ({ children, ...props }) => (
								<ol className='list-disc text-[#82838D]' {...props}>
									{children}
								</ol>
							),
							pre: ({ children }) => (
								<pre className='!text-md  !bg-[#f6f6f6] font-normal text-[#24295C]'>
									{children}
								</pre>
							),
							code: ({ children }) => (
								<code className='!bg-[#f6f6f6] !text-[#24295C]'>
									{children}
								</code>
							),
							th: ({ children, ...props }) => (
								<th
									className='!border-[#82838D] !bg-white text-[#82838D]'
									{...props}
								>
									{children}
								</th>
							),
							tr: ({ children, ...props }) => (
								<tr
									className='text-[#82838D] odd:!bg-white even:!bg-[#f6f6f6]'
									{...props}
								>
									{children}
								</tr>
							),
							td: ({ children, ...props }) => (
								<td className='!border-[#82838D]' {...props}>
									{children}
								</td>
							)
						}}
						remarkPlugins={[remarkGfm] as PluggableList}
					>
						{markdown}
					</ReactMarkdown>
				</div>
			) : (
				<Skeleton
					className='flex max-w-[850px]'
					active
					paragraph={{ rows: 25 }}
				/>
			)}
		</div>
	)
}

export default ContributionPage
