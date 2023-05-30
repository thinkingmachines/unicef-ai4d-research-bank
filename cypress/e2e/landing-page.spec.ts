describe('The correct elements are visible in the landing page', () => {
	it('renders the main page ', () => {
		cy.visit('/')
	})

	it('fetch the catalog json file ', () => {})

	it('renders the hero', () => {
		cy.get('[data-cy="hero-mainText"]').contains(
			'Accelerating machine learning adoption in the development sector'
		)
		cy.get('[data-cy="hero-subtext"]').contains(
			'Browse our catalogue of models and datasets to gain access to code, documentation, and pre-processed datasets that fit to your needs'
		)
		cy.get('[data-cy="hero-search"]').should('be.visible')
	})

	it('renders the featured datasets', () => {
		cy.get('[data-cy="featured-datasets"]').should('be.visible')
	})

	it('renders the browse by tags', () => {
		cy.get('[data-cy="tag-browse"]').should('be.visible')
	})

	it('renders the browse by country/region', () => {
		cy.get('[data-cy="region-browse"]').should('be.visible')
	})
})

describe('Clicking the "browse by tags" auto populate the catalogue filters', () => {
	it('renders at least three tags', () => {
		cy.wait(3000)

		cy.get('[data-cy="tag-browse"]').within(() => {
			cy.contains('button', 'air-quality').should('be.visible')

			cy.contains('button', 'machine-learning').should('be.visible')

			cy.contains('button', 'philippines').should('be.visible')
		})
	})

	it('redirects to the search catalogue page', () => {
		cy.contains('button', 'air-quality').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)
	})

	it('renders the search catalogue page', () => {
		cy.contains('Search Catalogue')
	})

	it('auto populates the Tags filter', () => {
		cy.contains('air-quality')
	})
})

describe('Clicking the "browse by tags" clears previously added filters', () => {
	it('should add three selections to tag filter', () => {
		cy.visit('/catalogue')

		cy.get('[data-cy="select-tags"]').click()
		cy.contains('.ant-select-item-option-content', 'air-quality').click()
		cy.contains('.ant-select-item-option-content', 'machine-learning').click()
		cy.contains('.ant-select-item-option-content', 'philippines').click()
	})

	it('should have only one selection in tag filter ', () => {
		cy.visit('/')
		cy.get('[data-cy="tag-browse"]').contains('machine-learning').click()

		cy.get('span.ant-select-selection-item-content').should(
			'not.contain',
			'air-quality'
		)
		cy.get('span.ant-select-selection-item-content').should(
			'not.contain',
			'philippines'
		)
	})
})

describe('Landing page autocomplete on search should lead to catalog page', () => {
	it('should redirect to catalogue with the inputted search term', () => {
		cy.visit('/')

		cy.get('input[placeholder="Search for a dataset or a model"]')
			.click()
			.type('cross country poverty')

		cy.get('span.ant-input-group-addon').find('button').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)

		cy.contains(
			'Cross Country Poverty Mapping Model for Indonesia, Timor Leste and Myanmar (2016)'
		)
	})
})

describe('Searching from the landing page should reset the tag filters', () => {
	it('should add three selections to tag filter', () => {
		cy.visit('/catalogue')

		cy.get('[data-cy="select-tags"]').click()
		cy.contains('.ant-select-item-option-content', 'air-quality').click()
		cy.contains('.ant-select-item-option-content', 'machine-learning').click()
		cy.contains('.ant-select-item-option-content', 'philippines').click()
	})

	it('should have only no selections in tag filter ', () => {
		cy.visit('/')

		cy.get('input[placeholder="Search for a dataset or a model"]')
			.click()
			.type('cross country poverty')

		cy.get('span.ant-input-group-addon').find('button').click()
		cy.location('pathname').should('eq', `/unicef-ai4d-research-bank/catalogue`)

		cy.get('span.ant-select-selection-item-content').should('not.exist')
	})
})
