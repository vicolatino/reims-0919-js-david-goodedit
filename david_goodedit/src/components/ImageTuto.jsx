import React from 'react'
import './Tutorial.css'

function ImageTuto() {
  return (
    <div className='boxImage'>
      <p>
        <strong>
          Pour insérer une photo, on écrit de la manière suivante:{' '}
        </strong>
        <br />
        ![le titre de la photo entre crochet](le lien entre parenthèses après un
        point d'interrogation)
      </p>
      <p>
        ![David Goodenough
        :](https://pbs.twimg.com/profile_images/1002930959191298049/6U0HUeKu_400x400.jpg)
      </p>
      <div>
        <p>David Goodenough :</p>
        <img
          alt='David Goodenough'
          src='https://pbs.twimg.com/profile_images/1002930959191298049/6U0HUeKu_400x400.jpg'
        />
      </div>
    </div>
  )
}

export default ImageTuto
