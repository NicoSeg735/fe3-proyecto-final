import React, { useEffect } from 'react'
import { routes, Login } from './Navigation/Routes.js'
import { ProtectedRoutes } from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SessionProvider from './contexts/Session.jsx'
import ThemeProvider from './contexts/Theme.jsx'

function App() {
	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])
	return (
		<SessionProvider>
			<ThemeProvider>
				<BrowserRouter>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route element={<ProtectedRoutes />}>
							{routes.map(({ id, path, Component }) => (
								<Route
									key={id}
									path={path}
									element={<Component />}
								/>
							))}
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</SessionProvider>
	)
}

export default App
