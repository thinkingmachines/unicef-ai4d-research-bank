import Header from 'components/Header'
import { CatalogueItemPage, CataloguePage, LandingPage } from 'pages'
import LoadCatalog from 'pages/LoadCatalog'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HOME_PATH from './constants'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={`${HOME_PATH}/`} element={<LandingPage />} />
				<Route path={`${HOME_PATH}/loadcatalog`} element={<LoadCatalog />} />
				<Route path={`${HOME_PATH}/catalogue`}>
					<Route index element={<CataloguePage />} />
					<Route path=':id' element={<CatalogueItemPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
