import React from 'react'
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      light: true
    }
    this.aziz = this.aziz.bind(this)
  }
  aziz() {
    this.setState({ light: !this.state.light })
  }
  render() {
    return (
      <div className='HomeContainer flex-column'>
        <nav className='HomeNavbar flex-row perfect-center'>
          <a className='flex-row perfect-center'>
            START WRITTING
            <img src='https://zupimages.net/up/19/51/08jy.png' />
          </a>
        </nav>
        <button onClick={this.aziz}>
          {this.state.light === true ? 'Eteindre' : 'Allumer'}
        </button>
        <div className='GoodEnoughContainer flex-column'>
          <img
            src='https://zupimages.net/up/19/51/vn62.png'
            alt=''
            className='GoodEnough'
          />
        </div>
      </div>
    )
  }
}
export default Home
