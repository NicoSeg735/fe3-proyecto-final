import Navbar from '../components/Navbar'

const LoginLayout = ({ children }) => {
	return (
		<div className='bg-slate-50 min-h-screen w-full flex flex-1 items-center flex-col dark:text-white duration-500 dark:bg-slate-900'>
			<Navbar />
			{children}
		</div>
	)
}

export default LoginLayout
