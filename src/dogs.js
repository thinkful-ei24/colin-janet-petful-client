import React from 'react';

export default class Dogs extends React.Component{



  render(){
return(
  <section className='adoptDog'>
  <header>
    <h2>Dogs</h2>
    <img src='https://images.unsplash.com/photo-1534628526458-a8de087b1123?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjM5OTI2fQ&s=ad020057ed4d4d17562142093cd9af3f'></img>
  <h3>Name: Place Holder</h3>
  </header>
  <dl>
  <dd>sex: Place Holder</dd>
  <dt>Age: Place Holder</dt>
  <dt>Breed: French Bull Dog</dt>
  <dd>Story: Place Holder</dd>
  </dl>

  </section>
)
  }
}
