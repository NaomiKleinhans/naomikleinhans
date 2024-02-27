import React, { useEffect, useRef } from 'react'
import { Input } from './Input'
import { Textarea } from './Textarea'
import { Button } from './Button'

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
			<div className='text-textColor'>
				<div className='sm:hidden grid grid-cols-2 gap-4 '>
					<div className='space-y-2'>
						<Input
							id='first-name'
							placeholder='Enter your first name'
							// inputLabel='First name'
						/>
					</div>
					<div className='space-y-2'>
						<Input
							id='last-name'
							placeholder='Enter your last name'
							// inputLabel='Last name'
						/>
					</div>
				</div>

				<div className='space-y-2 lg:hidden md:hidden'>
					<Input
						id='first-name'
						placeholder='Enter your first name'
						// inputLabel='First name'
					/>
				</div>
				<div className='space-y-2'>
					<Input
						id='last-name'
						placeholder='Enter your last name'
						// inputLabel='Last name'
					/>
				</div>
				<div className='space-y-2'>
					<Input
						id='email'
						placeholder='Enter your email'
						type='email'
						// inputLabel='Email'
					/>
				</div>
				<div className='space-y-2'>
					<Textarea
						id='message'
						placeholder='Enter your message'
						rows={6}
						// textAreaLabel='Message'
					/>
				</div>
				<div className='mt-4'>
					<Button
						label='Send Message'
						onClick={handleSendEmail}
					/>
				</div>
			</div>
		</div>
	)
}

export default Contact
