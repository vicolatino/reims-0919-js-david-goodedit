import React from 'react'
import './Tutorial.css'
import TitleTuto from './TitleTuto'
import ListsTuto from './ListsTuto'

function Tutorial() {
  return (
    <div>
      <h1>Tutoriel</h1>
      <div>
        <div>
          <TitleTuto />
        </div>
        <div>
          <ListsTuto />
          <div>
            <h2>Les images :</h2>
            <p>![le titre de la photo entre crochet](le lien entre parenthèses après un point d'interrogation)</p>
            <p>![David Goodenough :](https://pbs.twimg.com/profile_images/1002930959191298049/6U0HUeKu_400x400.jpg)</p>
            <div>
              <p>David Goodenough :</p>
              <img alt="David Goodenough" src="https://pbs.twimg.com/profile_images/1002930959191298049/6U0HUeKu_400x400.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial