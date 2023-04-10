import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SessionContext } from '../contexts/Session'

const Card = ({ user }) => {
	const { state, dispatch } = useContext(SessionContext)

	return (
		<div className='flex flex-col gap-2 w-full max-w-[500px] p-4 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer'>
			<Link to={'/dentist/' + user.id}>
				<div className='flex items-center justify-start gap-2'>
					<img
						src='/img/doctor.jpg'
						alt=''
						className='rounded-full w-8'
					/>
					<span className='text-lg font-semibold'>{user.name}</span>
				</div>
			</Link>
			<div
				onClick={() =>
					dispatch({ type: 'SWITCH_FAV', payload: user.id })
				}
			>
				{state.favs.includes(user.id) ? 'Borrar' : 'Agregar'}
			</div>
		</div>
	)
}

export default Card
