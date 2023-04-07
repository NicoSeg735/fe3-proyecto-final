import React, { createContext } from 'react'
import { useEffect } from 'react'

export const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
	useEffect(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [])

	const switchMode = () => {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		} else {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		}
	}

	return (
		<ThemeContext.Provider value={{ switchMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
