import React, { Component } from 'react'

class NavbarLink extends Component {
  render () {
    return (
      <ul className='navbar__link'>
        <li>{this.props.link}</li>
      </ul>
    )
  }
}

export default NavbarLink
