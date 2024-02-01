import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='relative flex items-top justify-center min-h-52 sm:items-center sm:pt-0 rounded-l bg-gray-100 sm:rounded-3xl'>User: {userid} </div>
  )
}

export default User