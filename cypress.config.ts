import { defineConfig } from 'cypress'

export default defineConfig({
	fileServerFolder: 'dist',
	fixturesFolder: 'public/api/data',
	projectId: 'ivvovd',
	e2e: {
		chromeWebSecurity: false,
		// baseUrl: 'https://thinkingmachines.github.io/unicef-ai4d-research-bank/',
		baseUrl: 'http://127.0.0.1:4173/unicef-ai4d-research-bank/',
		supportFile: false,
		specPattern: 'cypress/e2e/**/*.ts'
	}
})
