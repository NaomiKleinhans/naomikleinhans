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
						Greetings! I am a front-end developer with expertise in crafting
						captivating digital experiences using technologies like HTML, CSS,
						and JavaScript, especially within the Next.js framework. With
						Next.js, I transform designs into fully functional websites and
						applications that captivate and inspire users. Collaboration is
						central to my approach—I work closely with designers to understand
						objectives and deliver outcomes that exceed expectations. Continual
						learning and staying abreast of industry trends are key priorities
						for me, ensuring that I deliver cutting-edge solutions. Thank you
						for visiting my portfolio! I am excited about the possibility of
						collaborating to bring innovative ideas to life. Let us team up and
						create something extraordinary together!
					</div>
				</div>
			</div>
			<CVPage/>
		</div>
	)
}

export default About
