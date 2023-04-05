const Card = ({ values }) => {
	return (
		<div className='flex flex-col gap-2 w-full max-w-[500px] p-8 bg-slate-800 rounded-lg'>
			<h1 className='text-xl font-bold mb-2'>Tus datos personales</h1>
			<div>
				<span className='text-sm font-semibold'>Nombre</span>
				<h3 className='text-lg'>{values.name}</h3>
			</div>
			<div>
				<span className='text-sm font-semibold'>Email</span>
				<h3 className='text-lg'>{values.email}</h3>
			</div>
			<div>
				<span className='text-sm font-semibold'>Teléfono</span>
				<h3 className='text-lg'>{values.phone}</h3>
			</div>
		</div>
	)
}

export default Card
