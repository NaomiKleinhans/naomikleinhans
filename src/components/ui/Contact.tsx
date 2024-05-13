import React, { useEffect, useRef } from 'react'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'
import { WhatsappIcon } from '../SvgIcons/WhatsappIcon'
import Link from 'next/link'
import { LinkedinIcon } from '../SvgIcons/LinkedinIcon'
import { EmailIcon } from '../SvgIcons/EmailIcon'

const Contact = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current

		if (!container) {
			return
		}
	}, [])

	const handleSendEmail = () => {
		const firstName = (
			document.getElementById('first-name') as HTMLInputElement
		).value
		const lastName = (document.getElementById('last-name') as HTMLInputElement)
			.value
		const email = (document.getElementById('email') as HTMLInputElement).value
		const message = (document.getElementById('message') as HTMLInputElement)
			.value

		const subject = `Contact Form Submission from ${firstName} ${lastName}`
		const body = `Message: ${message}`

		window.open(
			`mailto:naomikleinhans56@gmail.com?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`
		)
	}

	return (
		<div
			className='container mt-24 px-4 md:px-6 md:mx-10 lg:mx-10'
			ref={containerRef}
		>
			<div className='flex flex-col items-center justify-center text-center'>
				<div className='space-y-2'>
					<h2 className='lg:text-6xl md:text-4xl text-center mx-4 sm:text-4xl font-bold sm:mb-2  text-themeColorMain'>
						Contact Me
					</h2>
				</div>
			</div>
			<div className='text-textColor sm:space-y-2 md:space-y-3 lg:space-y-2'>
				<div className='sm:hidden grid grid-cols-2 gap-4 '>
					<div className='sm:space-y-2 md:space-y-3 lg:space-y-4'>
						<Input
							id='first-name'
							placeholder='Enter your first name'
							// inputLabel='First name'
						/>
					</div>
					<div className='sm:space-y-2 md:space-y-3 lg:space-y-4'>
						<Input
							id='last-name'
							placeholder='Enter your last name'
							// inputLabel='Last name'
						/>
					</div>
				</div>

				<div className='sm:space-y-2 md:space-y-3 lg:space-y-4 lg:hidden md:hidden'>
					<Input
						id='first-name'
						placeholder='Enter your first name'
						// inputLabel='First name'
					/>
				</div>
				<div className='sm:space-y-2 md:space-y-3 lg:space-y-4 lg:hidden md:hidden'>
					<Input
						id='last-name'
						placeholder='Enter your last name'
						// inputLabel='Last name'
					/>
				</div>
				<div className='sm:space-y-2 md:space-y-3 lg:space-y-4'>
					<Input
						id='email'
						placeholder='Enter your email'
						type='email'
						// inputLabel='Email'
					/>
				</div>
				<div className='sm:space-y-2 md:space-y-3 lg:space-y-4'>
					<Textarea
						id='message'
						placeholder='Enter your message'
						rows={6}
						// textAreaLabel='Message'
					/>
				</div>
				<div className='flex lg:justify-between md:justify-between sm:gap-2'>
					<div className='sm:mt-4 md:mt-4 lg:mt-0 lg:justify-start md:justify-start bg-themeColorMain text-[#000] pt-4 rounded-lg'>
						<Button
					label='Send Message'
							onClick={handleSendEmail}
						/>
					</div>
					<div className='flex flex-row card bg-[#181818] lg:p-0 md:p-1 sm:py-0 sm:px-2 sm:mt-4 md:mt-4 lg:mt-0 rounded-lg lg:w-1/4 md:w-1/3 sm:w-1/2 border border-themeColorMain'>
						<div className='flex items-center lg:space-x-6 md:space-x-6 sm:space-x-2 mx-auto'>
							<Link href='https://wa.me/message/Q73H3Y7AOX7MK1'>
								<WhatsappIcon className='sm:hidden w-10 h-10' />
								<WhatsappIcon className='md:hidden lg:hidden w-7 h-7' />
							</Link>
							<Link href='https://linkedin.com/in/naomi-kleinhans-b917271ab'>
								<LinkedinIcon
									className='sm:hidden w-10 h-10'
									style={{ fill: '#5A75CE' }}
								/>
								<LinkedinIcon
									className='md:hidden lg:hidden w-7 h-7'
									style={{ fill: '#5A75CE' }}
								/>
							</Link>
							<Link href='mailto:naomikleinhans56@gmail.com'>
								<EmailIcon
									className='sm:hidden w-14 h-14 mt-4'
									style={{ fill: '#5A75CE' }}
								/>
								<EmailIcon
									className='md:hidden lg:hidden w-11 h-11 mt-4'
									style={{ fill: '#5A75CE' }}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
