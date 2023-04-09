import Login from '../pages/Login'
import Home from '../pages/Home'
import Dentist from '../pages/Dentist'
import Contact from '../pages/Contact'

export const routes = [
	{
		id: 1,
		path: '/',
		Component: Home
	},
	{
		id: 2,
		path: '/dentist/:id',
		Component: Dentist
	},
	{
		id: 3,
		path: '/contact',
		Component: Contact
	},
]

export { Login }
