describe('Access all resources', () => {
	it('renders the main page ', () => {
		cy.visit('/')
	})
	it('fetch the catalog json file ', () => {
		cy.request('/api/data/catalog.json')
	})
	it('should navigate to the catalog page on click', () => {
		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)
	})
	it('should navigate to the catalog item page on click', () => {
		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.wait(3000)
		cy.contains('Poverty Mapping Model for Timor Leste').click()
		cy.location('pathname').should(
			'eq',
			`/unicef-ai4d-research-bank/catalogue/povmap-timor-leste`
		)
	})
	it('should navigate to the main page', () => {
		cy.contains('AI4D Research Bank').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/`)
	})
})
