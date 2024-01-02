import React, { useState } from 'react';


function Site({id, name, image, source, description, show, removeItem}) {
  
    const [showState, setShowState] = useState(show);


  const showText = () => {
    setShowState(!showState);
  }

  return (
    <div className="container" key={id}>
        <div className='wrapper'>
       
       <div className="container">
         <h1>{id} - {name}</h1>
       </div>

       <div className="container">
        <img className="img" src={image} alt="pic"/>
       </div>
        

       <div className="container">
       <p>source:{source}</p>
       </div>


       <div className="container">
        <h2>{showState? description:description.substring(0, 200)} 
        <button className="showBtn" onClick={showText}>{showState? "Show less...":"Show more..."}</button>
        </h2>
       </div>

       <div className="container">
        <button className='btn' onClick={removeItem}>Explored!</button>
       </div>

       </div>
    </div>
  )
}

export default Site;