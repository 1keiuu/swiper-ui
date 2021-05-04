import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import axios from "axios"
import './index.scss'
import UserCardsList from "./components/user-cards-list/UserCardsList"
const App = () => {
  const [currentUser, serCuurentUser] = useState([]) 
  useEffect(async() => {
     const res = await axios.get('http://localhost:8888')
    serCuurentUser([...res.data])
  }, [])
  
  return (
    <div className='container'>
      <UserCardsList currentUser={currentUser}/>
    </div>
  )
}

render(<App/>, document.getElementById('app'))