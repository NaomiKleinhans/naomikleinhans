import React, { MouseEventHandler, CSSProperties, ReactNode } from 'react'

export interface ButtonProps {
	label?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	style?: CSSProperties
	children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	style,
	children
}) => {
	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: '#5A75CE',
				color: 'black',
							padding: '10px 20px',
							borderRadius: '10px'
						}}
		>
			{label ?? 'X'}
		</button>
	)
}
