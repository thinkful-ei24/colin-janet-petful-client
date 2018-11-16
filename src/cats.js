import React from 'react';


export default function Cats(props) {
  
  return(
    <section className='adoptCat'>
     
    <header>
      <h2>Cats</h2>
      <img src={props.catImageUrl} alt = {props.catImageDesc}></img>
      <h3>Name: {props.catName}</h3>
    </header>
    <dl>
    <dd>sex: {props.catSex}</dd>
    <dt>Age: {props.catAge}</dt>
    <dt>Breed: {props.catBreed}</dt>
    <dd>Story: {props.catStory}</dd>
    </dl>
    <button type='button' onClick= {props.catsClick}>Adopt!</button>
    </section>
  )
}


