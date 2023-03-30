export const formatString = (str: string) =>
	str.replaceAll('-', ' ').replaceAll(/\b\w/g, l => l.toUpperCase())

export const getFileFormat = (str: string, separator: string) => {
	const index = str.lastIndexOf(separator)

	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	if (index === -1) {
		return ''
	}
	return str.slice(index + separator.length)
}
