/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from 'App'
import renderWithProviders from 'testUtils'
import { describe, it, vi } from 'vitest'
import CatalogItemsMock from '../mocks/CatalogueItems.data.json'

global.fetch = vi.fn()

function createFetchResponse(data: unknown) {
	// eslint-disable-next-line no-promise-executor-return
	return { json: async () => new Promise(resolve => resolve(data)) }
}
const mockItems = CatalogItemsMock.items

describe('Render App page with mocked fetch', () => {
	it('renders', async () => {
		fetch.mockResolvedValue(createFetchResponse(mockItems))
		window.history.pushState({}, 'Home', '/unicef-ai4d-research-bank/')
		renderWithProviders(<App />, false)
	})
})
