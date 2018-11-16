import React from 'react';
import Dogs from './dogs';
import Cats from './cats';
import {getCat} from './actions/cats';
import {getDog, deleteDog} from './actions/dogs.js';
import {connect} from 'react-redux';

export class Dashboard extends React.Component{
componentDidMount(){
  this.props.dispatch(getCat());
  this.props.dispatch(getDog());
}
render(){

  console.log(this.props.cat);
  return(
    <section className='petContainer'>
      <h1> Adopt an Pet today!</h1>
      <section className='adoptPet'>
    <Dogs
      dogName={this.props.dogName}
      dogAge={this.props.dogAge}
      dogBreed={this.props.dogBreed}
      dogimageUrl={this.props.dogimageUrl}
      dogImageDesc={this.props.dogimageDesc}
      dogSex={this.props.dogSex}
      dogStory= {this.props.dogStory}
      adoptDog={() => this.props.dispatch(deleteDog())}
    />
    <Cats
      catName={this.props.catName}
      catAge={this.props.catAge}
      catBreed={this.props.catBreed}
      catImageUrl={this.props.catimageUrl}
      catImageDesc={this.props.catimageDesc}
      catSex={this.props.catSex}
      catStory= {this.props.catStory}
    />
  </section>
</section>
  );
}
}

const mapStateToProps = (state)=>{
      return{
        catName: state.cat.currentCat.name,
        catAge: state.cat.currentCat.age,
        catBreed: state.cat.currentCat.breed,
        catimageUrl: state.cat.currentCat.imageURL,
        catimageDesc: state.cat.currentCat.imageDescription,
        catSex: state.cat.currentCat.sex,
        catStory: state.cat.currentCat.story,
        dogName: state.dog.currentDog.name,
        dogAge: state.dog.currentDog.age,
        dogBreed: state.dog.currentDog.breed,
        dogimageUrl: state.dog.currentDog.imageURL,
        dogimageDesc: state.dog.currentDog.imageDescription,
        dogSex: state.dog.currentDog.sex,
        dogStory: state.dog.currentDog.story

      }
};

export default connect(mapStateToProps)(Dashboard);
