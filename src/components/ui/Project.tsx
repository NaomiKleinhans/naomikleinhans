import React, { useEffect, useRef } from 'react'
import Card from './Card'
import Link from 'next/link'
import Image from 'next/image'

const Project = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	return (
		<div className='container sm:mt-20 md:mt-24 lg:mt-24 px-4 md:px-6 md:mx-10 lg:mx-10'>
			<div className='flex flex-col items-center justify-center space-y-4 text-center '>
				<div className='space-y-2 '>
					<h2 className='lg:text-6xl md:text-4xl  text-center mx-4 sm:text-4xl font-bold mb-10 text-themeColorMain sm:mr-6'>
						My Projects
					</h2>
				</div>
			</div>
			<div className='grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 text-black'>
				<Card
					title='SPENDWISE'
					description='An Expense tracker project that will help to manage your expenses easier.'
					liveSiteLink='https://expense-tracker-1zn2.vercel.app/'
					githubLink='https://github.com/NaomiKleinhans/ExpenseTracker.git'
					image={
						<Image
							src='/project1.png'
							alt='Project 1'
							width='400'
							height='400'
						/>
					}
				></Card>
				{/* <Card
					title='Project 1'
					description='A description of the first project.'
					liveSiteLink='https://example.com'
					githubLink='https://github.com/example/project1'
					image={
						<Image
							src='/project2.png'
							alt='Project 2'
							width='200'
							height='200'
						/>
					}
				></Card>
				<Card
					title='Project 2'
					description='A description of the second project.'
					liveSiteLink='https://example.com'
					githubLink='https://github.com/example/project2'
					image={
						<Image
							src='/project2.png'
							alt='Project 2'
							width='200'
							height='200'
						/>
					}
				></Card> */}
			</div>
			<div className='text-center text-themeColorMain sm:mt-6 md:mt-1 lg:mt-16 sm:text-sm md:text-md lg:text-md'>
				If my projects catch your eye,
				<Link
					href='#contact'
					className='underline text-textColor mx-2'
				>
					reach out!
				</Link>
				<br />
				<span className=''>Let us collaborate.</span>
			</div>
		</div>
	)
}

export default Project
