import React from 'react'
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <header className='shadow-lg sticky'>
      <div className='flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4'>
       <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-lg font-semibold">
        <img src="/mnclogo.png" alt="logo" className="h-10" />
       </Link>


       <form
  className="p-3 bg-slate-100 rounded-lg flex items-center gap-2"
  role="search"
>

  <label htmlFor="site-search" className="sr-only">
    Search News
  </label>

  <input
    type="search"
    id="site-search"
    name="search"
    placeholder="Search news..."
    autoComplete="off"
    required
    className="focus:outline-none bg-transparent w-24 sm:w-40 text-sm"
  />

  <button
    type="submit"
    className="text-red-600 hover:text-red-700"
  >
    🔍
  </button>

</form>

       <ul className='flex gap-4'>
          <Link to={"/"}>
            <li className='hidden lg:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>

          <Link to={"/about"}>
            <li className='hidden lg:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>

          <Link to={"/news-artical"}>
            <li className='hidden lg:inline text-slate-700 hover:underline'>
              NewsArticals
            </li>
          </Link>

       </ul>

       <Link to={"/sign-in"}>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg
             hover:bg-red-900 transition duration-300 shadow-md hover:shadow-lg">Sign In</button>
          </Link>
      </div>
    </header>
  )
}

export default Header