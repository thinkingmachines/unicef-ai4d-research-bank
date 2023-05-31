describe('The filter renders correctly', () => {
	it('should have all ticked by default', () => {
		cy.visit('/catalogue')
		cy.get('.ant-radio-group').contains('All')
	})

	it('should have model and dataset options', () => {
		cy.get('.ant-radio-group').contains('Datasets')
		cy.get('.ant-radio-group').contains('Models')
	})

	it('should display 6 results by default', () => {
		cy.contains('6 results available')
	})
})

describe('The filter filters the displayed catalogue items', () => {
	it('should display 5 results upon clicking model', () => {
		cy.get('.ant-radio-group').contains('Models').click()
		cy.get('[data-cy="catalogue-item"]').should('have.length', 5)
	})

	it('should display 1 result upon clicking dataset', () => {
		cy.get('.ant-radio-group').contains('Datasets').click()
		cy.get('[data-cy="catalogue-item"]').should('have.length', 1)
	})
})
