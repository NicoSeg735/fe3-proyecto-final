import React, { createContext, useState } from 'react'

export const SessionContext = createContext({})

const SessionProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false)

	const handleLogin = () => {
		setIsLogged(true)
	}

	const propiedades = {
		isLogged,
		handleLogin
	}

	return (
		<SessionContext.Provider value={propiedades}>
			{children}
		</SessionContext.Provider>
	)
}

export default SessionProvider
