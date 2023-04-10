import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/Theme'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke, faTooth } from '@fortawesome/free-solid-svg-icons'

const LoginLayout = ({ children }) => {
	const { dispatch } = useContext(ThemeContext)

	return (
		<div className='bg-slate-50 min-h-screen w-full flex flex-1 items-center flex-col dark:text-white dark:bg-slate-900'>
			<nav className='fixed top-0 z-40 left-0 right-0 select-none'>
				<div className='h-16 flex w-full justify-between text-slate-800 bg-white items-center gap-2 py-4 px-5 shadow-lg'>
					<div className='flex justify-between items-center gap-2 w-full relative'>
						<FontAwesomeIcon icon={faTooth} className='text-indigo-600' />
						<div className='cursor-pointer text-white flex items-center gap-2 p-2 bg-indigo-600 rounded-md' onClick={() => dispatch({ type: 'SWITCH' })}>
							<FontAwesomeIcon icon={faCircleHalfStroke} />
							<span className='text-sm'>Cambiar tema</span>
						</div>
					</div>
				</div>
			</nav>
			<div className='flex flex-col flex-1 w-full'>
				<div className='flex flex-col flex-1 w-full items-center bg-slate-100 mt-16'>{children}</div>
				<Footer />
			</div>
		</div>
	)
}

export default LoginLayout
