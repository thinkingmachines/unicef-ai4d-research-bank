import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from 'App'
import renderWithProviders from 'testUtils'

describe('<App />', () => {
	it('renders', async () => {
		window.history.pushState({}, 'Home', '/unicef-ai4d-research-bank/')
		renderWithProviders(<App />, false)

		await expect(screen.findByText('Apple')).resolves.toBeInTheDocument()
		await userEvent.click(screen.getByText('Apple'))

		await expect(
			screen.findByText('Vitamins per 100 g (3.5 oz)')
		).resolves.toBeInTheDocument()
	})
})
