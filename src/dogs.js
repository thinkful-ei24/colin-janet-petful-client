import React from 'react';

export default function Dogs(props) {

    return(
      <section className='adoptDog'>
        <header>
          <h2>Dogs</h2>
          <img src={props.dogimageUrl} alt={props.dogimageDesc}></img>
          <h3>Name: {props.dogName}</h3>
        </header>
        <dl>
          <dd>sex: {props.dogSex}</dd>
          <dt>Age: {props.dogAge}</dt>
          <dt>Breed: {props.dogBreed}</dt>
          <dd>Story: {props.dogStory}</dd>
        </dl>
        <button type='button'>Adopt!</button>
      </section>
    )
  }


