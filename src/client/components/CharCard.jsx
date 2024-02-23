import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CharCard = ({char}) => {

  console.log(char)
  return (
    <Link to={`/app/info/${char.id}`} className='w-32 h-32 relative'>
      <img src={char.image} className='object-cover h-full absolute inset-0'/>
      {/* {char.name} */}
    </Link>
  )
}

export default CharCard