// import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from 'App'
import renderWithProviders from 'testUtils'

describe('Place holder test', () => {
	it('renders', async () => {
		expect(true).toBe(true)
		window.history.pushState({}, 'Home', '/unicef-ai4d-research-bank/')
		renderWithProviders(<App />, false)
	})
})
