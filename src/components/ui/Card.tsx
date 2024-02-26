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
			className={`card bg-themeColorMain rounded-lg p-3 ${className}`}
			{...props}
		>
			{(title || description) && (
				<div className={`card-body`}>
					{title && <h3 className={`card-title textColor`}>{title}</h3>}
					{description && (
						<div className={`card-description textColor`}>{description}</div>
					)}
				</div>
			)}
			{content && <div className={`card-content`}>{content}</div>}
		</div>
	)
)

Card.displayName = 'Card'

export default Card
