import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SessionContext } from '../contexts/Session'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth, faBars } from '@fortawesome/free-solid-svg-icons'
import { getInitials } from '../utils/getInitials'

const Navbar = ({ setMenuOpen, menuOpen, handleBlockScroll, username }) => {
	const { state } = useContext(SessionContext)
	const initials = getInitials(state.user)

	const handleMenuOpen = () => {
		handleBlockScroll()
		setMenuOpen(!menuOpen)
	}

	const handleGoHome = () => {
		handleBlockScroll()
		setMenuOpen(false)
	}

	return (
		<nav className='fixed top-0 z-40 left-0 right-0 select-none'>
			<div className='h-16 flex w-full justify-between text-slate-800 bg-white items-center gap-2 py-4 px-5 shadow-lg'>
				<div className='flex justify-between items-center gap-2 w-full relative'>
					<div
						onClick={handleMenuOpen}
						className='relative duration-200 hover:bg-slate-200 w-8 h-8 p-[4px] rounded-full flex justify-center items-center cursor-pointer'
					>
						<FontAwesomeIcon icon={faBars} />
					</div>
					<div onClick={handleGoHome} className='p-1'>
						<Link to='/' className='flex justify-center items-center py-2 px-4'>
							<FontAwesomeIcon icon={faTooth} className='text-indigo-600' />
						</Link>
					</div>
					<div className='w-8 h-8 flex items-center justify-center rounded-full p-3 border-[1.5px] border-slate-800'>
						<span className='text-xs font-medium select-none'>{initials}</span>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
