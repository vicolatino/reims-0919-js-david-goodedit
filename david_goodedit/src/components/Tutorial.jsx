import React from 'react'
import './Tutorial.css'
import TitleTuto from './TitleTuto'
import ListsTuto from './ListsTuto'
import ImageTuto from './ImageTuto'

function Tutorial() {
  return (
    <div>
      <h1>Tutoriel</h1>
      <div>
        <div>
          <TitleTuto />
        </div>
        <div>
          <ListsTuto />
          <ImageTuto />
        </div>
      </div>
    </div>
  );
}

export default Tutorial