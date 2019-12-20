import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import './InputArea.css'
import { Link } from 'react-scroll'

const downloadjs = require("downloadjs")



class InputArea extends React.Component  {
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
      <div id= 'converterMk'className='InputContainer'>
        <section className='SecondInputContainer inset flex-column'>
          <header>
            <h2 style={{display: 'inline-block'}} className='stack inline'>MARKDOWN</h2>
            (<Link
              activeClass='active'
              className='linkclick'
              to='tutoMk'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>
              Need help ?
            </Link>)
          </header>
          <textarea
            key= "Markdown"
            id='inputMD'
            name='inputMD'
            className='MDInput stack stretch-inset'
            value= {this.state.text}
            onChange={this.converter}
          ></textarea>
          
        </section>
        <div className='CounterAndLogo'>
          <img src='https://zupimages.net/up/19/51/oqpj.png' alt='' />
          <div>Words : {this.state.words}</div>
          <div>Characters : {this.state.characters}</div>
          <button onClick={this.clearMarkdown}>Clear</button>
        </div>
        <section className='FirstContainerHTML inset flex-column'>
          <header>
            <h2 style={{display: 'inline-block'}} className='stack inline'>HTML</h2>
            (<a href='#' onClick={(e) => e.preventDefault()} className='linkclick' onClick={this.downloadFile}>Download</a>)
          </header>
          <div className='HtmlContainer stack stretch-inset'>
            {this.state.transformedText}
          </div>
        </section>
      </div>
    )
  }
}
export default InputArea
