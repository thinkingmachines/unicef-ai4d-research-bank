import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'

interface Data {
	// Define the structure of your JSON data here
	name: string
	email: string
	// ...
}

function LoadData(): ReactElement {
	// const data: Data = {
	// 	name: 'Butch',
	// 	email: 'butch@thinkingmachines'
	// }
	const [data, setData] = useState<Data | null>()
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
		const fetchData = async () => {
			const response = await fetch('api/data/data.json') // Replace with your own JSON file path
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const jsonData: Data = await response.json()
			// const jsonData: Data = {
			// 	name: 'Butch',
			// 	email: 'butch@thinkingmachin.es'
			// }
			setData(jsonData)
		}

		void fetchData()
	}, [])

	if (!data) {
		return <div>Loading...</div>
	}
	return (
		<div>
			<h1>{data.name}</h1>
			<p>{data.email}</p>
		</div>
	)
}
export default LoadData
