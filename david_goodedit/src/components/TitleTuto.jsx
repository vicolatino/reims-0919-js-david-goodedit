import React from 'react'
import './Tutorial.css'

function TitleTuto() {
  return (
      <div>
        <div>
          <p className="pTitle">Plus vous rajouter de #, plus le titre est petit</p>
            <div className="transformationTitle">
              <div className="transformation">
                <p>#Titre</p>
                <p className='titleH1'>Titre</p>
              </div>
              <div className="transformation">
                <p>##Titre</p>
                <p className='titleH2'>Titre</p>
              </div>
            </div>
            <div className="transformationTitle">
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
      </div>
  );
}

export default TitleTuto;