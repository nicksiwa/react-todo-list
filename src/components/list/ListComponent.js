import React, { Component } from 'react'
import Delete from './Delete'

class List extends Component {
  renderItem = (text, i) => {
    return (
      <li>{text} <Delete text='Delete'/></li>
    )
  }
  render () {
    return (
      <ul>
        {this.props.list.map(this.renderItem)}
      </ul>
    )
  }
}

export default List
