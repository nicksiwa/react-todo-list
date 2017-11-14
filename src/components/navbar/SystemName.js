import React, { Component } from 'react'

class SystemName extends Component {
  render () {
    return (
      <p className='navbar__system'>
        {this.props.name}
      </p>
    )
  }
}

export default SystemName
