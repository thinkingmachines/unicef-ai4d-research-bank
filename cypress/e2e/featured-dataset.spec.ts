describe('There should only be a maximum of 3 featured datasets', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.request('/api/data/catalog.json')
		cy.wait(3000)
	})

	it('should display 3 dataset cards', () => {
		cy.visit('/')
		cy.request('/api/data/catalog.json')

		cy.get('[data-cy="featured-card"]').its('length').should('eq', 3)
	})
})

describe('The featured cards should display the correct sub components', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.request('/api/data/catalog.json')
		cy.wait(3000)
	})

	it('should display the org name', () => {
		cy.visit('/')
		cy.request('/api/data/catalog.json')

		cy.get('[data-cy="featured-card-org-name"]').its('length').should('eq', 3)
	})

	it('should display the card name', () => {
		cy.visit('/')
		cy.request('/api/data/catalog.json')

		cy.get('[data-cy="featured-card-name"]').its('length').should('eq', 3)
	})

	it('should display the country-region name', () => {
		cy.visit('/')
		cy.request('/api/data/catalog.json')

		cy.get('[data-cy="featured-card-country-region"]')
			.its('length')
			.should('eq', 3)
	})

	it('should display the year/period', () => {
		cy.visit('/')
		cy.request('/api/data/catalog.json')

		cy.get('[data-cy="featured-card-year-period"]')
			.its('length')
			.should('eq', 3)
	})
})

describe('Clicking on a featured dataset should redirect to the catalogue item page', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.request('/api/data/catalog.json')
		cy.wait(3000)
	})

	it('should redirect to the catalogue id page with the same id as the featured dataset', () => {
		cy.visit('/')
		cy.request('/api/data/catalog.json')

		cy.contains('Air Quality Model for Thailand').click()

		cy.location('pathname').should(
			'eq',
			`/unicef-ai4d-research-bank/catalogue/airquality-thailand-model`
		)
	})
})
