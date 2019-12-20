import React from 'react'
import './Tutorial.css'

function DavidGoodenough() {
  return (
    <div>
      <audio onLoadedData={(event) => { const audio = event.target; setTimeout(() =>  audio.play(), 100) }}>
        <source src="David.mp3" type="audio/mpeg" />
         Your browser does not support the audio element.
      </audio>
      <img src="https://zupimages.net/up/19/51/n6a3.jpg" alt="" className="GoodEnough"/>
    </div>
  );
}

export default DavidGoodenough