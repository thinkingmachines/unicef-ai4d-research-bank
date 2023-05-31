describe('The pagination component renders', () => {
	it('should display that there are 6 items', () => {
		cy.visit('/catalogue')
		cy.wait(3000)
		cy.get('.ant-pagination').contains('Total 6 items')
	})

	it('should display 2 pages', () => {
		cy.get('.ant-pagination-item-2').should('exist')
	})

	it('should display 6 results by default', () => {
		cy.contains('6 results available')
	})
})

describe('The pagination component displays paged items', () => {
	it('should display 1 item upon clicking page 2', () => {
		cy.get('.ant-pagination-item-2').click()
		cy.get('[data-cy="catalogue-item"]').should('have.length', 1)
	})
	it('should display 5 items upon clicking page 1', () => {
		cy.get('.ant-pagination-item-1').click()
		cy.get('[data-cy="catalogue-item"]').should('have.length', 5)
	})

	it('should display 1 item upon clicking the next arrow', () => {
		cy.get('[data-cy="catalogue-item"]').get('.anticon-right').click()
		cy.get('[data-cy="catalogue-item"]').should('have.length', 1)
	})
	it('should display 5 items upon clicking the previous arrow', () => {
		cy.get('[data-cy="catalogue-item"]').get('.anticon-left').click()
		cy.get('[data-cy="catalogue-item"]').should('have.length', 5)
	})
})
