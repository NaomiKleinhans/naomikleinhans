import { useState } from 'react'

const Settings = () => {
	const [theme, setTheme] = useState('light')
	const [language, setLanguage] = useState('en')
	const [notificationSettings, setNotificationSettings] = useState({
		email: true,
		push: true,
		inApp: true
	})
	const [privacySettings, setPrivacySettings] = useState({
		profileVisibility: 'public',
		dataSharing: true
	})
	const [accountDetails, setAccountDetails] = useState({
		email: 'user@example.com',
		password: '********'
	})
	const [accessibilitySettings, setAccessibilitySettings] = useState({
		fontSize: 'medium',
		highContrast: false,
		screenReader: false
	})

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	const handleLanguageChange = (e) => {
		setLanguage(e.target.value)
	}

	const handleNotificationChange = (type) => {
		setNotificationSettings({
			...notificationSettings,
			[type]: !notificationSettings[type]
		})
	}

	const handlePrivacyChange = (setting, value) => {
		setPrivacySettings({
			...privacySettings,
			[setting]: value
		})
	}

	const handleFontSizeChange = (e) => {
		setAccessibilitySettings({
			...accessibilitySettings,
			fontSize: e.target.value
		})
	}

	const handleToggle = (setting) => {
		setAccessibilitySettings({
			...accessibilitySettings,
			[setting]: !accessibilitySettings[setting]
		})
	}

	return (
		<div className='fixed w-2/3 p-4 text-white bg-gray-900 rounded-lg shadow-md top-4 mobile:left-36 laptop:left-80 desktop:left-96 '>
			<h1 className='mb-4 text-2xl font-semibold'>Settings</h1>
			<div className='mb-4'>
				<span className='block mb-2'>Theme:</span>
				<div>
					<button
						className={`px-4 py-2 rounded-md focus:outline-none ${
							theme === 'light'
								? 'bg-blue-500 text-white'
								: 'bg-gray-200 text-gray-700'
						}`}
						onClick={toggleTheme}
					>
						Light
					</button>
					<button
						className={`px-4 py-2 ml-2 rounded-md focus:outline-none ${
							theme === 'dark'
								? 'bg-blue-500 text-white'
								: 'bg-gray-200 text-gray-700'
						}`}
						onClick={toggleTheme}
					>
						Dark
					</button>
				</div>
			</div>
			{/* <div className='mb-4'>
				<span className='block mb-2'>Language:</span>
				<select
					value={language}
					onChange={handleLanguageChange}
					className='px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
				>
					<option value='en'>English</option>
					<option value='fr'>French</option>
					<option value='es'>Spanish</option>
				</select>
			</div> */}
			<div className='mb-4'>
				<span className='block mb-2'>Notification Settings:</span>
				<div>
					<label className='flex items-center mb-2'>
						<input
							type='checkbox'
							checked={notificationSettings.email}
							onChange={() => handleNotificationChange('email')}
							className='mr-2'
						/>
						Email
					</label>
					<label className='flex items-center mb-2'>
						<input
							type='checkbox'
							checked={notificationSettings.push}
							onChange={() => handleNotificationChange('push')}
							className='mr-2'
						/>
						Push
					</label>
					<label className='flex items-center'>
						<input
							type='checkbox'
							checked={notificationSettings.inApp}
							onChange={() => handleNotificationChange('inApp')}
							className='mr-2'
						/>
						In-App
					</label>
				</div>
			</div>
			<div className='mb-4'>
				<span className='block mb-2'>Privacy Settings:</span>
				<div>
					<label className='block mb-2'>
						Profile Visibility:
						<select
							value={privacySettings.profileVisibility}
							onChange={(e) =>
								handlePrivacyChange('profileVisibility', e.target.value)
							}
							className='px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
						>
							<option value='public'>Public</option>
							<option value='private'>Private</option>
						</select>
					</label>
					<label className='flex items-center'>
						<input
							type='checkbox'
							checked={privacySettings.dataSharing}
							onChange={() =>
								handlePrivacyChange('dataSharing', !privacySettings.dataSharing)
							}
							className='mr-2'
						/>
						Share data with third parties
					</label>
				</div>
			</div>
			<div className='mb-4'>
				<span className='block mb-2'>Accessibility Settings:</span>
				<div>
					<label className='block mb-2'>
						Font Size:
						<select
							value={accessibilitySettings.fontSize}
							onChange={handleFontSizeChange}
							className='px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500'
						>
							<option value='small'>Small</option>
							<option value='medium'>Medium</option>
							<option value='large'>Large</option>
						</select>
					</label>
					<label className='flex items-center mb-2'>
						<input
							type='checkbox'
							checked={accessibilitySettings.highContrast}
							onChange={() => handleToggle('highContrast')}
							className='mr-2'
						/>
						High Contrast
					</label>
					<label className='flex items-center'>
						<input
							type='checkbox'
							checked={accessibilitySettings.screenReader}
							onChange={() => handleToggle('screenReader')}
							className='mr-2'
						/>
						Screen Reader
					</label>
				</div>
			</div>
		</div>
	)
}

export default Settings
