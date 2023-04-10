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
			className='flex flex-col gap-2 w-full max-w-[500px] p-4 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer'
			to={'/dentist/' + user.id}
		>
			<div className='flex items-center justify-between'>
				<div className='flex items-center justify-start gap-2'>
					<img
						src='/img/doctor.jpg'
						alt=''
						className='rounded-full w-8'
					/>
					<span className='text-lg font-semibold'>{user.name}</span>
				</div>
				<div
					className={
						'flex w-fit p-1 duration-200 ' +
						(state.favs.includes(user.id)
							? 'text-red-400'
							: 'text-slate-400')
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
