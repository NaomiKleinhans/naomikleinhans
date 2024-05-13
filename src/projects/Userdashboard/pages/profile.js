import { useState } from 'react'

const Profile = () => {
	const [name, setName] = useState('Jaydon Scott')
	const [email, setEmail] = useState('jaydon@example.com')
	const [bio, setBio] = useState('This is my bio')

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handleBioChange = (e) => {
		setBio(e.target.value)
	}

	return (
		<div className='fixed w-2/3 p-4 text-white bg-gray-900 rounded-lg shadow-md top-4 mobile:left-36 laptop:left-80 desktop:left-96'>
			<h1 className='mb-4 text-2xl font-semibold'>Edit Profile</h1>
			<form>
				<div className='mb-4'>
					<label className='block mb-2'>Name:</label>
					<input
						type='text'
						value={name}
						onChange={handleNameChange}
						className='w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:border-blue-500'
					/>
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Email:</label>
					<input
						type='email'
						value={email}
						onChange={handleEmailChange}
						className='w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:border-blue-500'
					/>
				</div>
				<div className='mb-4'>
					<label className='block mb-2'>Bio:</label>
					<textarea
						value={bio}
						onChange={handleBioChange}
						className='w-full px-4 py-2 bg-gray-800 border rounded-md focus:outline-none focus:border-blue-500'
					></textarea>
				</div>
				<button
					type='submit'
					className='px-4 py-2 text-white bg-gray-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
				>
					Save
				</button>
			</form>
		</div>
	)
}

export default Profile
