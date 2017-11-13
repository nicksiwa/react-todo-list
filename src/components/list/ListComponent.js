import React, { Component } from 'react'
import Delete from './Delete'

class List extends Component {
  render () {
    return (
      <ul>
        <li>test <Delete text='Delete'/></li>
      </ul>
    )
  }
}

export default List
