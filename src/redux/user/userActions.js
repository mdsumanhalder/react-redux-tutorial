import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";
import axios from "axios";
export const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
// async action creator
export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data;
        console.log(users);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => dispatch(fetchUserFailure(error.message)));
  };
};
