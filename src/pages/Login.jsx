import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SessionContext } from '../contexts/Session'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Button from '../components/Button'
import LoginLayout from '../layouts/LoginLayout'

const Login = () => {
	const { dispatch } = useContext(SessionContext)
	const navigate = useNavigate()

	const initialValues = {
		user: '',
		password: ''
	}

	const schema = Yup.object().shape({
		user: Yup.string()
			.trim('No debe tener espacios al inicio o final')
			.strict()
			.min(3, 'Debe tener al menos 3 (tres) caracteres')
			.required('Campo obligatorio'),
		password: Yup.string()
			.trim('No debe tener espacios al inicio o final')
			.strict()
			.min(6, 'Debe tener al menos 6 (seis) caracteres')
			.required('Campo obligatorio')
	})

	const { handleSubmit, handleChange, handleReset, values, errors, isValid } =
		useFormik({
			initialValues: initialValues,
			validationSchema: schema,
			onSubmit: () => {
				dispatch({ type: 'LOGIN', payload: values.user })
				navigate('/')
			},
			validateOnChange: false
		})

	const resetPage = () => {
		handleReset()
	}

	return (
		<LoginLayout>
			<div className='flex-1 flex-col gap-4 p-12 w-full flex justify-start items-center'>
				<h1>Inicio de sesión</h1>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col w-full max-w-sm p-4 gap-2'
				>
					<Input
						label='Usuario'
						name='user'
						value={values.user}
						onChange={handleChange}
						error={errors.user}
					/>
					<Input
						type='password'
						label='Contraseña'
						name='password'
						value={values.password}
						onChange={handleChange}
						error={errors.password}
					/>
					<div className='flex flex-col items-center gap-4 sm:flex-row'>
						<Button type='button' onClick={resetPage} secondary>
							Limpiar
						</Button>
						<Button type='submit'>Iniciar sesión</Button>
					</div>
					{!isValid && (
						<span className='w-full text-center text-red-400 font-semibold'>
							Por favor chequea que la información sea correcta
						</span>
					)}
				</form>
			</div>
		</LoginLayout>
	)
}

export default Login
