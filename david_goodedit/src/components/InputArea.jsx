import React from 'react'
import convertToHTML from 'markdown-to-html-converter'

class InputArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transformedText: ``
    }
    this.converter = this.converter.bind(this)
  }

  converter(event) {
    this.setState({
      transformedText: convertToHTML(event.target.value + '\n')
        .split(`\n`)
        .map(balise => {
          return <p>{balise}</p>
        })
    })
  }
  render() {
    return (
      <div>
        <div>
          <label htmlFor='inputMD'>Markdown</label>
          <textarea
            id='inputMD'
            name='inputMD'
            onChange={this.converter}
          ></textarea>
        </div>
        <div>
          <h2>HTML</h2>
          <div>{this.state.transformedText}</div>
        </div>
      </div>
    )
  }
}

export default InputArea
