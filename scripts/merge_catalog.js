const fs = require('fs')
const yaml = require('yaml')

try {
	const fileContents = fs.readFileSync('catalog/povmap-timor-leste.yml', 'utf8')
	const data = yaml.parse(fileContents)
	console.log(data)
} catch (e) {
	console.log(e)
}
