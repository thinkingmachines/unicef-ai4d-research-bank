import Header from 'components/Header'
import CataloguePage from 'pages/CataloguePage'
import LandingPage from 'pages/LandingPage'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/unicef-ai4d-research-bank/' element={<LandingPage />} />
				<Route
					path='/unicef-ai4d-research-bank/catalogue'
					element={<CataloguePage />}
				/>
			</Routes>
		</BrowserRouter>
	)
}
