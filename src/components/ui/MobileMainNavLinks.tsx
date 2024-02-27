import Link from 'next/link'
import { useState } from 'react'

type Section = 'home' | 'projects' | 'about' | 'contact'

const MobileMainNavLinks = () => {
	const [projectsClicked, setProjectsClicked] = useState(false)
	const [activeSection, setActiveSection] = useState<Section | null>(null)
	const handleSectionClick = (section: Section) => {
		setActiveSection(section)
	}

	return (
		<nav className='fixed p-4 right-0 flex flex-col rounded-lg bg-[#010101] space-y-10 px-10 my-1 mx-2 z-50'>
			<Link href='#projects'>
				<div
					className={`text-xl font-medium ${
						activeSection === 'projects' ? 'underline' : ''
					} underline-offset-4`}
					onClick={() => handleSectionClick('projects')}
				>
					Projects
				</div>
			</Link>
			<Link href='#about'>
				<div
					className={`text-xl font-medium ${
						activeSection === 'about' ? 'underline' : ''
					} underline-offset-4`}
					onClick={() => handleSectionClick('about')}
				>
					About
				</div>
			</Link>
			<Link href='#contact'>
				<div
					className={`text-xl font-medium ${
						activeSection === 'contact' ? 'underline' : ''
					} underline-offset-4`}
					onClick={() => handleSectionClick('contact')}
				>
					Contact
				</div>
			</Link>
		</nav>
	)
}

export default MobileMainNavLinks
