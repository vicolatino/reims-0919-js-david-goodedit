import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import './InputArea.css'
const downloadjs = require('downloadjs')

class InputArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transformedText: ``,
      words: 0,
      characters: 0
    }
    this.converter = this.converter.bind(this)
    this.downloadFile = this.downloadFile.bind(this)
  }

  converter(event) {
    this.setState({
      characters: event.target.value.length,
      words: event.target.value.split(/[` ` | `'`]/g).length,
      transformedText: convertToHTML(event.target.value + '\n')
        .split(`\n`)
        .map(balise => {
          return <p>{balise}</p>
        })
    })
  }

  downloadFile() {
    downloadjs(
      this.state.transformedText.reduce((acc, element) => {
        return acc + '\n' + element.props.children
      }, ''),
      'yourHTML.txt',
      'text/plain'
    )
  }

  render() {
    return (
      <div className='InputContainer'>
        <div className='SecondInputContainer inset flex-column'>
          <h2 className='stack'>MARKDOWN</h2>
          <textarea
            id='inputMD'
            name='inputMD'
            className='MDInput stack stretch-inset'
            onChange={this.converter}
          ></textarea>
          <button>Need help ?</button>
        </div>
        <div className='CounterAndLogo'>
          <img src='https://zupimages.net/up/19/51/oqpj.png' alt='' />
          <div>Words : {this.state.words}</div>
          <div>Characters : {this.state.characters}</div>
        </div>
        <div className='FirstContainerHTML inset flex-column'>
          <h2 className='stack'>HTML</h2>
          <div className='HtmlContainer stack stretch-inset'>
            {this.state.transformedText}
          </div>
          <button onClick={this.downloadFile}>Download</button>
        </div>
      </div>
    )
  }
}
export default InputArea
