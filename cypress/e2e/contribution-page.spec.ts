describe('Catalogue item page', () => {
	it('should render the footer in the home page', () => {
		cy.visit('/')
		cy.get('[data-cy="footer"]').should('exist')
	})

	it('should render the footer in the catalogue page', () => {
		cy.visit('/catalogue')
		cy.get('[data-cy="footer"]').should('exist')
	})

	it('should render the footer in a catalogue item page', () => {
		cy.visit('/catalogue')
		cy.get('[data-cy="catalogue-item"]').first().click()
		cy.get('[data-cy="footer"]').should('exist')
	})

	it('footer onclick should redirect to the contribution page', () => {
		cy.visit('/')
		cy.get('[data-cy="footer"]').find('a').click()

		cy.location('pathname').should(
			'eq',
			`/unicef-ai4d-research-bank/contribute`
		)
	})

	it('should assert that the imported markdown file is working', () => {
		cy.request(
			'https://raw.githubusercontent.com/thinkingmachines/unicef-ai4d-research-bank/main/catalog-contribution.md'
		)
	})
})
