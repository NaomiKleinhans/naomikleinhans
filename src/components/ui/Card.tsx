import React, { forwardRef, HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	description?: string
	image?: ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ title, description, content, className, ...props }, ref) => (
		<div
			ref={ref}
			className={`card bg-themeColorMain rounded-lg p-3 sm:h-20 md:h-40 lg:h-60 ${className}`}
			{...props}
		>
			{(title || description) && (
				<div className={`card-body`}>
					{title && (
						<h3
							className={`card-title textColor sm:text-md md:text-lg lg:text-lg`}
						>
							{title}
						</h3>
					)}
					{description && (
						<div
							className={`card-description textColor sm:text-sm md:text-md lg:text-md`}
						>
							{description}
						</div>
					)}
				</div>
			)}
			{content && <div className={`card-content`}>{content}</div>}
		</div>
	)
)

Card.displayName = 'Card'

export default Card
