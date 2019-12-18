import React from 'react'
import convertToHTML from 'markdown-to-html-converter'

class InputArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <label htmlFor=''>Markdown</label>
        <textarea id='inputMD' name='inputMD'></textarea>
      </div>
    )
  }
}

export default InputArea
