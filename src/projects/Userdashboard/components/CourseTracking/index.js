import React from 'react'

const User = ({ name, mark, result }) => (
	<tr className='even:bg-gray-50'>
		<td className='py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap mobile:pl-3'>
			{name}
		</td>
		<td className='px-3 py-4 text-sm text-gray-500 whitespace-nowrap'>
			{mark}
		</td>
		<td className='px-3 py-4 text-sm text-gray-500 whitespace-nowrap'>
			{result}
		</td>
		{/* <td className='px-3 py-4 text-sm text-gray-500 whitespace-nowrap'>
        {role}
    </td> */}
		<td className='relative py-4 pl-3 pr-4 text-sm font-medium text-right whitespace-nowrap mobile:pr-3'>
			<a
				href='#'
				className='text-indigo-600 hover:text-indigo-900'
			>
				Retry Quiz
			</a>
		</td>
	</tr>
)

const Table = ({ courses }) => (
	<table className='min-w-full divide-y divide-gray-100'>
		<thead>
			<tr>
				<th
					scope='col'
					className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white mobile:pl-3'
				>
					Course Name
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-white'
				>
					Mark
				</th>
				<th
					scope='col'
					className='px-3 py-3.5 text-left text-sm font-semibold text-white'
				>
					Result
				</th>
				{/* <th
          scope='col'
          className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
        >
          Role
        </th> */}
				<th
					scope='col'
					className='relative py-3.5 pl-3 pr-4 mobile:pr-3'
				>
					<span className='sr-only'>Retry Quiz</span>
				</th>
			</tr>
		</thead>
		{Array.isArray(courses) && courses.length > 0 ? (
			<tbody className='bg-white'>
				{courses.map((course, index) => (
					<User
						key={index}
						name={course.name}
						mark={course.mark}
						result={course.result}
					/>
				))}
			</tbody>
		) : (
			<tbody className='bg-white'>
				<tr>
					<td colSpan='5'>No courses found.</td>
				</tr>
			</tbody>
		)}
	</table>
)

const CourseTracking = () => {
	const users = [
		{
			name: 'Jaydon Scott',
			courses: [
				{
					name: 'Herbal Remedies 101',
					mark: '53',
					result: 'pass'
				},
				{
					name: 'Survival Tactics',
					mark: '79',
					result: 'pass'
				}
				// Add more courses as needed
			]
		}
	]

	return (
		<div className='px-4 pt-4 bg-gray-900 rounded-lg'>
			<div className='mobile:flex mobile:items-center'>
				<div className='mobile:flex-auto'>
					<h1 className='text-base font-semibold leading-6 text-white'>
						Courses Completed by {users[0].name}
					</h1>
					<p className='mt-2 text-sm text-gray-400'>
						Find all your completed courses and results here.
					</p>
				</div>
			</div>
			<div className='flow-root'>
				<div className='-mx-4 -my-2 overflow-x-auto mobile:-mx-6 desktop:-mx-8'>
					<div className='inline-block min-w-full py-2 align-middle mobile:px-6 desktop:px-8'>
						<Table courses={users[0].courses} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseTracking
