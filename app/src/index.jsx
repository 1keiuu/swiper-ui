import React, { useEffect, useState } from 'react'
import { render } from 'react-dom'
import axios from "axios"

const App = () => {
  const [currentUser, serCuurentUser] = useState([]) 
  useEffect(async() => {
     const res = await axios.get('http://localhost:8888')
    serCuurentUser([...res.data])
    console.log(currentUser)
  },[])
  return (
    <div>
<ul>
      {currentUser.map(user => (
        <li key={user.id}>
          <a href={user.imageURL}>{user.name}</a>
        </li>
      ))}
    </ul>  </div>
  )
}

render(<App/>, document.getElementById('app'))