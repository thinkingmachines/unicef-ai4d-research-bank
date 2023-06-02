import type { CatalogueItemType } from '../../src/types/CatalogueItem.type'
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const URL_PREFIX = Cypress.env('URL_PREFIX') as string

describe('The catalog page renders', () => {
	before(() => {
		cy.visit('/catalogue')
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
	it('should render all the default items', () => {
		cy.visit('/')

		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `${URL_PREFIX}/catalogue`)

		cy.get('span')
			.contains('results available')
			.siblings('div')
			.find('a')
			.should('have.length', 5)
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

	it('should navigate to the catalog page on click', () => {
		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `${URL_PREFIX}/catalogue`)

		cy.get('span')
			.contains('results available')
			.siblings('div')
			.find('a')
			.first()
			.click()

		cy.location('pathname').should(
			'eq',
			`${URL_PREFIX}/catalogue/${catalogData[0].id}`
		)
	})
})
