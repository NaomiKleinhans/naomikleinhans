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
						Greetings! I am a front-end developer passionate about crafting
						immersive digital experiences using cutting-edge technologies like
						HTML, CSS, and JavaScript, particularly within the Next.js
						framework. With Next.js, I specialize in transforming design
						concepts into fully functional websites and applications that
						captivate and inspire users. Collaboration is at the core of my
						process. I meticulously follow designs created by designers,
						meticulously translating them into seamless front-end experiences.
						By closely adhering to design principles, I ensure that the final
						product aligns perfectly with the envisioned user experience.
						Continual learning and staying abreast of industry trends are
						fundamental to my approach. This commitment ensures that I deliver
						forward-thinking solutions that push the boundaries of what is
						possible in front-end development. Thank you for exploring my
						portfolio! I am thrilled about the opportunity to collaborate and
						bring innovative ideas to life. Let us collaborate and create
						something remarkable together! Beyond my front-end development
						expertise, I hold a Bachelor of Science in Botany and Plant
						Pathology (2020) and an Honours degree in Plant Health Ecology
						(2021). With a year of internship experience in software
						development, I am dedicated to contributing novel solutions in this
						ever-evolving landscape, leveraging my unique blend of biological
						expertise.
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
