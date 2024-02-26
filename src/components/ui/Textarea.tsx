import * as React from 'react'

export interface TextareaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	placeholder?: string
	textAreaLabel?: string
}

const Textarea: React.FC<TextareaProps> = ({
	placeholder = 'Enter your message',
	textAreaLabel = '',
	...rest
}) => {
	return (
		<div>
			<label
				htmlFor={rest.id || 'comment'} // Use rest.id if provided, else fallback to 'comment'
				className='block text-sm font-medium leading-6 text-gray-900'
			>
				{textAreaLabel}
			</label>
			<div className='mt-2'>
				<textarea
					placeholder={placeholder}
					rows={rest.rows || 4} // Use rest.rows if provided, else fallback to 4
					name={rest.name || 'comment'} // Use rest.name if provided, else fallback to 'comment'
					id={rest.id || 'comment'} // Use rest.id if provided, else fallback to 'comment'
					className='block min-h-[100px] w-full rounded-md border-0 p-3 bg-compBg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					defaultValue={''}
					{...rest}
				/>
			</div>
		</div>
	)
}

export { Textarea }
