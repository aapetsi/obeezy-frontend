import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const userState = useSelector((state) => state.user)
  console.log(userState)
  return (
    <div>
      <h1>Dashboard component</h1>
      <p>Welcome {userState.userInfo.username}</p>
      <p>Books read</p>
    </div>
  )
}

export default Dashboard
