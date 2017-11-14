import React, { Component } from 'react'

class Delete extends Component {
  render () {
    const {index} = this.props
    const {onDelete} = this.props
    return (
      <a href='javascript:void(0)' onClick={() => onDelete(index)}>
        {this.props.text}
      </a>
    )
  }
}

export default Delete
