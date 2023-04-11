import { useState } from 'react'
import Navbar from '../components/Navbar'
import useWindowSize from '../hooks/useWindowsSize'
import useScrollBlock from '../hooks/useScrollBlock'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const windowSize = useWindowSize()

	const [blockScroll, allowScroll] = useScrollBlock()

	const handleBlockScroll = () => {
		if (windowSize.width !== undefined && windowSize.width < 640) {
			if (menuOpen) {
				allowScroll()
			} else {
				blockScroll()
			}
		}
	}

	return (
		<div className='min-h-screen w-full flex flex-1 items-center flex-col dark:text-white duration-200'>
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleBlockScroll={handleBlockScroll} />
			<div className='flex flex-1 w-full relative'>
				<Sidebar
					setMenuOpen={setMenuOpen}
					menuOpen={menuOpen}
					size={windowSize}
					handleBlockScroll={handleBlockScroll}
				/>
				<div className='flex flex-col flex-1'>
					<div className='flex flex-col flex-1 w-full items-center bg-slate-100 mt-16 dark:bg-slate-800 duration:200'>{children}</div>
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default MainLayout
