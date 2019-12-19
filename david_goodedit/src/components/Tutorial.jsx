import React from 'react'
import './Tutorial.css'
import TitleTuto from './TitleTuto'
import ListsTuto from './ListsTuto'
import ImageTuto from './ImageTuto'
import ParagraphTuto from './ParagraphTuto'
import UrlTuto from './UrlTuto'
import QuoteTuto from './QuoteTuto'
import CodeTuto from './CodeTuto'

function Tutorial() {
  return (
    <div>
      <h1>Tutoriel</h1>
      <TitleTuto />
      <ListsTuto />
      <ImageTuto />
      <ParagraphTuto />
      <UrlTuto />
      <QuoteTuto />
      <CodeTuto />
    </div>
  );
}

export default Tutorial