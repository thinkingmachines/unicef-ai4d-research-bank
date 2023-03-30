const formatString = (str: string) =>
	str.replaceAll('-', ' ').replaceAll(/\b\w/g, l => l.toUpperCase())

export default formatString

export const getFileFormat = (str: string, separator: string) => {
	const index = str.lastIndexOf(separator)
	if (index === -1) {
		return ''
	}
	return str.slice(index + separator.length)
}
