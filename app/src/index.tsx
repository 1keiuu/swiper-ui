import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import axios from "axios"
import './index.scss'
import UserCardsList from "./components/user-cards-list/UserCardsList"
const App:React.FC = () => {
  const [userLists, serUserLists] = useState([]) 
  useEffect( () => {
    const fetch = async() => {
      const res = await axios.get('http://localhost:8888')
      serUserLists([...res.data])
    }
     fetch()
  }, [])
  
  return (
    <div className='container'>
      <UserCardsList userLists={userLists}/>
    </div>
  )
}

render(<App/>, document.getElementById('app'))