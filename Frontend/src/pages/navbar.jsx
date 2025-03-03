import React from 'react'

const Navbar = () => {
  return (
       <nav className='bg-emerald-600 h-12 flex items-center justify-between p-4 text-white '>
        <div> Books on Desk</div>
        <div>
        <ul className='flex justify-end items-center gap-8 font-semibold text-lg '>
          <li>Home</li>
          <li>About</li>
          <li>Virtual Walkthrough</li>
          <li>Contact</li>
          <li>Community</li>
          <li>Login</li>
        </ul>
        </div>
       </nav>
      
  )
}

export default Navbar
