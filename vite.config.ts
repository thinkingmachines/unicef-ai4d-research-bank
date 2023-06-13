/// <reference types="vitest" />
import eslintPlugin from '@nabla/vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => ({
	// override-prefix
	base: '/unicef-ai4d-research-bank-dev',
	test: {
		css: false,
		include: ['src/**/__tests__/*'],
		globals: true,
		environment: 'jsdom',
		setupFiles: 'src/setupTests.ts',
		clearMocks: true,
		coverage: {
			provider: 'istanbul',
			enabled: true,
			'100': true,
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage'
		}
	},
	plugins: [
		tsconfigPaths(),
		react(),
		...(mode === 'test'
			? []
			: [
					eslintPlugin(),
					VitePWA({
						registerType: 'autoUpdate',
						includeAssets: ['robots.txt', 'icons/*.svg', 'fonts/*.woff2'],
						manifest: {}
					})
			  ])
	],
	assetsInclude: ['**/*.md']
}))
