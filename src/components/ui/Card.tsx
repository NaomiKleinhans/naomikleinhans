import React, { forwardRef, HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ children, className, ...props }, ref) => (
		<div
			ref={ref}
			className={`card bg-themeColorMain rounded-lg p-3 ${className}`}
			{...props}
		>
			{children}
		</div>
	)
)
Card.displayName = 'Card'

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
	({ children, className, ...props }, ref) => (
		<div
			ref={ref}
			className={`card-header textColor ${className}`}
			{...props}
		>
			{children}
		</div>
	)
)
CardHeader.displayName = 'CardHeader'

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
	children?: React.ReactNode
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
	({ children, className, ...props }, ref) => (
		<h3
			ref={ref}
			className={`card-title textColor ${className}`}
			{...props}
		>
			{children}
		</h3>
	)
)
CardTitle.displayName = 'CardTitle'

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
	children?: React.ReactNode
}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
	({ children, className, ...props }, ref) => (
		<p
			ref={ref}
			className={`card-description textColor ${className}`}
			{...props}
		>
			{children}
		</p>
	)
)
CardDescription.displayName = 'CardDescription'

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
	({ children, className, ...props }, ref) => (
		<div
			ref={ref}
			className={`card-content ${className}`}
			{...props}
		>
			{children}
		</div>
	)
)
CardContent.displayName = 'CardContent'

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
	children?: React.ReactNode
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
	({ children, className, ...props }, ref) => (
		<div
			ref={ref}
			className={`card-footer textColor ${className}`}
			{...props}
		>
			{children}
		</div>
	)
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
