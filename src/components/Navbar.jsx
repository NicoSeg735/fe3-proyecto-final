import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/Session'

const Navbar = () => {
	const { dispatch: dispatchTheme } = useContext(ThemeContext)
	const { state, dispatch: dispatchSession } = useContext(SessionContext)
	const navigate = useNavigate()

	const logout = () => {
		dispatchSession({ type: 'LOGOUT' })
		navigate('/login')
	}

	return (
		<nav className='flex justify-between items-center w-full py-4 px-6'>
			<div>Logo</div>
			{/* <ul className='flex gap-4'>
				<li>Inicio</li>
				<li>Favoritos</li>
				<li>Contacto</li>
				<li>Otro</li>
			</ul> */}
			<span>{state.user ?? ''}</span>
			<button onClick={() => dispatchTheme({ type: 'SWITCH' })}>Switch</button>
			<button onClick={logout}>Cerrar sesion</button>
		</nav>
	)
}

export default Navbar
