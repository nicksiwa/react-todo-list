import React, { Component } from 'react'
import SystemName from './SystemName'

class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <SystemName name='Todo list'/>
      </div>
    )
  }
}

export default Navbar
