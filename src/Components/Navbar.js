import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function index() {
  return (
    <>
      <div className='sticky top-0 bg-white z-10 shadow-lg p-2 '>
        <div className='flex mt- justify-between text-justify '>
          <p className='text-purple-700 font-bold pl-6 text-2xl'>CodeWithAbhishek</p>
          <div className='flex space-x-4'>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'><Link to="/">Home</Link></div>
            <div className='hover:cursor-pointer hover:border-b-2 hover:border-purple-700'><Link to="/work">Work With Us</Link></div>
            <Link to="/login"><button class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mx-1">Login</button></Link>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}