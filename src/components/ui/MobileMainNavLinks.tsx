import Link from 'next/link'
import { useState } from 'react'

type Section = 'home' | 'projects' | 'about' | 'contact'

const MobileMainNavLinks = () => {
	const [projectsClicked, setProjectsClicked] = useState(false)
	const [activeSection, setActiveSection] = useState<Section | null>(null)

	const handleProjectsClick = () => {
		setProjectsClicked(true)
	}

	const handleSectionClick = (section: Section) => {
		setActiveSection(section)
	}

	return (
		<>
			<nav className='fixed p-4 right-0 flex flex-col rounded-lg bg-[#101010] space-y-10 px-10 my-1 mx-2'>
				<a href='#featured-projects'>
					<div
						className={`text-xl font-medium ${
							activeSection === 'projects' ? 'underline' : ''
						} underline-offset-4`}
						onClick={() => handleSectionClick('projects')}
					>
						Projects
					</div>
				</a>
				<a href='#about'>
					<div
						className={`text-xl font-medium ${
							activeSection === 'about' ? 'underline' : ''
						} underline-offset-4`}
						onClick={() => handleSectionClick('about')}
					>
						About
					</div>
				</a>
				<a href='#contact'>
					<div
						className={`text-xl font-medium ${
							activeSection === 'contact' ? 'underline' : ''
						} underline-offset-4`}
						onClick={() => handleSectionClick('contact')}
					>
						Contact
					</div>
				</a>
			</nav>
		</>
	)
}

export default MobileMainNavLinks
