import React from 'react'
import './Tutorial.css'
import TitleTuto from './TitleTuto'
import ListsTuto from './ListsTuto'
import ImageTuto from './ImageTuto'
import ParagraphTuto from './ParagraphTuto'
import UrlTuto from './UrlTuto'
import QuoteTuto from './QuoteTuto'

function Tutorial() {
  return (
    <div>
      <h1 className='titleSection' id='tutoMk'>
        Tutoriel
      </h1>
      <hr />
      <TitleTuto />
      <ParagraphTuto />
      <ListsTuto />
      <ImageTuto />
      <UrlTuto />
      <QuoteTuto />
    </div>
  )
}

export default Tutorial
