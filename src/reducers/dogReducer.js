import {
  FETCH_DOG_ERROR,
  FETCH_DOG_REQUEST,
  FETCH_DOG_SUCCESS
} from '../actions/dogs.js';

const initialState = {
  currentDog:{
    imageURL: null,
    imageDescription: null,
    name: null,
    sex: null,
    age: null,
    breed: null,
    story: null
  },
  loading: false,
  error: null
}

const dogReducer = (state=initialState, action) =>{
if(action.type===FETCH_DOG_SUCCESS){
  return Object.assign({},state, {currentDog:action.dog, loading:false, error:null} )
}
else if(action.type===FETCH_DOG_REQUEST){
  return Object.assign({},state, {loading:true, error:null} )
}
else if(action.type===FETCH_DOG_ERROR){
  return Object.assign({},state, {loading:false, error:action.error} )
}

return state;
};

export default dogReducer;
