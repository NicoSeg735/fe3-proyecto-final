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
		default:
			return state
	}
}

const SessionProvider = ({ children }) => {
	const initialState = {
		isLogged: sessionStorage.getItem('token') !== null,
		user: sessionStorage.getItem('user')
	}

	const [state, dispatch] = useReducer(handleDispatch, initialState)

	return (
		<SessionContext.Provider value={{ state, dispatch }}>
			{children}
		</SessionContext.Provider>
	)
}

export default SessionProvider
