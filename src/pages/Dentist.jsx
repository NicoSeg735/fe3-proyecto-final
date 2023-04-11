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
			{values !== undefined && (
				<div className='max-w-2xl p-6 flex flex-col gap-4 w-full'>
					<h1 className='text-left font-bold text-2xl w-full my-2'>Dentista</h1>
					<div className='grid grid-cols-2 gap-4 p-4 rounded-lg bg-slate-200 border border-slate-300 dark:bg-slate-900 dark:border-slate-700 duration-200'>
						<div className='flex flex-col'>
							<label className='font-semibold text-sm'>ID</label>
							<span className='text-lg'>{values?.id}</span>
						</div>
						<div className='flex flex-col'>
							<label className='font-semibold text-sm'>Usuario</label>
							<span className='text-lg'>{values?.username}</span>
						</div>
						<div className='flex flex-col col-span-2 sm:col-span-1'>
							<label className='font-semibold text-sm'>Nombre</label>
							<span className='text-lg'>{values?.name}</span>
						</div>
						<div className='flex flex-col col-span-2 sm:col-span-1'>
							<label className='font-semibold text-sm'>Email</label>
							<span className='text-lg'>{values?.email}</span>
						</div>
						<div className='grid grid-cols-2 col-span-2 gap-2'>
							<label className='font-semibold text-sm col-span-2'>Dirección</label>
							<div className='flex flex-col col-span-1'>
								<label className='font-semibold text-sm'>Calle</label>
								<span className='text-lg'>{values?.address.street}</span>
							</div>
							<div className='flex flex-col col-span-1'>
								<label className='font-semibold text-sm'>Depto</label>
								<span className='text-lg'>{values?.address.suite}</span>
							</div>
							<div className='flex flex-col col-span-1'>
								<label className='font-semibold text-sm'>Ciudad</label>
								<span className='text-lg'>{values?.address.city}</span>
							</div>
							<div className='flex flex-col col-span-1'>
								<label className='font-semibold text-sm'>Código postal</label>
								<span className='text-lg'>{values?.address.zipcode}</span>
							</div>
							<div className='flex flex-col col-span-1'>
								<label className='font-semibold text-sm'>Latitud</label>
								<span className='text-lg'>{values?.address.geo.lat}</span>
							</div>
							<div className='flex flex-col col-span-1'>
								<label className='font-semibold text-sm'>Longitud</label>
								<span className='text-lg'>{values?.address.geo.lng}</span>
							</div>
						</div>
						<div className='flex flex-col col-span-2 sm:col-span-1'>
							<label className='font-semibold text-sm'>Teléfono</label>
							<span className='text-lg'>{values?.phone}</span>
						</div>
						<div className='flex flex-col col-span-2 sm:col-span-1'>
							<label className='font-semibold text-sm'>Página web</label>
							<span className='text-lg'>{values?.website}</span>
						</div>
						<div className='grid grid-cols-2 col-span-2 gap-2'>
							<label className='font-semibold text-sm col-span-2'>Compañía</label>
							<div className='flex flex-col col-span-2'>
								<label className='font-semibold text-sm'>Nombre</label>
								<span className='text-lg'>{values?.company.name}</span>
							</div>
							<div className='flex flex-col col-span-2'>
								<label className='font-semibold text-sm'>Eslogan</label>
								<span className='text-lg'>{values?.company.catchPhrase}</span>
							</div>
							<div className='flex flex-col col-span-2'>
								<label className='font-semibold text-sm'>Estrategia</label>
								<span className='text-lg'>{values?.company.bs}</span>
							</div>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	)
}

export default Dentist
