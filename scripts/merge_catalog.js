const fs = require('fs')
const yaml = require('yaml')
const path = require('path')

const inputPath = './catalog'
const outputPath = './public/api/data/catalog.json'

function loadYaml(filename) {
	try {
		const fileContents = fs.readFileSync(`${inputPath}/${filename}`, 'utf8')
		const data = yaml.parse(fileContents)
		return data
	} catch (e) {
		console.log(e)
	}
}

function mergeYamlFiles(inputPath, outputPath) {
	fs.readdir(inputPath, (err, files) => {
		if (err) {
			console.log(`Error reading directory: ${err}`)
		} else {
			const ymlFiles = files.filter(file => path.extname(file) === '.yml')
			const items = ymlFiles.map(loadYaml)
			const allItems = JSON.stringify(items)
			fs.writeFile(outputPath, allItems, err => {
				if (err) throw err
				console.log(
					`${items.length} catalog item(s) has been written to ${outputPath}`
				)
			})
		}
	})
}

mergeYamlFiles(inputPath, outputPath)
