import React from 'react'
import { render } from 'react-dom'
import axios from "axios"
class App extends React.Component {
  constructor(props) { 
    super(props)
    this.state = { message: 'something' }
    axios.get('http://localhost:8888').then(res=>{
      console.log(res)
    })
  }

  onChange(e) {
     this.setState( {message: e.target.value} )
  }

  render() {
    return (
      <div>
        <input type="text" onChange = { this.onChange.bind(this) } />
        <p>{ this.state.message }</p>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))