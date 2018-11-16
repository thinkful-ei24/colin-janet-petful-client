import React from 'react';
import Dogs from './dogs';
import Cats from './cats';

export default class Dashboard extends React.Component{

render(){
  return(
    <section className='adoptPet'>
    <h1> Adopt an Pet today!</h1>
    <Dogs/>
    <Cats/>
    </section>
  );
}
}