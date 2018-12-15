import React, { Component } from 'react'
import classnames from 'classnames'

class Button extends Component {
  render() {
    return (
      <a
        className={classnames(
          'buttons m-top-sm min-width-200',
          ...this.props.extraClasses
        )}
        onClick={() => this.props.onClick(this.props.title)}
      >
        {this.props.title}
      </a>
    )
  }
}

Button.defaultProps = {
  extraClasses: [],
}

export default Button
