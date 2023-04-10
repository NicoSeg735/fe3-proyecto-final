import React, { useContext } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useGetData } from '../hooks/useGetData'
import Card from '../components/Card'
import { SessionContext } from '../contexts/Session'

const Favs = () => {
	const USERS_API = 'https://jsonplaceholder.typicode.com/users'
	const { state } = useContext(SessionContext)

	const { values } = useGetData(USERS_API)

	return (
		<MainLayout>
			<div className='max-w-2xl p-6 flex flex-col gap-4 w-full'>
				<h1 className='text-left font-bold text-2xl w-full my-2'>Favoritos</h1>
				<div className='grid grid-cols-1 w-full gap-4 sm:grid-cols-2'>
					{values
						?.filter(v => state.favs.includes(v.id))
						.map(user => (
							<Card key={user.id} user={user} />
						))}
				</div>
			</div>
		</MainLayout>
	)
}

export default Favs
