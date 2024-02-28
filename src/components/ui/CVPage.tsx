import React from 'react'
import { Button } from './Button'

const CVPage = () => {
	const downloadCV = () => {
		// Construct the URL of the CV file
		const cvUrl = '/cv.pdf'

		// Create a link element
		const link = document.createElement('a')
		link.href = cvUrl

		// Set the download attribute with the desired file name
		link.download = 'naomi_cv.pdf'

		// Append the link to the body
		document.body.appendChild(link)

		// Programmatically click the link to trigger the download
		link.click()

		// Remove the link from the body
		document.body.removeChild(link)
	}

	return (
		<div className='flex justify-center lg:mt-10 md:pt-8 sm:pt-4'>
			<Button
				label='Download CV'
				onClick={downloadCV}
			/>
		</div>
	)
}

export default CVPage
