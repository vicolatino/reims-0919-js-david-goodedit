import React from 'react'
import './Tutorial.css'

function UrlTuto() {
  return (
    <div className="boxUrl">
      <p>
        <strong>Les URL peuvent être écrites de cette façon </strong>  
        => [l'alias du site internet](l'URL du site)
      <br />
        ex : [Cat-bounce](https://cat-bounce.com/) => <a href="https://cat-bounce.com/">Cat-bounce</a>
      </p>
    </div>
  );
}

export default UrlTuto;