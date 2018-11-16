import axios from

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
});


export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS
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
    .then(({cat}) => {
      dispatch(fetchCatSuccess(cat))
    })
    .catch(error => dispatch(fetchCatError(error)));
}

//TODO make delete endpoint
//
export const deleteCat = () => dispatch => {
  dispatch(fetchCat());
  axios.delete(`${SERVER}/cats`)
    .then(response => {
      dispatch(getCat());
    })
    .catch(error => dispatch(fetchCatError(error)))
}
