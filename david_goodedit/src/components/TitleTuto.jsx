import React from 'react'
import './Tutorial.css'

function TitleTuto() {
  return (
      <div>
        <h2>Les titres :</h2>
        <p>Plus vous rajouter de #, plus le titre est petit</p>
        <div className="transformation">
          <div className="transformation">
            <p>#Titre</p>
            <p className='titleH1'>Titre</p>
          </div>
          <div className="transformation">
            <p>##Titre</p>
            <p className='titleH2'>Titre</p>
          </div>
        </div>
        <div className="transformation">
          <div className="transformation">
            <p>###Titre</p>
            <p className='titleH3'>Titre</p>
          </div>
          <div className="transformation">
            <p>####Titre</p>
            <p className='titleH4'>Titre</p>
          </div>
        </div>
      </div>
  );
}

export default TitleTuto;