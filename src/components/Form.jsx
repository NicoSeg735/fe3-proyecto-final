import { useFormik } from 'formik'
import Button from './Button'
import Input from './Input'
import * as Yup from 'yup'

const Form = ({ setFormValues, initialValues }) => {
	const schema = Yup.object().shape({
		name: Yup.string()
			.trim('No debe tener espacios al inicio o final')
			.strict()
			.min(3, 'Debe tener al menos 3 (tres) caracteres')
			.required('Campo obligatorio'),
		email: Yup.string()
			.trim('No debe tener espacios al inicio o final')
			.strict()
			.min(6, 'Debe tener al menos 6 (seis) caracteres')
			.email('Email inválido')
			.required('Campo obligatorio'),
		phone: Yup.number().required('Campo obligatorio')
	})

	const { handleSubmit, handleChange, handleReset, values, errors, isValid } =
		useFormik({
			initialValues: initialValues,
			validationSchema: schema,
			onSubmit: values => {
				setFormValues(values)
			},
			validateOnChange: false
		})

	const resetPage = () => {
		handleReset()
		setFormValues(initialValues)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-2 w-full max-w-[500px] p-8'
		>
			<Input
				name='name'
				value={values.name}
				onChange={handleChange}
				label='Nombre'
				error={errors.name}
			/>
			<Input
				name='email'
				value={values.email}
				onChange={handleChange}
				label='Email'
				error={errors.email}
			/>
			<Input
				name='phone'
				value={values.phone}
				onChange={handleChange}
				label='Teléfono'
				error={errors.phone}
				type='number'
			/>
			<div className='w-full flex justify-between gap-4'>
				<Button type='button' onClick={resetPage} secondary>
					Limpiar
				</Button>
				<Button type='submit'>Enviar</Button>
			</div>
			{!isValid && (
				<span className='w-full text-center text-red-400 font-semibold'>
					Por favor chequea que la información sea correcta
				</span>
			)}
		</form>
	)
}

export default Form
