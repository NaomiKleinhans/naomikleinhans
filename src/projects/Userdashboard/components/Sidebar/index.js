import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { DashboardIcon } from '../SvgIcons/DashboardIcon'
import { useState } from 'react'
import { SettingIcon } from '../SvgIcons/SettingIcon'
import { ProfileIcon } from '../SvgIcons'
import { HamburgerIcon } from '../SvgIcons/Hamburger'
import { LeftarrowIcon } from '../SvgIcons/LeftarrowIcon'

const Sidebar = () => {
	const router = useRouter()
	const [isSidebarOpen, setIsSidebarOpen] = useState(true)

	const sidebarLinks = [
		{
			href: '/',
			icon: <DashboardIcon className='w-6' />,
			label: 'User Dashboard'
		},
		{ href: '/profile', icon: <ProfileIcon />, label: 'Profile' },
		{ href: '/settings', icon: <SettingIcon />, label: 'Settings' }
	]
	const imageURL =
		'https://images.unsplash.com/photo-1708456697489-423b34cf2650?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	const user = {
		name: 'Jaydon Scott',
		avatar: imageURL
	}

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	const toggleSidebarWithHamburger = () => {
		setIsSidebarOpen(!isSidebarOpen)
	}

	return (
		<>
			{isSidebarOpen ? (
				<div
					className={`desktop:w-1/4 laptop:w-1/4 mobile:w-2/5 h-screen bg-gray-800 translate-x-0 transition-transform ease-in-out duration-300`}
				>
					<div className='flex justify-center pt-8 mb-8'>
						<Image
							src='/logo.jpg'
							alt='Your Alt Text'
							width={100}
							height={100}
						/>
					</div>
					<div
						className='absolute text-white cursor-pointer top-1 left-4'
						onClick={toggleSidebar}
					>
						<LeftarrowIcon />
					</div>
					{sidebarLinks.map((link, index) => (
						<div
							className='text-white '
							key={index}
						>
							<Link
								href={link.href}
								passHref
							>
								<div
									className={`flex items-center mobile:px-0 px-4 py-4 ${
										router.pathname === link.href ? 'bg-gray-900' : ''
									}`}
								>
									<span>{link.icon}</span> {/* Display icon */}
									<span className='ml-2'>{link.label}</span>
								</div>
							</Link>
						</div>
					))}
					<div className='flex items-center justify-center mt-32 mobile:mt-20'>
						<div className='flex items-center'>
							<Image
								src={user.avatar}
								alt={user.name}
								width={40}
								height={40}
								className='rounded-full'
							/>
							<span className='ml-3'>{user.name}</span>
						</div>
					</div>
				</div>
			) : (
				<div
					className={`fixed top-4 left-4 cursor-pointer`}
					onClick={toggleSidebarWithHamburger}
				>
					<HamburgerIcon />
				</div>
			)}
		</>
	)
}

export default Sidebar
