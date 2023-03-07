describe('Basic flow', () => {
	beforeEach(() => {
		cy.viewport('macbook-13')
	})

	it('Should render the blank main page', () => {
		cy.visit('/')
	})
})
