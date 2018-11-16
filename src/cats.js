import React from 'react';


export default function Cats(props) {
  
  return(
    <section className='adoptCat'>
      <img src={props.catImageUrl}></img>
    <header>
      <h2>Cats</h2>
    <h3>Name: {props.catName}</h3>
    </header>
    <dl>
    <dd>sex: {props.catSex}</dd>
    <dt>Age: {props.catAge}</dt>
    <dt>Breed: {props.catBreed}</dt>
    <dd>Story: {props.catStory}</dd>
    </dl>
    <button type='button'>Adopt!</button>
    </section>
  )
}


