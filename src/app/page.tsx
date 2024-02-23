import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useClient } from 'react'

import { ChevronLeftIcon } from '../components/SvgIcons/ChevronLeftIcon'
import { ChevronRightIcon } from '../components/SvgIcons/ChevronRightIcon'

import MainNav from '../components/ui/MainNav'
import MobileMainNav from '../components/ui/MobileMainNav'
import Project from '../components/ui/Project'
import About from '../components/ui/About'
import Contact from '../components/ui/Contact'

const Home = () => {
	useClient()
	const [canScrollLeft, setCanScrollLeft] = useState(false)
	const [canScrollRight, setCanScrollRight] = useState(false)
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

	const handleArrowClick = (direction: 'left' | 'right') => {
		const container = containerRef.current

		if (!container) {
			return
		}

		const sections = container.querySelectorAll('section')
		let nextIndex = -1

		if (direction === 'right') {
			for (let i = 0; i < sections.length; i++) {
				const section = sections[i]
				const { left, width } = section.getBoundingClientRect()

				if (left > container.clientWidth / 2) {
					nextIndex = i
					break
				}
			}
		} else {
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i]
				const { left, width } = section.getBoundingClientRect()

				if (left < container.clientWidth / 2) {
					nextIndex = i
					break
				}
			}
		}

		if (nextIndex !== -1) {
			const nextSection = sections[nextIndex]
			container.scrollTo({
				left: nextSection.offsetLeft,
				behavior: 'smooth'
			})
		}
	}

	return (
		<div
			key='1'
			className='flex flex-col bg-[#181818] overflow-y-hidden no-scrolly'
		>
			<div className='sm:hidden z-50'>
				<MainNav />
			</div>
			<div className='md:hidden lg:hidden z-50'>
				<MobileMainNav />
			</div>

			<main>
				{canScrollLeft ? (
					<div className='w-10 h-10 absolute top-1/2 z-50 cursor-pointer scroll-left animate-pulse'>
						<ChevronLeftIcon onClick={() => handleScrollButtonClick('left')} />
					</div>
				) : (
					<></>
				)}
				{canScrollRight ? (
					<div className='w-10 h-10 absolute top-1/2 right-0 z-50 cursor-pointer animate-pulse'>
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
				>
					<section
						className='min-w-full lg:space-y-10 md:space-y-10 sm:space-y-10 bg-[#181818]'
						id='home'
					>
						{/* Content of the 'home' section */}
					</section>
					<section
						className='min-w-full flex justify-center bg-[#181818]'
						id='featured-projects'
					>
						<Project />
					</section>
					<section
						className='min-w-full flex justify-center bg-[#181818]'
						id='about'
					>
						<About />
					</section>
					<section
						className='min-w-full flex justify-center bg-[#181818]'
						id='contact'
					>
						<Contact />
					</section>
				</div>
			</main>
			<footer className='flex flex-col sm:flex-row w-full shrink-0 items-center px-4 md:px-6 border-t border-themeColorMain sm:py-2 py-1.5 bg-[#181818]'>
				<p className='sm:text-xxs md:text-sm lg:text-sm text-textColor'>
					© 2024 Frontend Developer. All rights reserved.
				</p>
				<nav className='sm:ml-auto flex gap-4 sm:gap-6 text-textColor'>
					<Link
						className='sm:text-xxs md:text-sm lg:text-sm hover:underline underline-offset-4'
						href='#'
					>
						Terms of Service
					</Link>
					<Link
						className='sm:text-xxs md:text-sm lg:text-sm hover:underline underline-offset-4'
						href='#'
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	)
}

export default Home
