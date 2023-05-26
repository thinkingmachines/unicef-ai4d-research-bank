import type { CatalogueItemType } from '../../src/types/CatalogueItem.type'

describe('The catalog page renders', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.request('/api/data/catalog.json')
		cy.wait(3000)
	})

	it('renders the filter ', () => {
		cy.get('span')
			.contains('Country/Region')
			.siblings('div.ant-select')
			.should('exist')

		cy.get('span').contains('Year').siblings('div.ant-picker').should('exist')

		cy.get('span')
			.contains('Organization')
			.siblings('div.ant-select')
			.should('exist')

		cy.get('span').contains('Tags').siblings('div.ant-select').should('exist')
	})

	it('renders the search box ', () => {
		cy.get('input[placeholder="Search for a dataset or a model"]').should(
			'exist'
		)
	})

	it('renders the number of results', () => {
		cy.get('span').contains('results available')
	})

	it('renders the actual results ', () => {
		cy.get('span')
			.contains('results available')
			.siblings('div')
			.find('a')
			.should('have.length', 5)
	})
})

describe('all models and datasets should be displayed by default', () => {
	let catalogDataLength: number

	before(() => {
		cy.fixture('catalog.json').then((data: CatalogueItemType[]) => {
			catalogDataLength = data.length
		})
	})

	it('should render all the default items', () => {
		cy.visit('/')

		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)

		if (catalogDataLength > 5) {
			cy.get('span')
				.contains('results available')
				.siblings('div')
				.find('a')
				.should('have.length', 5)
		} else {
			cy.get('span')
				.contains('results available')
				.siblings('div')
				.find('a')
				.should('have.length', catalogDataLength)
		}
	})
})

describe('clicking on a search result should redirect the user to the selected catalogue item page', () => {
	let catalogData: CatalogueItemType[]

	before(() => {
		cy.fixture('catalog.json').then((data: CatalogueItemType[]) => {
			catalogData = data
		})
	})

	it('renders the main page ', () => {
		cy.visit('/')
	})

	it('fetch the catalog json file ', () => {
		cy.request('/api/data/catalog.json')
	})

	it('should navigate to the catalog page on click', () => {
		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)

		cy.get('span')
			.contains('results available')
			.siblings('div')
			.find('a')
			.first()
			.click()

		cy.log(catalogData[0].id)

		cy.location('pathname').should(
			'eq',
			`/unicef-ai4d-research-bank/catalogue/${catalogData[0].id}`
		)
	})
})
