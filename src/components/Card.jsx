const Card = ({ user }) => {
	return (
		<div className='flex flex-col gap-2 w-full max-w-[500px] p-4 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer'>
			<div className="flex items-center justify-start gap-2">
				<img
					src={user.avatar_url}
					alt=''
					className='rounded-full w-8'
				/>
				<span className='text-lg font-semibold'>{user.login}</span>
			</div>
		</div>
	)
}

export default Card
