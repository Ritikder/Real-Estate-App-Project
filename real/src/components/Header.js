// import React from 'react'
// import { BrowserRouter, NavLink } from 'react-router-dom'
// import './headers.css'
// function Header() {
//   return (
//     <div className='header'>
//         <div className='header1'>SahandEstate</div>
//         <div className='header2'>
//         <input type="text" placeholder='search'/>
//         </div>
            
        
//         <div className='header3'>
       
//        <NavLink to="/home" className='header31'>Home</NavLink>
//        <NavLink to="/home"className='header31'>About</NavLink>
//        <NavLink to="/home"className='header31'>Sign In</NavLink>
       
//         </div>
//     </div>
//   )
// }

// export default Header
import React from 'react'
import {FaRegLaughWink, FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-state-500'>Ritik</span>
                <span className='text-slate-700'> Estate</span>
            </h1>
            </Link>
            <form  className='bg-slate-100 p-3 rounded-lg flex items-center '>
                
              <input type='text' placeholder='Seach..' className='bg-transparent focus:outline-none w-24 sm:w-64' />
              <FaSearch className='text-slate-500'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li className='hidden sm:inline text-slate-700 hover:underline
                '>Home</li>
                </Link >
                <Link to='/about'>
                <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/sign-in'> 
                <li  className=' text-slate-700 hover:underline'>Sign In</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}

export default Header