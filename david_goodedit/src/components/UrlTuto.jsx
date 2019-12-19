import React from 'react'
import './Tutorial.css'

function UrlTuto() {
  return (
    <div>
      <h2>Les URL :</h2>
        <p>
          Les URL peuvent être écrites de cette façon : 
          [l'alias du site internet](l'URL du site)
        <br />
          ex : [Cat-bounce](https://cat-bounce.com/) => <a href="https://cat-bounce.com/">Cat-bounce</a>
        </p>
    </div>
  );
}

export default UrlTuto;