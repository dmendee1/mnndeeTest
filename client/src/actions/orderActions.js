import axios from 'axios';
import { GET_DATA, ADD_DATA, DELETE_DATA, DATA_LOADING } from './types';

export const getOrders = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/orders').then(res =>
    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  );
};

export const getFilters = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/orders').then(res =>
    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  );
}

export const addOrder = item => dispatch => {
  axios.post('/api/orders', item).then(res =>
    dispatch({
      type: ADD_DATA,
      payload: res.data
    })
  );
};

export const deleteOrder = id => dispatch => {
  axios.delete(`/api/orders/${id}`).then(res =>
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
