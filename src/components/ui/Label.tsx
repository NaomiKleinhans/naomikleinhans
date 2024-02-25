import React, { ReactNode } from 'react'

// Define props interface for the Label component
interface LabelProps {
	htmlFor: string
	children: ReactNode
}

// Define the Label component
const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
	return <label htmlFor={htmlFor}>{children}</label>
}

export default Label
