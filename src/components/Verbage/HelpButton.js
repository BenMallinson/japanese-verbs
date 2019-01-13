import React, { Component } from 'react'

class HelpButton extends Component {
  render () {
    const { onClick } = this.props
    return (
      <div className='help-circle' onClick={onClick}>
        <p>?</p>
      </div>
    )
  }
}

export default HelpButton
