/* eslint-disable @typescript-eslint/restrict-template-expressions */
const URL_PREFIX = Cypress.env('URL_PREFIX') as string
describe('The search input needs at least 3 characters before displaying search results', () => {
	it('should not display search results', () => {
		cy.visit('/')
		cy.wait(3000)

		cy.get('input[placeholder="Search for a dataset or a model"]')
			.click()
			.type('po')

		cy.contains(
			'.ant-select-item-option-content',
			'Relative Wealth Rollout Dataset for Timor Leste (2016)'
		).should('not.exist')
	})

	it('should display search results', () => {
		cy.visit('/')

		cy.get('input[placeholder="Search for a dataset or a model"]')
			.click()
			.type('relative')

		cy.contains(
			'.ant-select-item-option-content',
			'Relative Wealth Rollout Dataset for Timor Leste (2016)'
		).should('exist')
	})
})

describe('Clicking on a search suggestion should auto-populate the search in the catalogue search page', () => {
	const searchText = 'Air Quality Model for Thailand'

	it('should populate the search results in catalogue search page', () => {
		cy.visit('/')

		cy.get('input[placeholder="Search for a dataset or a model"]')
			.click()
			.type('thailand')

		cy.contains('.ant-select-item-option-content', searchText).click()

		cy.location('pathname').should(
			'eq',
			`${URL_PREFIX}/catalogue/airquality-thailand-model`
		)

		cy.contains('Catalogue').click()

		cy.get('input[placeholder="Search for a dataset or a model"]').should(
			'have.value',
			searchText
		)
	})
})

describe('pressing x should clear the search bar', () => {
	it('should update the search results', () => {
		cy.visit('/')
		cy.visit('/catalogue')
		cy.get('input[placeholder="Search for a dataset or a model"]')
			.click()
			.type('philippines{enter}')

		cy.get('input[placeholder="Search for a dataset or a model"]')

		cy.get('span')
			.contains('result available')
			.siblings('div')
			.find('a')
			.should('have.length', 1)
	})

	it('should reset the search results', () => {
		cy.get('.ant-input-clear-icon').click()

		cy.get('span')
			.contains('results available')
			.siblings('div')
			.find('a')
			.should('have.length', 5)
	})
})
