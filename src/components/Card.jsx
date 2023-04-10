import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SessionContext } from '../contexts/Session'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

const Card = ({ user }) => {
	const { state, dispatch } = useContext(SessionContext)

	return (
		<Link
			className='flex flex-col gap-2 w-full p-4 bg-slate-200 duration-200 hover:shadow-md dark:bg-slate-800 rounded-lg cursor-pointer'
			to={'/dentist/' + user.id}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center justify-start gap-3'>
					<img src='/img/doctor.jpg' alt='' className='rounded-full w-8' />
					<div className='flex flex-col'>
						<span className='text-lg font-semibold leading-tight'>{user.name}</span>
						<span className='text-sm text-slate-600 leading-tight italic'>{user.username}</span>
					</div>
				</div>
				<div
					className={
						'flex w-fit p-1 duration-200 ' +
						(state.favs.includes(user.id) ? 'text-red-400' : 'text-slate-400')
					}
					onClick={e => {
						e.preventDefault()
						dispatch({ type: 'SWITCH_FAV', payload: user.id })
					}}
				>
					{state.favs.includes(user.id) ? (
						<FontAwesomeIcon icon={solidHeart} />
					) : (
						<FontAwesomeIcon icon={regularHeart} />
					)}
				</div>
			</div>
		</Link>
	)
}

export default Card
