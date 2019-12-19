import React from 'react'
import './Tutorial.css'

function Tutorial() {
  return (
    <div>
      <h1>Tutoriel</h1>
      <div>
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
        <div>
          <h2>Les listes :</h2>
          <div className="transformation">
            <div className="transformation2">
              <h3>Les listes ordonnées :</h3>
              <div className="transformation">
                <p>1. Avoir une idée<br />2. Trouver des fonds<br />
                    3. ?<br />4. Profit
                </p>
                <ol>
                  <li>Avoir une idée</li>
                  <li>Trouver des fonds</li>
                  <li>?</li>
                  <li>Profit</li>
                </ol>
              </div>
            </div>
            <div className="transformation2">
              <h3>Les listes non-ordonnées :</h3>
              <div className="transformation">
                <p>* Avoir une idée<br />* Trouver des fonds<br />
                    * ?<br />* Profit
                </p>
                <ul>
                  <li>Avoir une idée</li>
                  <li>Trouver des fonds</li>
                  <li>?</li>
                  <li>Profit</li>
                </ul>
              </div>
            </div>
          </div>
          <h2>Les images :</h2>
          <p>![Here is a picture of a very cute puppy:](../public/puppy-image-example.jpg 'puppy photo')</p> 
        </div>
      </div>
    </div>
  );
}

export default Tutorial