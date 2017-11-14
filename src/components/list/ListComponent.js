import React, { Component } from 'react'
import Delete from './Delete'

class List extends Component {
  renderItem = (text, i) => {
    return (
      <li>{text} <Delete text='Delete' onDelete={this.props.onDelete} index={i}/></li>
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
