import React, { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleHalfStroke,
	faEnvelope,
	faHome,
	faSignOut,
	faStar,
} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Tooltip } from 'flowbite-react'
import { ThemeContext } from '../contexts/Theme'
import { SessionContext } from '../contexts/Session'

const mainOptions = [
	{
		label: 'Inicio',
		icon: <FontAwesomeIcon icon={faHome} />,
		path: '/',
	},
	{
		label: 'Favoritos',
		icon: <FontAwesomeIcon icon={faStar} />,
		path: '/favs',
	},
	{
		label: 'Contacto',
		icon: <FontAwesomeIcon icon={faEnvelope} />,
		path: '/contact',
	},
]

const secondaryOptions = [
	{
		label: 'Cambiar tema',
		icon: <FontAwesomeIcon icon={faCircleHalfStroke} />,
		action: 'switchTheme',
	},
	{
		label: 'Cerrar sesión',
		icon: <FontAwesomeIcon icon={faSignOut} />,
		path: '/',
		action: 'signOut',
	},
]

const Sidebar = ({ size, menuOpen, className = '', handleBlockScroll, setMenuOpen }) => {
	const [isOpen, setIsModalExitOpen] = useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { dispatch: dispatchTheme } = useContext(ThemeContext)
	const { dispatch: dispatchSession } = useContext(SessionContext)

	const logout = () => {
		dispatchSession({ type: 'LOGOUT' })
		navigate('/login')
	}

	const ItemSidebar = ({ label, icon, path, action = 'link' }) => {
		const handleClick = action => {
			if (action === 'signOut') {
				setIsModalExitOpen(true)
			} else if (action === 'switchTheme') {
				dispatchTheme({ type: 'SWITCH' })
			}
			handleBlockScroll()
		}
		return (
			<li
				key={label}
				onClick={() => {
					handleClick(action)
				}}
				className='rounded-md overflow-hidden'
			>
				<Tooltip
					content={label}
					placement='right'
					className={'whitespace-nowrap duration-300 ' + (menuOpen ? 'hidden' : '')}
				>
					{action === 'link' ? (
						<Link
							to={path}
							className={
								'flex items-center h-10 px-3 py-2 gap-2 cursor-pointer rounded-md hover:bg-indigo-700 duration-300 ' +
								(path === pathname ? 'bg-indigo-600' : '') +
								(menuOpen ? ' w-[184px]' : ' w-full')
							}
						>
							<div className='text-slate-200 flex justify-center items-center '>{icon}</div>
							<span
								className={
									'text-white whitespace-nowrap select-none duration-300 origin-left ' +
									(menuOpen ? '' : 'hidden')
								}
							>
								{label}
							</span>
						</Link>
					) : (
						<div
							className={
								'flex items-center h-10 px-3 py-2 gap-2 cursor-pointer rounded-md hover:bg-indigo-700 duration-300 ' +
								(menuOpen ? ' w-[184px]' : ' w-full')
							}
						>
							<div className='text-slate-200 flex justify-center items-center '>{icon}</div>
							<span
								className={
									'text-white whitespace-nowrap select-none duration-300 origin-left ' +
									(menuOpen ? '' : 'hidden')
								}
							>
								{label}
							</span>
						</div>
					)}
				</Tooltip>
			</li>
		)
	}

	return (
		<div className='fixed top-16 left-0 z-20 flex sm:relative sm:h-auto sm:top-0'>
			<Transition show={isOpen} as={Fragment}>
				<Dialog
					open={isOpen}
					onClose={() => {
						setIsModalExitOpen(false)
					}}
					className='relative z-40'
				>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/60 backdrop-blur-sm' aria-hidden='true' />
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<div className='flex min-h-full items-center justify-center p-4 fixed inset-0'>
							<Dialog.Panel className='w-full max-w-sm rounded-lg bg-white p-5 flex flex-col gap-6 dark:bg-slate-700 dark:text-white'>
								<Dialog.Title className='text-2xl font-semibold'>Cerrar sesión</Dialog.Title>
								<Dialog.Description>Seguro que deseas cerrar sesión?</Dialog.Description>
								<div className='flex gap-2 w-full justify-between'>
									<Button
										onClick={() => {
											setIsModalExitOpen(false)
										}}
										fullWidth
										secondary
									>
										Cancelar
									</Button>
									<Button fullWidth onClick={logout}>
										Aceptar
									</Button>
								</div>
							</Dialog.Panel>
						</div>
					</Transition.Child>
				</Dialog>
			</Transition>
			<div
				style={{
					height:
						size.height === undefined ? `calc(100vh - 4rem)` : (size.height - 64).toString() + 'px',
				}}
				className={
					'sticky top-16 z-10 bg-[#1e1b4b] duration-300 ' +
					(menuOpen ? 'w-52 sm:overflow-hidden ' : 'w-0 overflow-hidden sm:w-16 sm:overflow-visible ') +
					className
				}
			>
				<ul className='w-full h-full flex flex-col p-3 gap-1 divide-y-[1px] divide-slate-500'>
					<div className='flex flex-col gap-1 flex-1'>
						{mainOptions.map(item => (
							<ItemSidebar {...item} key={item.label} />
						))}
					</div>
					<div className='flex flex-col gap-1 pt-3'>
						{secondaryOptions.map(item => (
							<ItemSidebar {...item} key={item.label} />
						))}
					</div>
				</ul>
			</div>
			<div
				onClick={() => {
					setMenuOpen(!menuOpen)
					handleBlockScroll()
				}}
				className={
					'bg-black fixed top-0 left-0 bottom-0 right-0 z-0 ' +
					(menuOpen ? 'opacity-60 flex sm:hidden' : 'opacity-0 hidden')
				}
			/>
		</div>
	)
}

export default Sidebar
