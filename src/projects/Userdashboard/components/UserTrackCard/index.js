import React, { useState, useEffect } from 'react'

const UserTrackCard = ({ username, registrationDate, activityLog }) => {
	const [totalHours, setTotalHours] = useState(0)

	useEffect(() => {
		const calculateTotalHours = () => {
			let totalHours = 0
			const registrationTime = new Date(registrationDate).getTime()
			const currentTime = new Date().getTime()

			if (activityLog) {
				activityLog.forEach((activity) => {
					const activityStartTime = new Date(activity.startTime).getTime()
					const activityEndTime = new Date(activity.endTime).getTime()
					const activityDuration = activityEndTime - activityStartTime
					totalHours += activityDuration / (1000 * 3600)
				})
			}

			const timeSinceRegistration = currentTime - registrationTime
			totalHours += timeSinceRegistration / (1000 * 3600)
			
			totalHours = totalHours.toFixed(0)

			setTotalHours(totalHours)
		}

		calculateTotalHours()
	}, [registrationDate, activityLog])

	return (
		<div className='p-4 bg-gray-900 rounded-lg card'>
			{/* <h2>User: {username}</h2> */}
			<p className='text-xl'>{totalHours}</p>
			<p className='text-xs'>Total Hours</p>
		</div>
	)
}

export default UserTrackCard
