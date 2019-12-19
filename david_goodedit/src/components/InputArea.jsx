import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import './InputArea.css'

class InputArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transformedText: ``,
      words: 0,
      characters:0,
    }
    this.converter = this.converter.bind(this)
  }
  converter(event) {
    this.setState({
      transformedText: convertToHTML(event.target.value)
    })
  }
  render() {
    return (
      <div className='InputContainer'>
        <div className='SecondInputContainer'>
        <h2>MARKDOWN</h2>

          <textarea
            id='inputMD'
            name='inputMD'
            onChange={this.converter}
          ></textarea>
          <div>
        <button>Need help ?</button></div>
        </div>
        <div className='CounterAndLogo'>
          <img src="https://zupimages.net/up/19/51/oqpj.png" alt=""/>
          <div>Words : {this.state.words}</div>
          <div>Characters : {this.state.characters}</div>
        </div>
        <div className = 'FirstContainerHTML'>
        <h2>HTML</h2>
          <div className= 'HtmlContainer'>{this.state.transformedText}</div> 
          <div>
        <button>Download</button></div>
        </div>
        
      </div>
    )
  }
}

export default InputArea
