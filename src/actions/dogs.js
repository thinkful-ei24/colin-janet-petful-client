import axios from 'axios';
import {SERVER} from '../config.js';
export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
});

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog: dog
});

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error: error
});

export const getDog = () => (dispatch) => {
  dispatch(fetchDogRequest());
  axios.get(`${SERVER}/dogs`)
    .then(({data}) => {
      dispatch(fetchDogSuccess(data))
    })
    .catch(error => dispatch(fetchDogError(error)));
}

export const deleteDog = () => dispatch => {
  axios.delete(`${SERVER}/dogs`)
    .then(response => {
      dispatch(getDog());
    })
    .catch(error => dispatch(fetchDogError(error)))
}
