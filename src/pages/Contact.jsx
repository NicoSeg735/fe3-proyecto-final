import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Input from '../components/Input'
import Button from '../components/Button'

const Contact = () => {

	const [isSubmitted, setIsSubmitted] = useState(false)

	const initialValues = {
		fullName: '',
		email: ''
	}

	const schema = Yup.object().shape({
		fullName: Yup.string()
			.trim('No debe tener espacios al inicio o final')
			.strict()
			.min(6, 'Debe tener al menos 6 (seis) caracteres')
			.required('Campo obligatorio'),
		email: Yup.string()
			.trim('No debe tener espacios al inicio o final')
			.strict()
			.email()
			.required('Campo obligatorio')
	})

	const { handleSubmit, handleChange, handleReset, values, errors, isValid } =
		useFormik({
			initialValues: initialValues,
			validationSchema: schema,
			onSubmit: () => {
				setIsSubmitted(true)
			},
			validateOnChange: false
		})

	const resetPage = () => {
		handleReset()
		setIsSubmitted(false)
	}

	return (
		<MainLayout>
			<div className='flex-1 flex-col gap-4 p-12 w-full flex justify-start items-center'>
				<h1 className='text-2xl font-bold'>Contacto</h1>
				<form
					onSubmit={handleSubmit}
					className='flex flex-col w-full max-w-sm p-4 gap-2'
				>
					<Input
						label='Nombre completo'
						name='fullName'
						value={values.fullName}
						onChange={handleChange}
						error={errors.fullName}
					/>
					<Input
						type='email'
						label='Correo electrónico'
						name='email'
						value={values.email}
						onChange={handleChange}
						error={errors.email}
					/>
					<div className='flex flex-col items-center gap-4 sm:flex-row'>
						<Button type='button' onClick={resetPage} secondary>
							Limpiar
						</Button>
						<Button type='submit'>Iniciar sesión</Button>
					</div>
					{!isValid && (
						<span className='w-full text-center text-red-400 font-semibold'>
							Por favor verifique su información nuevamente
						</span>
					)}
					{isSubmitted && (
						<span className='w-full text-center text-green-600 font-semibold'>
							Gracias {values.fullName}, te contactaremos cuando antes vía mail
						</span>
					)}
				</form>
			</div>
		</MainLayout>
	)
}

export default Contact
