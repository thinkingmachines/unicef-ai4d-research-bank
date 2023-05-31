describe('The filter renders correctly', () => {
	it('should have none selected by default', () => {
		cy.visit('/catalogue')
		cy.get('.ant-select-selection-item').contains('None')
	})

	it('should display 6 results by default', () => {
		cy.contains('6 results available')
	})
})

describe('The filter filters the displayed catalogue items', () => {
	it('should filter entries by ascending year', () => {
		cy.get('[data-cy="catalogue-dropdown-filter"]')
			.click()
			.type('{downArrow}{downArrow}{enter}')

		cy.get('[data-cy="catalogue-item"]').should(items => {
			expect(items.eq(0)).to.contain('Cross Country Poverty Mapping Model')
			expect(items.eq(1)).to.contain('Poverty Mapping Rollout Dataset for')
			expect(items.eq(2)).to.contain('Poverty Mapping Model for Timor Leste')
		})
	})
	it('should filter entries by descending year', () => {
		cy.get('[data-cy="catalogue-dropdown-filter"]')
			.click()
			.type('{downArrow}{downArrow}{enter}')

		cy.get('[data-cy="catalogue-item"]').should(items => {
			expect(items.eq(0)).to.contain('Air Quality Model for Thailand')
			expect(items.eq(1)).to.contain('poverty mapping thailand')
			expect(items.eq(2)).to.contain('Poverty Mapping Model for Philippines')
		})
	})

	it('should filter entries by ascending name', () => {
		cy.get('[data-cy="catalogue-dropdown-filter"]')
			.click()
			.type('{downArrow}{downArrow}{enter}')

		cy.get('[data-cy="catalogue-item"]').should(items => {
			expect(items.eq(0)).to.contain('Air Quality Model for Thailand')
			expect(items.eq(1)).to.contain('Cross Country Poverty Mapping Model for ')
			expect(items.eq(2)).to.contain('Poverty Mapping Model for Philippines')
		})
	})
	it('should filter entries by descending name', () => {
		cy.get('[data-cy="catalogue-dropdown-filter"]')
			.click()
			.type('{downArrow}{downArrow}{enter}')

		cy.get('[data-cy="catalogue-item"]').should(items => {
			expect(items.eq(0)).to.contain('poverty mapping thailand')
			expect(items.eq(1)).to.contain('Poverty Mapping Rollout Dataset for Timo')
			expect(items.eq(2)).to.contain('Poverty Mapping Model for Timor Leste')
		})
	})
})
