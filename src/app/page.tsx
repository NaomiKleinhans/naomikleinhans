'use client'
import { useEffect, useRef, useState } from 'react'
import MainNav from '../components/ui/MainNav'
import MobileMainNav from '../components/ui/MobileMainNav'
import Image from 'next/image'
import { ChevronRightIcon } from '../components/SvgIcons/ChevronRightIcon'
import { ChevronLeftIcon } from '../components/SvgIcons/ChevronLeftIcon'
import Contact from '../components/ui/Contact'
import Project from '../components/ui/Project'
import About from '../components/ui/About'
import Link from 'next/link'

const Home = () => {
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)
	const [activeSection, setActiveSection] = useState('home')
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}

		const handleScroll = () => {
			setCanScrollLeft(container.scrollLeft > 0)
			setCanScrollRight(
				container.scrollLeft < container.scrollWidth - container.clientWidth
			)

			// Determine active section based on scroll position
			const sections = ['home', 'projects', 'about', 'contact']
			const scrollPosition = container.scrollLeft + container.clientWidth / 2

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const { offsetLeft, offsetWidth } = element
					if (
						scrollPosition >= offsetLeft &&
						scrollPosition <= offsetLeft + offsetWidth
					) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		container.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => {
			container.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleScrollButtonClick = (direction: string) => {
		const container = containerRef.current

		if (!container) {
			return
		}

		const newScrollLeft =
			direction === 'right'
				? container.scrollLeft + container.clientWidth
				: container.scrollLeft - container.clientWidth

		container.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
	}
	const handleSectionClick = (section: string) => {
		setActiveSection(section) // Update the active section when clicked
	}

	return (
		<>
			<header
				key='1'
				className='flex flex-col overflow-y-hidden'
			>
				<MainNav
					activeSection={activeSection}
					onSectionClick={handleSectionClick}
				/>
				<MobileMainNav />
			</header>
			<main className='flex flex-col overflow-y-hidden'>
				{canScrollLeft ? (
					<div className='w-14 h-14 absolute top-1/2 lg:top-1/2 md:top-1/2 sm:top-24 z-40 cursor-pointer scroll-left'>
						<ChevronLeftIcon onClick={() => handleScrollButtonClick('left')} />
					</div>
				) : (
					<></>
				)}
				{canScrollRight ? (
					<div className='w-14 h-14 absolute lg:top-1/2 md:top-1/2 sm:top-24 right-0 z-40 cursor-pointer '>
						<ChevronRightIcon
							onClick={() => handleScrollButtonClick('right')}
						/>
					</div>
				) : (
					<></>
				)}

				<div
					className='carousel-container overflow-x-scroll h-content flex no-scrolly'
					ref={containerRef}
					style={{
						backgroundImage: `url('/background1.gif')`,
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				>
					<section
						className='min-w-full lg:space-y-6 md:space-y-8 sm:space-y-6 '
						id='home'
					>
						<h1 className='sm:mt-20 md:mt-24 lg:mt-24 sm:mb-6 lg:text-6xl md:text-4xl text-center mx-4 sm:text-4xl font-bold text-themeColorMain sm:mr-10'>
							Welcome to my Portfolio
						</h1>
						<div className='text-center text-textColor lg:text-2xl md:text-xl sm:text-md mx-4 sm:pb-6 md:pb-6 lg:pb-6'>
							I am a frontend developer with a passion for creating beautiful
							and functional web applications.
						</div>
						<div className='sm:hidden'>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									height: '30vh',
									width: 'auto'
								}}
							>
								<div
									style={{
										border: '6px solid #5A75CE',
										borderRadius: '50%',
										overflow: 'hidden'
									}}
								>
									<Image
										src='/profile-pic.png'
										alt='Profile Picture'
										className='transition transform hover:scale-125 focus:scale-125 cursor-pointer'
										width='250'
										height='250'
									/>
								</div>
							</div>
						</div>
						<div className='lg:hidden md:hidden mt-16'>
							<div
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									height: '30vh',
									width: 'auto'
								}}
							>
								<div
									style={{
										border: '6px solid #5A75CE',
										borderRadius: '50%',
										overflow: 'hidden'
									}}
								>
									<Image
										src='/profile-pic.png'
										alt='Profile Picture'
										className='transition transform hover:scale-125 focus:scale-125 cursor-pointer'
										width='200'
										height='200'
									/>
								</div>
							</div>
						</div>
						<div className='text-center text-themeColorMain lg:text-lg md:text-md sm:text-xs font-semibold lg:py-16 md:py-12 sm:py-10'>
							Explore my
							<Link
								href='#projects'
								className='button underline text-textColor font-semibold rounded-md mx-2'
							>
								Projects
							</Link>{' '}
						</div>
					</section>
					<section
						className='min-w-full flex justify-center '
						id='projects'
					>
						<Project />
					</section>
					<section
						className='min-w-full flex justify-center '
						id='about'
					>
						<About />
					</section>
					<section
						className='min-w-full flex justify-center '
						id='contact'
					>
						<Contact />
					</section>
				</div>
			</main>
			<footer className='flex justify-between border-t border-themeColorMain py-3 sm:py-2 sm:text-xxs '>
				<div className='text-themeColorMain justify-start mx-auto'>
					© 2024 Frontend Developer. All rights reserved.
				</div>
				<nav className='mx-auto flex gap-4 text-textColor justify-end'>
					<Link href='#'>
						<span className='hover:underline cursor-pointer'>
							Terms of Service
						</span>
					</Link>
					<Link href='#'>
						<span className='hover:underline cursor-pointer'>Privacy</span>
					</Link>
				</nav>
			</footer>
		</>
	)
}

export default Home
