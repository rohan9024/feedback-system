import React from 'react'
import StudentDashboard from '../../../components/StudentDashboard'
import StudentNavbar from '../../../components/StudentNavbar'

const page = () => {
  return (
    <div>
        <StudentNavbar />
        <StudentDashboard />
    </div>
  )
}

export default page