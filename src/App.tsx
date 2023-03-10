import Header from 'components/Header'
import CataloguePage from 'pages/CataloguePage'
import LandingPage from 'pages/LandingPage'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const HOME_PATH = import.meta.env.VITE_HOME_PATH as string

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Header homePath={HOME_PATH} />
			<Routes>
				<Route path={`${HOME_PATH}/`} element={<LandingPage />} />
				<Route path={`${HOME_PATH}/catalogue`} element={<CataloguePage />} />
			</Routes>
		</BrowserRouter>
	)
}
