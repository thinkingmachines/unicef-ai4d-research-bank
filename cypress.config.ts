import { defineConfig } from 'cypress'

export default defineConfig({
	fileServerFolder: 'dist',
	fixturesFolder: false,
	projectId: 'ivvovd',
	e2e: {
		chromeWebSecurity: false,
		// baseUrl: 'https://thinkingmachines.github.io/unicef-ai4d-research-bank/',
		baseUrl: 'http://localhost:4173/unicef-ai4d-research-bank/',
		supportFile: false,
		specPattern: 'cypress/e2e/**/*.ts'
	}
})
