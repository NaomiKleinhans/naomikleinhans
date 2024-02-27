import React, { useEffect, useRef } from 'react'
import Card from './Card'
import Link from 'next/link'


const Project = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	return (
		<div className='container sm:mt-20 md:mt-24 lg:mt-24 px-4 md:px-6'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center'>
				<div className='space-y-2'>
					<h2 className='lg:text-5xl md:text-4xl text-center mx-4 sm:text-4xl font-bold mb-10 text-themeColorMain sm:mr-6'>
						Featured Projects
					</h2>
				</div>
			</div>
			<div className='grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 text-black'>
				<Card
					title='Project 1'
					description='	A description of the first project.'
				></Card>
				<Card
					title='Project 1'
					description='	A description of the first project.'
				></Card>
				<Card
					title='Project 1'
					description='	A description of the first project.'
				></Card>
			</div>
			<div className='text-center text-themeColorMain mt-14 text-sm'>
				If my projects catch your eye,
				<Link
					href='#contact'
					className='underline text-textColor mx-2'
				>
					reach out!
				</Link>
				<br/>
				<span className=''>Let us collaborate.</span>
			</div>
		</div>
	)
}

export default Project
