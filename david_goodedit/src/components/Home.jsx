import React from 'react'
import './Home.css'

function Home({ aziz, light }) {
  return (
    <div className='darkApp flex-column'>
      <nav className='HomeNavbar flex-row perfect-center'>
        <a className='flex-row perfect-center'>
          START WRITTING
          <img src='https://zupimages.net/up/19/51/08jy.png' />
        </a>
      </nav>
      <div className='theme-switch-wrapper'>
        <label class='theme-switch' for='checkbox'>
          <input type='checkbox' id='checkbox' onChange={aziz} />

          <div class='slider round'></div>
        </label>
      </div>
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
