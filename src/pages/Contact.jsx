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
		email: '',
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
			.required('Campo obligatorio'),
	})

	const { handleSubmit, handleChange, handleReset, values, errors, isValid } = useFormik({
		initialValues,
		validationSchema: schema,
		onSubmit: () => {
			setIsSubmitted(true)
		},
		validateOnChange: false,
	})

	const resetPage = () => {
		handleReset()
		setIsSubmitted(false)
	}

	return (
		<MainLayout>
			<div className='max-w-sm  p-6 flex flex-col gap-4 w-full items-center'>
				<h1 className='text-left font-bold text-2xl w-full my-2'>Contacto</h1>
				<form onSubmit={handleSubmit} className='flex flex-col w-full gap-2'>
					<Input
						label='Nombre completo'
						name='fullName'
						placeholder='Ingrese nombre completo'
						value={values.fullName}
						onChange={handleChange}
						error={errors.fullName}
					/>
					<Input
						type='email'
						label='Correo electrónico'
						placeholder='Ingrese correo electrónico'
						name='email'
						value={values.email}
						onChange={handleChange}
						error={errors.email}
					/>
					<div className='flex flex-col items-center gap-4 sm:flex-row'>
						<Button type='button' onClick={resetPage} secondary>
							Limpiar
						</Button>
						<Button type='submit'>Enviar</Button>
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
