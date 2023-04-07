import React from 'react'
import { routes, Login } from './Navigation/Routes.js'
import { ProtectedRoutes } from './components/ProtectedRoute'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SessionProvider from './contexts/Session.jsx'
import ThemeProvider from './contexts/Theme.jsx'

function App() {
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
						<Route path='/' element={<Navigate to='/login' />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</SessionProvider>
	)
}

export default App
