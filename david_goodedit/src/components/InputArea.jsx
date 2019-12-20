import React from 'react'
import convertToHTML from 'markdown-to-html-converter'
import './InputArea.css'
import { Link } from 'react-scroll'

class InputArea extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      transformedText: ``,
      words: 0,
      characters: 0
    }
    this.converter = this.converter.bind(this)
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
            id='inputMD'
            name='inputMD'
            className='stack stretch-inset'
            onChange={this.converter}
          ></textarea>
          
        </section>
        <div className='CounterAndLogo'>
          <img src='https://zupimages.net/up/19/51/oqpj.png' alt='' />
          <div>Words : {this.state.words}</div>
          <div>Characters : {this.state.characters}</div>
        </div>
        <section className='FirstContainerHTML inset flex-column'>
          <header>
            <h2 style={{display: 'inline-block'}} className='stack inline'>HTML</h2>
            (<a href='#' onClick={(e) => e.preventDefault()} className='linkclick'>Download</a>)
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
