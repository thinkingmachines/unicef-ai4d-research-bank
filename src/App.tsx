import type { ReactElement } from 'react'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const LandingPage = lazy(async () => import('pages/LandingPage'))
export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/unicef-ai4d-research-bank/' element={<LandingPage />} />
			</Routes>
		</BrowserRouter>
	)
}
