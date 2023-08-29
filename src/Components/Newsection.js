import React from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Newsection() {
  return (
    <>
      <div className='flex mt-10 justify-evenly'>
        <div className='p-20'>
          <div className='text-4xl'>Welcome to <b className='text-purple-700'>CodeWithAbhishek</b></div>
          <p className='w-96'>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
          <button className='p-2 bg-slate-900  mt-4 text-white rounded-md max-w-max hover:bg-slate-700' ><Link to="/Home/Enroll">Click Here For Create Website</Link></button>
        </div>
        <div className=''>
          <img className='rounded-xl shadow-2xl' src='https://media.istockphoto.com/id/1201166649/photo/office-responsive-devices-web-design-website.jpg?s=612x612&w=0&k=20&c=w1zX61Nw0p3aguqUj9FFrUV9hl8l67zut_ZhdnB9p-E=' alt=''></img>
        </div>
      </div>
      <Outlet />
    </>
  )
}
