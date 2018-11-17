import React from 'react';
import Dogs from './dogs';
import Cats from './cats';
import {getCat} from './actions/cats';
import {deleteCat} from './actions/cats';
import {getDog, deleteDog} from './actions/dogs.js';
import {connect} from 'react-redux';
import NoAdoption from './noAdoption.js';

export class Dashboard extends React.Component{
componentDidMount(){
  this.props.dispatch(getCat());
  this.props.dispatch(getDog());
}
render(){
  //const dogArea = this.props.dogName !== null ? <Dogs /> : <noAdoption />
  //const catArea = this.props.catName !== null ? <Dogs /> : <noAdoption />


  console.log(this.props.cat);
  return(
    <section className='petContainer'>
      <h1> Adopt an Pet today!</h1>
      <section className='adoptPet'>
       
        {!this.props.dogName && <NoAdoption animalType='Dogs' />}

        {this.props.dogName && <Dogs
          dogName={this.props.dogName}
          dogAge={this.props.dogAge}
          dogBreed={this.props.dogBreed}
          dogimageUrl={this.props.dogimageUrl}
          dogImageDesc={this.props.dogimageDesc}
          dogSex={this.props.dogSex}
          dogStory= {this.props.dogStory}
          adoptDog={() => this.props.dispatch(deleteDog())}
        />}

         {!this.props.catName && <NoAdoption animalType='Cats' />}
        {this.props.catName && <Cats
          catName={this.props.catName}
          catAge={this.props.catAge}
          catBreed={this.props.catBreed}
          catImageUrl={this.props.catimageUrl}
          catImageDesc={this.props.catimageDesc}
          catSex={this.props.catSex}
          catStory= {this.props.catStory}
          catsClick= {()=>this.props.dispatch(deleteCat())}
        />}
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
        dogStory: state.dog.currentDog.story,
      }
};

export default connect(mapStateToProps)(Dashboard);
