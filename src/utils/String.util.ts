const formatString = (str: string) =>
	str.replaceAll('-', ' ').replaceAll(/\b\w/g, l => l.toUpperCase())

export default formatString
