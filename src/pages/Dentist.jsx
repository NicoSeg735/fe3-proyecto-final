import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useGetData } from '../hooks/useGetData'
import { useParams } from 'react-router-dom'

const Dentist = () => {
	const USERS_API = 'https://jsonplaceholder.typicode.com/users/'
	const { id } = useParams()

	const { values } = useGetData(USERS_API + id)

	return (
		<MainLayout>
			<h1>Inicio</h1>
			<div className='grid grid-cols-1 w-full gap-4 max-w-xl p-4'>
				{values?.id}
			</div>
		</MainLayout>
	)
}

export default Dentist
