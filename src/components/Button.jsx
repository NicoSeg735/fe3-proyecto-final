const Button = ({ secondary, children, type = 'button', onClick }) => {
	return (
		<>
			{!secondary ? (
				<button
					type={type}
					className='bg-emerald-600 px-8 py-2 rounded-md whitespace-nowrap w-full hover:bg-emerald-700'
					onClick={onClick}
				>
					{children}
				</button>
			) : (
				<button
					type={type}
					className='bg-indigo-600 px-8 py-2 rounded-md whitespace-nowrap w-full hover:bg-indigo-700'
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	)
}

export default Button
