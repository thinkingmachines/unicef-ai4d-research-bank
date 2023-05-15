export const formatString = (str: string[] | string) => {
	const fmtstr = Array.isArray(str) ? str.join(', ') : str
	// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
	return fmtstr.replaceAll('-', ' ').replaceAll(/\b\w/g, l => l.toUpperCase())
}
export const getFileFormat = (str: string, separator: string) => {
	const index = str.lastIndexOf(separator)

	if (index === -1) {
		return ''
	}
	return str.slice(index + separator.length)
}
