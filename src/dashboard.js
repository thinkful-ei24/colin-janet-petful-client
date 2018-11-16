import React from 'react';
import Dogs from './dogs';
import Cats from './cats';
import {getCat} from './actions/cats';
import { connect } from 'react-redux';

export class Dashboard extends React.Component{
componentDidMount(){
this.props.dispatch(getCat());
}


render(){
  console.log(this.catName, 'catname');
  return(
    <section className='petContainer'>
    <h1> Adopt an Pet today!</h1>
    <section className='adoptPet'>
    <Dogs/>
    <Cats catName={this.catName}/>
    </section>
    </section>
  );
}
}

const mapStateToProps= (state)=>{
return {
  catName: state.cat
}
}

export default connect(mapStateToProps)(Dashboard);