export const getInitials = user => {
	let initials = user.slice(0, 2).toUpperCase()
	const words = user.split(' ')
	if (words.length > 1) {
		initials = ''
		if (words.length === 2) {
			words.forEach(p => {
				initials = initials.concat(p.slice(0, 1).toUpperCase())
			})
		} else {
			initials = words[0]
				.slice(0, 1)
				.toUpperCase()
				.concat(words[words.length - 1].slice(0, 1).toUpperCase())
		}
	}
	return initials
}
