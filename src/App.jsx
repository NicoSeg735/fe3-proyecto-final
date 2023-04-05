import Form from './components/Form'
import Card from './components/Card'
import { useState } from 'react'

function App() {
	const initialValues = {
		name: '',
		phone: '',
		email: ''
	}

	const [formValues, setFormValues] = useState(initialValues)

	return (
		<div className='bg-slate-900 min-h-screen w-full flex justify-start py-12 items-center flex-col gap-4 text-white'>
			<div className='w-full text-center'>
				<h1 className='text-3xl font-bold'>Frontend III</h1>
				<h2 className='text-xl font-semibold'>
					Formulario de contacto
				</h2>
			</div>
			<Form setFormValues={setFormValues} initialValues={initialValues} />
			{formValues.name !== '' && <Card values={formValues} />}
		</div>
	)
}

export default App
