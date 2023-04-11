const Input = ({ type = 'text', name, label, onChange, value, error, placeholder }) => {
	return (
		<div className='flex flex-col gap-1 items-start w-full'>
			<label htmlFor={name} className='text-sm'>
				{label}
			</label>
			<input
				className={
					'bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-lg w-full border autofill:!bg-red-400 ' +
					(!error ? 'border-slate-700 dark:border-slate-600' : 'border-red-400')
				}
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
			<span className='h-5 text-sm text-red-400'>{error}</span>
		</div>
	)
}

export default Input
