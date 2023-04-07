import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { SessionContext } from '../contexts/Session'

export const ProtectedRoutes = () => {
	const { isLogged } = useContext(SessionContext)
	return isLogged ? <Outlet /> : <Navigate to='/login' />
}
