import React from 'react'
import './Tutorial.css'

function QuoteTuto() {
  return (
    <div>
      <h2>Les blocs de code :</h2>
        <p>
          Vous pouvez créer un bloc de code en écrivant ``` au dessus et en dessous de votre paragraphe. 
        </p>
        <div className="transformation">
          <p>
            ```
            <br />
            Ceci est un bloc de code
            <br /> 
            ```
          </p>
          <p>Ceci est un bloc de code</p>
        </div>
    </div>
  );
}

export default QuoteTuto;