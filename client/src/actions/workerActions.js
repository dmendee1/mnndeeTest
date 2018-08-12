import axios from 'axios';
import { GET_DATA, ADD_DATA, DELETE_DATA, DATA_LOADING } from './types';

export const getWorkers = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/workers').then(res =>
    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  );
};

export const addWorker = item => dispatch => {
  axios.post('/api/workers', item).then(res =>
    dispatch({
      type: ADD_DATA,
      payload: res.data
    })
  );
};

export const deleteWorker = id => dispatch => {
  axios.delete(`/api/workers/${id}`).then(res =>
    dispatch({
      type: DELETE_DATA,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: DATA_LOADING
  };
};
