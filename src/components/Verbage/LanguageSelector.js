import React, { Component } from 'react'
import Button from './Button'

class LanguageSelector extends Component {
  render() {
    return (
      <div className={'three-column'}>
        <Button
          title={'English'}
          onClick={() => this.props.onClick('english')}
        />
        <Button
          title={'Romanji'}
          onClick={() => this.props.onClick('romanji')}
        />
        <Button
          title={'Japanese'}
          onClick={() => this.props.onClick('japanese')}
        />
      </div>
    )
  }
}

export default LanguageSelector
