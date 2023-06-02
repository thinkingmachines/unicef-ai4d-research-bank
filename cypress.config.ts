import { defineConfig } from 'cypress'

export default defineConfig({
	fileServerFolder: 'dist',
	fixturesFolder: 'public/api/data',
	projectId: 'ivvovd',
	e2e: {
		chromeWebSecurity: false,
		baseUrl: 'https://thinkingmachines.github.io/unicef-ai4d-research-bank/',
		env: {
			// override-prefix
			URL_PREFIX: '/unicef-ai4d-research-bank'
		},
		supportFile: false,
		specPattern: 'cypress/e2e/**/*.ts'
	}
})
