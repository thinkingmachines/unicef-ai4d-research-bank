import { ConfigProvider } from 'antd'
import Header from 'components/Header'
import { CatalogueItemProvider } from 'context/CatalogueItemContext'
import { FilterProvider } from 'context/FilterContext'
import { SearchProvider } from 'context/SearchContext'
import { CatalogueItemPage, CataloguePage, LandingPage } from 'pages'
import LoadCatalog from 'pages/LoadCatalog'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HOME_PATH from './constants'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#24295C',
						colorLinkHover: '#24295C'
					}
				}}
			>
				<Header />
				<CatalogueItemProvider>
					<FilterProvider>
						<SearchProvider>
							<Routes>
								<Route path={`${HOME_PATH}/`} element={<LandingPage />} />
								<Route
									path={`${HOME_PATH}/loadcatalog`}
									element={<LoadCatalog />}
								/>
								<Route path={`${HOME_PATH}/catalogue`}>
									<Route index element={<CataloguePage />} />
									<Route path=':id' element={<CatalogueItemPage />} />
								</Route>
							</Routes>
						</SearchProvider>
					</FilterProvider>
				</CatalogueItemProvider>
			</ConfigProvider>
		</BrowserRouter>
	)
}
