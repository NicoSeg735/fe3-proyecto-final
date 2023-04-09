import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Card = ({ user }) => {
	return (
		<Link
			to={'/dentist/' + user.id}
			className='flex flex-col gap-2 w-full max-w-[500px] p-4 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer'
		>
			<div className='flex items-center justify-start gap-2'>
				<img
					src='/img/doctor.jpg'
					alt=''
					className='rounded-full w-8'
				/>
				<span className='text-lg font-semibold'>{user.name}</span>
			</div>
		</Link>
	)
}

export default Card
