import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-16 bg-gray-900 flex flex-row gap-4 items-center justify-center'>
      <Link className='text-lg text-white' to="/app">Home</Link>
      <Link className='text-lg text-white' to="/app/mycharacters">My Char</Link>
      <Link className='text-lg text-white' to="/app/allcharacters">All Char</Link>
      <Link className='text-lg text-white' to="/app/add">Add Char</Link>
      <Link className='text-lg text-white' to="/app/battle">Battle</Link>
    </header>
  )
}

export default Header