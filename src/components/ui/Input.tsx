import * as React from 'react'

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	// inputLabel: string
}

const Input: React.FC<InputProps> = ({ placeholder, ...rest }) => {
	return (
		<div>
			{/* <label
				htmlFor='comment'
				className='block text-sm font-medium leading-6 text-gray-900'
			>
				{inputLabel}
			</label> */}
			<div className='mt-2 '>
				<input
					placeholder={placeholder}
					name='comment'
					id='comment'
					className='block w-full rounded-md border-0 p-3 bg-compBg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					defaultValue={''}
					{...rest}
				/>
			</div>
		</div>
	)
}

export { Input }
