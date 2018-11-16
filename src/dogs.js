import React from 'react';

export default function Dogs(props) {

  const dog = props.dog;

    return(
      <section className='adoptDog'>
        {/* <header>
          <h2>Dogs</h2>
          <img src={dog.img} alt={dog.imageDescription}></img>
          <h3>Name: {dog.name}</h3>
        </header>
        <dl>
          <dd>sex: {dog.sex}</dd>
          <dt>Age: {dog.age}</dt>
          <dt>Breed: {dog.breed}</dt>
          <dd>Story: {dog.story}</dd>
        </dl>
        <button type='button'>Adopt!</button> */}
      </section>
    )
  }



