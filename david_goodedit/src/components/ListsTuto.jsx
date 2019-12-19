import React from 'react'
import './Tutorial.css'

function ListsTuto() {
  return (
    <div>
      <h2 id="titleH2">Les listes :</h2>
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
    </div>
  );
}

export default ListsTuto;