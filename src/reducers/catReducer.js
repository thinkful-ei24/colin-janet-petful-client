import {FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR} from '../actions/cats';


const initialState = {
  currentCat:{
    name:null,
    age:null,
    breed:null,
    imageDescription: null,
    imageUrl: null,
    sex: null,
    story: null
  },
  loading: false,
  error: null
}

const catReducer = (state=initialState, action) =>{
if(action.type===FETCH_CAT_SUCCESS){
  return Object.assign({},state, {currentCat:action.cat, loading:false, error:null})
}
else if(action.type===FETCH_CAT_REQUEST){
  return Object.assign({},state, {loading:true, error:null} )
}
else if(action.type===FETCH_CAT_ERROR){
  return Object.assign({},state, {loading:false, error:action.error} )
}

return state;
};

export default catReducer;