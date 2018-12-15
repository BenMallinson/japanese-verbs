import React from 'react'
import styles from '../sass/app.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return <div className="container margin-0 max-width-700">{children}</div>
  }
}

export default Layout
