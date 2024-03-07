import React, { MouseEventHandler, CSSProperties, ReactNode } from 'react'

export interface ButtonProps {
	label?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
	style?: CSSProperties
	children?: ReactNode
	backgroundColor?: string
	color?: string
}

export const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	backgroundColor = '#EBE0BC',
	color = 'black'
}) => {
	return (
		<button
			className={`bg-${backgroundColor} text-${color} px-4 py-2 rounded-lg`}
			onClick={onClick}
		>
			{label ?? 'X'}
		</button>
	)
}
