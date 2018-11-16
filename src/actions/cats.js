import axios from 'axios';
import {SERVER} from '../config';




export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});



export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS'
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat: cat
});

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR';
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error: error
});

export const getCat = () => (dispatch) => {

  dispatch(fetchCatRequest());
  axios.get(`${SERVER}/cats`)
    .then(({data}) => {
      dispatch(fetchCatSuccess(data));
    })
    .catch(error => dispatch(fetchCatError(error)));
}

export const deleteCat = () => dispatch => {
  axios.delete(`${SERVER}/cats`)
    .then(response => {
      dispatch(getCat());
    })
    .catch(error => dispatch(fetchCatError(error)))
}
