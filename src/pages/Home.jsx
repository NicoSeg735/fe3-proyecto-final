import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useGetData } from '../hooks/useGetData'
import Card from '../components/Card'

const Home = () => {
	const USERS_API = 'https://api.github.com/users'

	const { values } = useGetData(USERS_API)

	return (
		<MainLayout>
			<h1>Inicio</h1>
			<div className='grid grid-cols-1 w-full gap-4 max-w-xl p-4'>
				{values?.map(user => (
					<Card key={user.id} user={user} />
				))}
			</div>
		</MainLayout>
	)
}

export default Home
