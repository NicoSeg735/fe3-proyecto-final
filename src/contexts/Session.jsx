import React, { createContext, useReducer } from 'react'

export const SessionContext = createContext({})

const handleDispatch = (state, { type, payload }) => {
	switch (type) {
		case 'LOGIN':
			sessionStorage.setItem(
				'token',
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImVsIHByb2ZlIGtpa2UgZXMgZWwgbWVqb3IgZGUgdG9kbyBkaWdpdGFsIGhvdXNlIn0.O3mT6alSWlm_BC1AWH4Nw0c81jLzImoiMgt-6w2AxYw'
			)
			sessionStorage.setItem('user', payload)
			return {
				...state,
				isLogged: true,
				user: payload
			}
		case 'LOGOUT':
			sessionStorage.clear()
			return {
				...state,
				isLogged: false,
				user: null
			}
		case 'SWITCH_FAV':
			if (state.favs.includes(payload)) {
				localStorage.setItem(
					'favs',
					state.favs.filter(f => f !== payload)
				)
				return {
					...state,
					favs: state.favs.filter(f => f !== payload)
				}
			} else {
				localStorage.setItem('favs', [...state.favs, payload])
				return {
					...state,
					favs: [...state.favs, payload]
				}
			}
		default:
			return state
	}
}

const SessionProvider = ({ children }) => {
	const initialState = {
		isLogged: sessionStorage.getItem('token') !== null,
		user: sessionStorage.getItem('user'),
		favs:
			localStorage.getItem('favs') !== null
				? localStorage.getItem('favs').split(',').map(Number)
				: []
	}

	const [state, dispatch] = useReducer(handleDispatch, initialState)

	return (
		<SessionContext.Provider value={{ state, dispatch }}>
			{children}
		</SessionContext.Provider>
	)
}

export default SessionProvider
