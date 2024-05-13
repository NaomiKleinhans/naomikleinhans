import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import CourseTracking from '@/components/CourseTracking'
import UserTrackCard from '@/components/UserTrackCard'

const inter = Inter({ subsets: ['latin'] })
  const dummyUserData = [
		{ username: 'Jaydon Scott', registrationDate: '2023-01-15T08:00:00Z' }
	]
export default function Page() {
	return (
		<>
			<Head>
				<title>User Dashboard</title>
			</Head>
			<div className='fixed w-2/3 p-4 text-white rounded-lg shadow-md top-4 mobile:left-36 laptop:left-80 desktop:left-96'>
				<div className='my-4'>
					{dummyUserData.map((userData, index) => (
						<UserTrackCard
							key={index}
							username={userData.username}
							registrationDate={userData.registrationDate}
						/>
					))}
				</div>
				<div className='fixed w-2/3 text-white rounded-lg shadow-md mobile:left-40 laptop:left-80 desktop:left-96'>
					<CourseTracking />
				</div>
			</div>
		</>
	)
}
