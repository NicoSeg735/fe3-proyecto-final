import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { SessionContext } from '../contexts/Session'

export const ProtectedRoutes = () => {
	const { state } = useContext(SessionContext)
	return state.isLogged ? <Outlet /> : <Navigate to='/login' />
}
