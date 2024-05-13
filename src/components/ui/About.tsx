import React, { useEffect, useRef } from 'react'
import CVPage from './CVPage'

const About = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	return (
		<div className='container mt-24 px-4 md:px-6 md:mx-10 lg:mx-10'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<div className='space-y-2'>
					<h2 className='lg:text-6xl md:text-4xl  text-center mx-4 sm:text-4xl font-bold mb-2 text-themeColorMain'>
						About Me
					</h2>
					<div className='text-center text-textColor lg:text-xl md:text-lg sm:text-sm mx-4'>
						Hello! I'm a front-end developer passionate about creating immersive
						digital experiences using HTML, CSS, and JavaScript, particularly
						with Next.js. I specialize in turning design concepts into
						functional websites and apps that captivate users. I closely follow
						design principles to ensure a seamless user experience. Continual
						learning and staying updated on industry trends are crucial to my
						approach. Thank you for checking out my portfolio! Let's collaborate
						and bring innovative ideas to life! Besides front-end development, I
						have a Bachelor of Science in Botany and Plant Pathology (2020) and
						an Honours degree in Plant Health Ecology (2021). With a year of
						internship experience in software development, I'm dedicated to
						contributing unique solutions in this ever-evolving field.
					</div>
				</div>
			</div>
			<CVPage />
			<div className='mt-1 text-md text-themeColorMain text-center'>
				Feel free to download my CV!
			</div>
		</div>
	)
}

export default About
