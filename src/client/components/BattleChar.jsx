import React, {useState} from 'react'

const BattleChar = ({char}) => {
  const [health, setHealth] = useState(char.health)
  return (
    <div className='w-52'>
      <img src={char.image} className='w-full object-cover h-52'/>
      <h1>{char.name}</h1>
      <h4 className='text-orange-600 text-2xl'>Health: {char.health}</h4>
        <div className="flex flex-row w-full justify-around">
          <h5>Attack: {char.attack}</h5>
          <h5>Defense: {char.defense}</h5>
        </div>
        <div className="flex flex-row w-full justify-around">
          <h5>Special Attack: {char.special_attack}</h5>
          <h5>Special Defense: {char.special_defense}</h5>
        </div>
        <div className="flex flex-row w-full justify-around">
          <h5>Speed: {char.speed}</h5>
          <h5>Luck: {char.luck}</h5>
        </div>
        <div></div>
    </div>
  )
}

export default BattleChar