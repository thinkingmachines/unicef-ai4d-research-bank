// const url_prefix = "unicef-ai4d-research-bank"
// const URL_PREFIX = "my-ai4d-research-bank"

describe('There should only be a maximum of 3 featured datasets', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.wait(3000)
	})

	it('should display 3 dataset cards', () => {
		cy.visit('/')

		cy.get('[data-cy="featured-card"]').its('length').should('eq', 3)
	})
})

describe('The featured cards should display the correct sub components', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.wait(3000)
	})

	it('should display the org name', () => {
		cy.visit('/')

		cy.get('[data-cy="featured-card-org-name"]').its('length').should('eq', 3)
	})

	it('should display the card name', () => {
		cy.visit('/')

		cy.get('[data-cy="featured-card-name"]').its('length').should('eq', 3)
	})

	it('should display the country-region name', () => {
		cy.visit('/')

		cy.get('[data-cy="featured-card-country-region"]')
			.its('length')
			.should('eq', 3)
	})

	it('should display the year/period', () => {
		cy.visit('/')

		cy.get('[data-cy="featured-card-year-period"]')
			.its('length')
			.should('eq', 3)
	})
})

describe('Clicking on a featured dataset should redirect to the catalogue item page', () => {
	it('should redirect to the catalogue id page with the same id as the featured dataset', () => {
		cy.visit('/')

		cy.contains('Air Quality Model for Thailand').click()

		cy.location('pathname').should(
			'eq',
			`/${URL_PREFIX}/catalogue/airquality-thailand-model`
		)
	})
})
