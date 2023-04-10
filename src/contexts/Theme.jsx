import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext({})

const handleDispatch = (state, { type, payload }) => {
	switch (type) {
		case 'SWITCH':
			if (state.theme === 'dark') {
				document.documentElement.classList.remove('dark')
				localStorage.removeItem('theme')
				return { ...state, theme: null }
			} else {
				document.documentElement.classList.add('dark')
				localStorage.setItem('theme', 'dark')
				return { ...state, theme: 'dark' }
			}

		default:
			return state
	}
}

const ThemeProvider = ({ children }) => {
	const initialState = {
		theme: localStorage.getItem('theme'),
	}

	const [state, dispatch] = useReducer(handleDispatch, initialState)

	return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
