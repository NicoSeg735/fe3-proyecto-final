import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/Session'
import { ThemeContext } from '../contexts/Theme'

const Login = () => {
	const { handleLogin } = useContext(SessionContext)
	const navigate = useNavigate()
	const { switchMode } = useContext(ThemeContext)

	const handleSubmit = e => {
		e.preventDefault()
		handleLogin()
		navigate('/home')
	}

	return (
		<div className='bg-slate-50 min-h-screen w-full flex justify-start py-12 items-center flex-col gap-4 dark:text-white duration-500 dark:bg-slate-900'>
			Login
			<button onClick={switchMode}>cambiar modo</button>
		</div>
	)
}

export default Login
