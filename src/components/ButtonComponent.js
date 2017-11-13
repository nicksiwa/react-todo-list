import React, { Component } from 'react'

class Button extends Component {
  handleSubmit = (e) => {
    const {onSubmit} = this.props
    const {value} = this.props
    const {onReset} = this.props
    if (!value) return
    onSubmit(value)
    onReset()
  }
  render () {
    return (
      <button type='submit' onClick={this.handleSubmit}>{this.props.text}</button>
    )
  }
}

export default Button
