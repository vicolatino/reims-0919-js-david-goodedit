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
    <div className=':root'>
      <h1 className='titleSection'>Tutoriel</h1>
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
