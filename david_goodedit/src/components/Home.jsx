import React from 'react'
import './Home.css'
import { Link } from 'react-scroll'

function Home () {
    return (
      <div className="HomeContainer flex-column">
          <nav className="HomeNavbar flex-row perfect-center">
              <Link
            activeClass='active'
            className='flex-row perfect-center'
            to='converterMk'
            spy={true}
            smooth={true}
            offset={1}
            duration={500}>
            START WRITTING
            <img alt="a pencil" src ='https://zupimages.net/up/19/51/08jy.png'/>
          </Link>
          </nav>
          <div className='GoodEnoughContainer flex-column'>
            <img src="https://zupimages.net/up/19/51/vn62.png" alt="David Goodenough" className="GoodEnough"/>
          </div>
          
      </div>
    );
  }

export default Home
