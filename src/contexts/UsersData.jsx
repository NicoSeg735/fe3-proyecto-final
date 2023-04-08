import React, { createContext, useReducer } from 'react'
import { useGetData } from '../hooks/useGetData'

export const UsersDataContext = createContext({})

const USERS_API = 'https://api.github.com/users'

const handleDispatch = (state, { type, payload }) => {
	switch (type) {
		case 'GET':
			return {
				...state
			}
		default:
			return state
	}
}

const UsersDataProvider = ({ children }) => {
	const { values } = useGetData(USERS_API)

	const initialState = {
		users: values
	}

	const [state, dispatch] = useReducer(handleDispatch, initialState)

	return (
		<UsersDataContext.Provider value={{ state, dispatch }}>
			{children}
		</UsersDataContext.Provider>
	)
}

export default UsersDataProvider
