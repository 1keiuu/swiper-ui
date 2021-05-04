import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import axios from "axios"
import './index.scss'

const App = () => {
  const [currentUser, serCuurentUser] = useState([]) 
  useEffect(async() => {
     const res = await axios.get('http://localhost:8888')
    serCuurentUser([...res.data])
  }, [])
  
  return (
    <div>
      {currentUser.map(user => (
        <div key={user.id} className='item'>
          <img src={user.imageURL} width={500} height={300} className='user__img'/>
          <div>
            <p>{user.name}</p>
            <p>{user.age}</p>
          </div> 
        </div>
      ))}
    </div>
  )
}

render(<App/>, document.getElementById('app'))