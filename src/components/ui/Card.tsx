import React, { forwardRef, HTMLAttributes, ReactNode, useState } from 'react'
import { Button } from './Button'
import Image from 'next/image'
import Link from 'next/link'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	description?: string
	image?: ReactNode
	liveSiteLink?: string
	githubLink?: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			title,
			description,
			image,
			liveSiteLink,
			githubLink,
			className,
			...props
		},
		ref
	) => {
		const [isFlipped, setIsFlipped] = useState(false)
		const [isHovered, setIsHovered] = useState(false)

		const handleHover = () => {
			setIsHovered(true)
		}

		const handleUnhover = () => {
			setIsHovered(false)
		}

		const handleCardClick = () => {
			setIsFlipped(!isFlipped)
		}

		const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
			event.stopPropagation()
		}

		const openLinkInNewTab = (link: string) => {
			window.open(link, '_blank')
		}

		return (
			<div
				ref={ref}
				className={`card bg-themeColorMain rounded-lg p-3 sm:h-72 md:h-60 lg:h-60 cursor-pointer ${className}`}
				{...props}
				onClick={handleCardClick}
			>
				<button className='bg-textColor text-black text-xs float-right h-8 -mt-2 text-center rounded-full px-2 py-1 m-0.5'>
					{isFlipped ? 'Go back' : 'Image'}
				</button>
				<div
					className={`card-content ${isFlipped ? '' : 'hidden'}`}
					onClick={(e) => e.stopPropagation()}
				>
					{image && (
						<div
							className={`image ${
								isFlipped ? 'enlarged' : ''
							}`}
							onMouseEnter={handleHover}
							onMouseLeave={handleUnhover}
						>
							{image}
						</div>
					)}
				</div>

				<div
					className={`card-body space-y-4 ${isFlipped ? 'hidden' : ''}`}
					onClick={handleCardClick}
				>
					{title && (
						<h3
							className={`card-title text-black font-bold sm:text-md md:text-xl lg:text-3xl`}
						>
							{title}
						</h3>
					)}
					{description && (
						<div
							className={`card-description text-black sm:text-sm md:text-md lg:text-lg`}
						>
							{description}
						</div>
					)}
					<div className='flex flex-row gap-6 mt-4 justify-center'>
						{liveSiteLink && (
							<div onClick={() => openLinkInNewTab(liveSiteLink)}>
								{/* <Link href={liveSiteLink} passHref> */}
								<div>
									<Image
										src='/web.png'
										alt='Live site link'
										width='50'
										height='50'
									/>
								</div>
								{/* </Link> */}
							</div>
						)}

						{githubLink && (
							<div onClick={() => openLinkInNewTab(githubLink)}>
								<Link
									href={githubLink}
									passHref
								>
									<div>
										<Image
											src='/github.png'
											alt='Github link'
											width={50}
											height={50}
										/>
									</div>
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		)
	}
)

Card.displayName = 'Card'

export default Card
