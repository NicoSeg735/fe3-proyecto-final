import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'

const LoginLayout = ({ children }) => {
	const { dispatch } = useContext(ThemeContext)
	return (
		<div className='bg-slate-50 min-h-screen w-full flex flex-1 items-center flex-col dark:text-white dark:bg-slate-900'>
			<nav className='flex justify-between items-center w-full py-4 px-6'>
				<div>Logo</div>
				<button onClick={() => dispatch({ type: 'SWITCH' })}>Switch</button>
			</nav>
			{children}
		</div>
	)
}

export default LoginLayout
