import App from 'App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import './index.css'

registerSW()

const container = document.querySelector('#root')
if (container) {
	const root = createRoot(container)
	root.render(
		<StrictMode>
			<App />
		</StrictMode>
	)
}
