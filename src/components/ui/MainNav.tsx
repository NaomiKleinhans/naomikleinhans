import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

type Section = 'home' | 'projects' | 'about' | 'contact'

const MainNav = () => {
	const [activeSection, setActiveSection] = useState<Section | null>(null)

	const handleSectionClick = (section: Section) => {
		setActiveSection(section)
	}

	return (
		<header className='fixed w-full px-4 lg:px-6 h-20 flex justify-between space-x-4 bg-[#000] text-textColor sm:hidden z-50'>
			<div onClick={() => handleSectionClick('home')}>
				<Link href='#home'>
					<div className='flex items-center justify-start mt-4'>
						<div>
							<Image
								src='/logo.png'
								alt='Logo Image'
								width='250'
								height='250'
							/>
						</div>
						<span className='sr-only'>Frontend Developer</span>
					</div>
				</Link>
			</div>
			<nav className='ml-auto flex items-center gap-4 sm:gap-6 justify-end'>
				<div onClick={() => handleSectionClick('projects')}>
					<Link href='#featured-projects'>
						<div
							className={`text-xl font-medium ${
								activeSection === 'projects' ? 'underline' : ''
							} underline-offset-4`}
						>
							Projects
						</div>
					</Link>
				</div>
				<div onClick={() => handleSectionClick('about')}>
					<Link href='#about'>
						<div
							className={`text-xl font-medium ${
								activeSection === 'about' ? 'underline' : ''
							} underline-offset-4`}
						>
							About
						</div>
					</Link>
				</div>
				<div onClick={() => handleSectionClick('contact')}>
					<Link href='#contact'>
						<div
							className={`text-xl font-medium ${
								activeSection === 'contact' ? 'underline' : ''
							} underline-offset-4`}
						>
							Contact
						</div>
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default MainNav
