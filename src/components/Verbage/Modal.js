import React, { Component } from 'react'

class Modal extends Component {
  render () {
    const { onClose } = this.props
    return (
      <div id="open-modal" className="modal-window">
        <div>
          <a onClick={() => onClose()} title="Close" className="modal-close text-primary">Close</a>
          <h1 className='center-text'>Help</h1>
          <div className='margin-h-md'>
            <p> Japanese verbs are split into 3 different groups, <span>RU</span>, <span>U</span> and <span>IRREGULAR</span>. How you conjugate a verb from it's dictionary form to it's polite or casual form depends on which group it is in.</p>
            <p> Each group has rules on which verbs are part of it based on the last 3 characters of the dictionary form.</p>
            <h3> RU / Group 1 / go-dan </h3>
            <ul>
              <li> Doesn't end in <span>RU</span></li>
              <li> Ends in <span>ARU</span>, <span>URU</span>, <span>ORU</span></li>
            </ul>
            <h3> U / Group 2 / ichi-dan </h3>
            <ul>
              <li> Ends in <span>ERU</span> or <span>IRU</span></li>
            </ul>
            <h3> IRREGULAR / Group 3 </h3>
            <ul>
              <li> Ends in <span>SURU</span> or <span>KURU</span></li>
            </ul>
            <h3> Special Cases</h3>
            <p> Unfortunately, in Japanese there are a few special cases of verbs that look like U verbs, but are actually RU verbs. This isn't a definitive list, but these are the most common ones that you may come across.</p>
            <ul>
              <li>kaeru - to return</li>
              <li>hairu - to enter</li>
              <li>shaberu - to chatter</li>
              <li>iru - to need</li>
              <li>shiru - to know</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
