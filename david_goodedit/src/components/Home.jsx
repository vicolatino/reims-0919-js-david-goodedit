import React from 'react'
import './Home.css'

function Home({ aziz, light }) {
  return (
    <div
      className={
        light === true ? 'HomeContainer flex-column' : 'darkApp flex-column'
      }
    >
      <nav className='HomeNavbar flex-row perfect-center'>
        <a className='flex-row perfect-center'>
          START WRITTING
          <img src='https://zupimages.net/up/19/51/08jy.png' />
        </a>
      </nav>
      <button onClick={aziz}>{light === true ? 'Eteindre' : 'Allumer'}</button>
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

export default Home
