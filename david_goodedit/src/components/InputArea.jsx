import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import './InputArea.css'
const downloadjs = require("downloadjs")

class InputArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transformedText: ``,
      text: null,
      words: 0,
      characters: 0
    }
    this.converter = this.converter.bind(this);
    this.downloadFile = this.downloadFile.bind(this);
    this.clearMarkdown = this.clearMarkdown.bind(this);
  }

  converter(event) {
    this.setState({
      characters: event.target.value.length,
      transformedText: convertToHTML(event.target.value + '\n')
        .split(`\n`)
        .map(balise => {
          return <p>{balise}</p>
        })
    })
    this.setState({text: event.target.value})
  }

  downloadFile() {
    if (this.state.transformedText === '') {
      return alert("Télécharger un fichier vide ? Sérieux ?! David Goodenough a travaillé sur un truc qui s'appelle MARKDOWN, à gauche là. Servez vous en !")
    } else {
      downloadjs(this.state.transformedText.reduce((acc, element) => {
        return acc + '\n' + element.props.children;
      }, ''), "yourHTML.txt", "text/plain");
    }
  }

  clearMarkdown() {
    this.setState({
      transformedText: '',
      text: '',
      words: 0,
      characters: 0
    })
  }

  render() {
    return (
      <div className='InputContainer'>
        <div className='SecondInputContainer inset flex-column'>
          <h2 className='stack'>MARKDOWN</h2>
          <textarea
            id='inputMD'
            name='inputMD'
            className='stack stretch-inset'
            value= {this.state.text}
            onChange={this.converter}
          ></textarea>
          <button>Need help ?</button>
        </div>
        <div className='CounterAndLogo'>
          <img src='https://zupimages.net/up/19/51/oqpj.png' alt='' />
          <div>Words : {this.state.words}</div>
          <div>Characters : {this.state.characters}</div>
          <button onClick={this.clearMarkdown}>Clear</button>
        </div>
        <div className='FirstContainerHTML inset flex-column'>
          <h2 className='stack'>HTML</h2>
          <div className= 'HtmlContainer stack stretch-inset'>{this.state.transformedText}</div> 
          <button onClick={this.downloadFile}>Download</button>
        </div>
      </div>
    )
  }
}

export default InputArea
