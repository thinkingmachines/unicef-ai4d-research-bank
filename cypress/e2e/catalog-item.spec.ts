describe('The catalog item sub components display correctly', () => {
	before(() => {
		cy.visit('/')
		cy.wait(3000)
	})

	it('should visit the catalog search page', () => {
		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)
	})

	it('should visit the specific catalog item page', () => {
		cy.contains('Poverty Mapping Model for Philippines (2017)').click()
		cy.location('pathname').should(
			'eq',
			`/unicef-ai4d-research-bank/catalogue/povmap-philippines`
		)
	})

	it('should display the organization name', () => {
		cy.contains('Thinking Machines Data Sciences Inc')
	})

	it('should display the dataset/model name', () => {
		cy.contains('Poverty Mapping Model for Philippines (2017)')
	})

	it('should display the Overview, Data, and Related links tab', () => {
		cy.get('[role="tab"]').contains('Overview').should('exist')
		cy.get('[role="tab"]').contains('Data').should('exist')
		cy.get('[role="tab"]').contains('Related Links').should('exist')
	})

	it('should display the country/region, year/period, and date created in the rightmost side', () => {
		cy.get('[data-cy="catalog-item-aside"]').contains('COUNTRY / REGION')
		cy.get('[data-cy="catalog-item-aside"]').contains('YEAR / PERIOD')
		cy.get('[data-cy="catalog-item-aside"]').contains('DATE CREATED')
	})

	it('should display the tags', () => {
		cy.get('[data-cy="catalog-item-aside-tags"]').contains('poverty-mapping')
		cy.get('[data-cy="catalog-item-aside-tags"]').contains('philippines')
	})

	it('should display the description in under the overview tab', () => {
		cy.contains(
			'This is an sklearn Random Forest regressor model for predicting relative wealth for Philippines.'
		)
	})

	it('should display the evalution metric', () => {
		cy.contains('Evaluation Metric')
		cy.contains('RSQUARED')
		cy.contains('Model evaluation using cross-validation')
	})
})

describe('The data columns should render correctly', () => {
	before(() => {
		cy.visit('/')
		cy.wait(3000)
	})

	it('should visit the catalog search page', () => {
		cy.contains('Catalogue').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)
	})

	it('should visit the specific catalog item page', () => {
		cy.contains(
			'Poverty Mapping Rollout Dataset for Timor Leste (2016)'
		).click()
		cy.location('pathname').should(
			'eq',
			`/unicef-ai4d-research-bank/catalogue/povmap-timor-leste-rollout-dataset`
		)
	})

	it('it should display two columns: column name and column type', () => {
		cy.get('[role="tab"]').contains('Data').should('exist').click()
		cy.get('[data-cy="catalog-item-data-schema"]').contains('Column Name')
		cy.get('[data-cy="catalog-item-data-schema"]').contains('Type')
	})
})
