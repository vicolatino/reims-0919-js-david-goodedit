import React from 'react'
import './Tutorial.css'

function Tutorial() {
  return (
    <div>
      <h1>Tutoriel</h1>
      <div>
        <h2>Les titres :</h2>
        <div className="transformation">
          <p>
            #Titre 
          </p>
          <p className='titleH1'>
            Titre
          </p>
        </div>
        <div className="transformation">
          <p>
            ##Titre 
          </p>
          <p className='titleH2'>
            Titre
          </p>
        </div>
        <div className="transformation">
          <p>
            ###Titre 
          </p>
          <p className='titleH3'>
            Titre
          </p>
        </div>
        <div className="transformation">
          <p>
            ####Titre 
          </p>
          <p className='titleH4'>
            Titre
          </p>
        </div>
        <p>Plus vous rajouter de #, plus le titre est petit</p>
      </div>
    </div>
  );
}

export default Tutorial