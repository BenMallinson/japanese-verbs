import React, { Component } from 'react'
import VerbList from './VerbList'
import Button from './Button'
import { Ghost, IceCream } from 'react-kawaii'
import LanguageSelector from './LanguageSelector'
import HelpButton from './HelpButton'
import Modal from './Modal'

class Verbage extends Component {
  state = {
    verb: VerbList[0],
    completed: false,
    correct: false,
    language: 'english',
    modal: false,
  }

  getVerb() {
    let key = Math.ceil(Math.random() * VerbList.length) - 1
    this.setState({
      verb: VerbList[key],
    })
  }

  isCorrect(answer) {
    const {
      verb: { group },
    } = this.state
    return answer === group
  }

  processAnswer(answer) {
    this.setState({
      completed: true,
      correct: this.isCorrect(answer),
    })
  }

  renderModal () {
    const { modal } = this.state
    if(modal === false) {
      return null;
    }

    return (
      <Modal onClose={() => this.setState({modal: false})} />
    )
  }

  renderButtons() {
    const { completed } = this.state
    if (completed === false) {
      return (
        <div>
          <h3 className={'center-text'}> Which Group? </h3>
          <div className={'three-column'}>
            <Button
              onClick={() => this.processAnswer('RU')}
              title={'RU'}
              extraClasses={['secondary']}
            />
            <Button
              onClick={() => this.processAnswer('U')}
              title={'U'}
              extraClasses={['secondary']}
            />
            <Button
              onClick={() => this.processAnswer('OTHER')}
              title={'OTHER'}
              extraClasses={['secondary']}
            />
          </div>
        </div>
      )
    }
  }

  nextVerb = () => {
    this.setState({
      completed: false,
    })
    this.getVerb()
  }

  changeLanguage = language => {
    this.setState({ language })
  }

  renderTitle() {
    const { correct } = this.state
    return <h1> {correct ? 'Correct!' : 'Incorrect'} </h1>
  }

  renderNext() {
    const { completed, correct, language, verb } = this.state
    if (completed === true) {
      return (
        <div className={'center-text'}>
          {this.renderTitle()}
          <h4>{`${verb[language].toUpperCase()} is a  ${verb.group} verb!`}</h4>
          <div className="m-bottom-md">
            <Ghost size="150" mood={correct ? 'excited' : 'sad'} />
          </div>
          <Button onClick={this.nextVerb} title={'Next'} />
        </div>
      )
    }
  }

  render() {
    const { language, verb } = this.state
    return (
      <div>
        {this.renderModal()}
        <h1 className={'center-text'}> 🇯🇵 VERBS 🇯🇵</h1>
        <HelpButton onClick={() => this.setState({modal: true})} />
        <div className={'single-column center-text'}>
          <div>
            <LanguageSelector onClick={value => this.changeLanguage(value)} />
            <h3> {language.toUpperCase()} </h3>
            <h4> {verb[language].toUpperCase()} </h4>
          </div>
        </div>
        {this.renderButtons()}
        {this.renderNext()}
      </div>
    )
  }
}

export default Verbage
