import React, { useState, useContext } from 'react'
import { Navigate, RouterProvider, createBrowserRouter, defer } from 'react-router-dom'
import AuthScreen from './screens/AuthScreen'
import App from './App'
import HomeScreen from './screens/HomeScreen'
import AddCharacter from './screens/AddCharacter'
import MyCharacter from './screens/MyCharacter'
import AllCharacters from './screens/AllCharacters'
import Battle from './screens/Battle'
import axios from 'axios'
import CharacterInfo from './screens/CharacterInfo'
import AuthContext from './state/AuthContext'

const Router = () => {
  const [selected, setSelected] = useState([])
  console.log("SELECTED", selected)
  const {state} = useContext(AuthContext)

  const addToSelected = (char) => {
    if(selected.length < 2) {
      let newSelected = [...selected, char]
      setSelected(newSelected)
    } else {
      alert('Too Many peeps!')
    }
  }

  const router = createBrowserRouter([
    {
      index: true,
      element: state.userId ? <Navigate to="/app"/> : <AuthScreen />
    },
    {
      path: '/app',
      element: state.userId ? <App /> : <Navigate to="/"/>,
      children: [
        {
          index: true,
          element: <HomeScreen />
        },
        {
          path: 'add',
          element: <AddCharacter />
        },
        {
          path: 'mycharacters',
          element: <MyCharacter />,
          loader: () => {
            let data = axios.get(`/api/myCharacter/${state.userId}`).then((res) => res.data)
            return defer({characters: data})
          }
        },
        {
          path: 'allCharacters',
          element: <AllCharacters addToSelected={addToSelected} />,
          loader: () => {
            let data = axios.get("/api/characters").then((res) => res.data)
            return defer({characters: data})
          }
        },
        {
          path: 'battle',
          element: <Battle selected={selected}  setSelected={setSelected}/>
        },
        {
          path: 'info/:charId',
          element: <CharacterInfo addToSelected={addToSelected}/>,
          loader: ({params}) => {
            let {charId} = params
            let data = axios.get(`/api/character/${charId}`).then((res) => res.data)
            return defer({character: data})
          }
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default Router