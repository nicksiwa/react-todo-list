import React, { Component } from 'react'

class Button extends Component {
  handleSubmit = (e) => {
    const {onSubmit} = this.props
    const {value} = this.props
    if (!value) return
    onSubmit(value)
  }
  render () {
    return (
      <button type='submit' onClick={this.handleSubmit}>{this.props.text}</button>
    )
  }
}

export default Button
