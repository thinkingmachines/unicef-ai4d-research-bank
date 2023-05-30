describe('The correct filter elements should be displayed', () => {
	before(() => {
		cy.visit('/catalogue')
		cy.wait(3000)
	})

	it('renders the filter ', () => {
		cy.get('span')
			.contains('Country/Region')
			.siblings('div.ant-select')
			.should('exist')

		cy.get('span').contains('Year').siblings('div.ant-picker').should('exist')

		cy.get('span')
			.contains('Organization')
			.siblings('div.ant-select')
			.should('exist')

		cy.get('span').contains('Tags').siblings('div.ant-select').should('exist')
	})
})

describe('The country/regions filter options in alphabetical order', () => {
	it('should assert that the country/region filter  choices are alphabetical ', () => {
		cy.get('span').contains('Country/Region').siblings('div.ant-select').click()

		cy.get('div.rc-virtual-list-holder-inner')
			.children('div')
			.eq(0)
			.should('contain', 'Indonesia')
			.next()
			.should('contain', 'Myanmar')
			.next()
			.should('contain', 'Philippines')
			.next()
			.should('contain', 'Thailand')
			.next()
			.should('contain', 'Timor Leste')
	})
})

describe('The country/regions filter should clear upon pressing x', () => {
	it('should select two options from the filter', () => {
		cy.get('span')
			.contains('Country/Region')
			.siblings('div.ant-select')
			.click()
			.type('{downArrow}{downArrow}{enter}{downArrow}{enter}')

		cy.contains('.ant-select-selector', 'Thailand')
		cy.contains('.ant-select-selector', 'Philippines')
	})

	it('should clear out the selected filters', () => {
		cy.wait(3000)
		cy.get('.ant-select').eq(1).click()

		cy.contains('.ant-select-selector', 'Thailand')
		cy.contains('.ant-select-selector', 'Philippines')

		cy.get('.ant-select-clear').click()

		cy.contains('.ant-select-selector', 'Thailand').should('not.exist')
		cy.contains('.ant-select-selector', 'Philippines').should('not.exist')
	})
})

describe('The number of results should be 0 if using tag filter with a tag does not exist', () => {
	it('should display no catalogue items', () => {
		cy.get('span')
			.contains('Tags')
			.siblings('div.ant-select')
			.click()
			.type('NoneExistentTag{enter}')

		cy.contains('No catalogue items available.')
	})
})

describe('The search entries should only entries from year 2017 till present', () => {
	it('Sets start year to 2017 and verifies results', () => {
		cy.visit('/catalogue')

		cy.get('.ant-picker-input').eq(0).click()

		cy.get('.ant-picker-header-super-prev-btn').eq(0).click()

		cy.contains('.ant-picker-cell-inner', '2017').first().click()

		cy.contains('2 results available').should('be.visible')
	})
})

describe('The search entries should only entries from before year 2019', () => {
	it('Sets end year to 2019 and verifies results', () => {
		cy.visit('/catalogue')

		cy.get('.ant-picker-input').eq(1).click()

		cy.get('.ant-picker-header-super-prev-btn').eq(0).click()

		cy.contains('.ant-picker-cell-inner', '2019').first().click()

		cy.contains('4 results available').should('be.visible')
	})
})

describe('Filter year/period for entries spanning multiple entries', () => {
	it('Sets end year to 2021 and verifies results', () => {
		cy.visit('/catalogue')

		cy.get('.ant-picker-input').eq(0).click()

		cy.get('.ant-picker-header-super-prev-btn').eq(0).click()

		cy.contains('.ant-picker-cell-inner', '2017').first().click()

		cy.get('.ant-picker-header-super-next-btn').eq(1).click()
		cy.contains('.ant-picker-cell-inner', '2021').first().click()

		cy.contains('Air Quality Model for Thailand (2020-2023)').should(
			'be.visible'
		)
	})
})

describe('Filter for a single year', () => {
	it('Sets end year to 2019 and verifies results', () => {
		cy.visit('/catalogue')

		cy.get('.ant-picker-input').eq(0).click()

		cy.get('.ant-picker-header-super-prev-btn').eq(0).click()

		cy.contains('.ant-picker-cell-inner', '2016').first().click()
		cy.contains('.ant-picker-cell-inner', '2016').first().click()

		cy.contains(
			'Cross Country Poverty Mapping Model for Indonesia, Timor Leste and Myanmar'
		).should('be.visible')

		cy.contains('Poverty Mapping Rollout Dataset for Timor Leste').should(
			'be.visible'
		)

		cy.contains('Poverty Mapping Model for Timor Leste').should('be.visible')
	})
})
