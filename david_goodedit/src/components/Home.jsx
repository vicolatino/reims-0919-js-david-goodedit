import React from 'react'
import './Home.css'

function Home () {
    return (
      <div className="HomeContainer flex-column">
          <nav className="HomeNavbar flex-row perfect-center">
              <a className="flex-row perfect-center">START WRITTING<img src ='https://zupimages.net/up/19/51/08jy.png'/></a>
          </nav>
          <div className='GoodEnoughContainer flex-column'>
            <img src="https://zupimages.net/up/19/51/vn62.png" alt="" className="GoodEnough"/>
          </div>
          
      </div>
    );
  }

export default Home
