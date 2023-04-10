import React from 'react'

const Button = ({ secondary, children, type = 'button', onClick }) => {
	return (
		<>
			{!secondary ? (
				<button
					type={type}
					className='bg-emerald-500 text-white px-8 py-2 rounded-md whitespace-nowrap w-full hover:bg-emerald-600'
					onClick={onClick}
				>
					{children}
				</button>
			) : (
				<button
					type={type}
					className='bg-indigo-500 text-white px-8 py-2 rounded-md whitespace-nowrap w-full hover:bg-indigo-600'
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	)
}

export default Button
