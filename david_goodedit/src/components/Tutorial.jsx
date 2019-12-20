import React from 'react'
import './Tutorial.css'
import TitleTuto from './TitleTuto'
import ListsTuto from './ListsTuto'
import ImageTuto from './ImageTuto'
import ParagraphTuto from './ParagraphTuto'
import UrlTuto from './UrlTuto'
import QuoteTuto from './QuoteTuto'
import { Link } from 'react-router-dom'

function Tutorial() {
  return (
    <div>
      <h1 className="titleSection">Tutoriel</h1>
      <hr />
      <TitleTuto />
      <ParagraphTuto />
      <ListsTuto />
      <ImageTuto />
      <UrlTuto />
      <QuoteTuto />
      <a className="CGU"><Link to="Mister-Goodenough">CGU</Link></a>
    </div>
  );
}

export default Tutorial