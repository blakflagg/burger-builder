import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};


export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};


export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};
export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    },expirationTime * 1000)
  };
};
export const auth = (email, password, isSignup) => {
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true
  }
  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCt3qfAD17iBWYwBO3H3HhCkiijdjrWeQ8';

  if (!isSignup) {
    url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCt3qfAD17iBWYwBO3H3HhCkiijdjrWeQ8';
  }

  return dispatch => {
    dispatch(authStart());
    axios.post(url, authData)
      .then(response => {
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      })
  };
};