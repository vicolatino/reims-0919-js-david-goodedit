import React from 'react'
import './Tutorial.css'

function ParagraphTuto() {
  return (
    <div>
      <h2>Les paragraphes :</h2>
        <p>
          Les paragraphes sont écrits sans ajout de caractères particuliers. 
          Ils peuvent être séparés par un simple saut de ligne.
          La mise en forme de base de l'italique et du gras est prise en charge.
          Pour écrire un mot en italique ou en gras, on l'entoure d'un ou deux astérisques :
          *italique* / **gras**. On peut également surligner un mot en l'entourant de `` comme ceci : `surlignage`.
        </p>
    </div>
  );
}

export default ParagraphTuto;