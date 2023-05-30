/* eslint-disable @typescript-eslint/no-unsafe-call */
// import { screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import App from 'App'
import renderWithProviders from 'testUtils'
import type { Mock } from 'vitest'
import { describe, it, vi } from 'vitest'
import CatalogItemsMock from '../mocks/CatalogueItems.data.json'

const { VITE_HOME_PATH } = import.meta.env

global.fetch = vi.fn()

function createFetchResponse(data: unknown) {
	// eslint-disable-next-line no-promise-executor-return
	return { json: async () => new Promise(resolve => resolve(data)) }
}
const mockItems = CatalogItemsMock.items

describe('Render App page with mocked fetch', () => {
	it('renders', async () => {
		;(fetch as Mock).mockResolvedValue(createFetchResponse(mockItems))
		window.history.pushState({}, 'Home', VITE_HOME_PATH as string)
		renderWithProviders(<App />, false)
	})
})
