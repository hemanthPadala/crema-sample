import {
  FETCH_START,
  FETCH_SUCCESS,
  SET_AUTH_TOKEN,
  SIGNOUT_AUTH_SUCCESS,
  UPDATE_AUTH_USER,
} from '../../shared/constants/ActionTypes';
import jwtAxios from '../../@crema/services/auth/jwt-auth/jwt-api';
import {fetchError, fetchStart, fetchSuccess} from './Common';
import {AuthType} from '../../shared/constants/AppEnums';
import {defaultUser} from '../../shared/constants/AppConst';

export const onJwtUserSignUp = ({email, password, name}) => {
  console.log('email, password', {email, password, name});
  return async (dispatch) => {
    dispatch(fetchStart());
    const body = {email, name, password};
    try {
      const res = await jwtAxios.post('users', body);
      localStorage.setItem('token', res.data.token);
      dispatch(setJWTToken(res.data.token));
      dispatch(loadJWTUser());
    } catch (err) {
      console.log('error!!!!', err.response.data.error);
      dispatch(fetchError(err.response.data.error));
    }
  };
};

export const onJwtSignIn = ({email, password}) => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const body = {email, password};
    try {
      const res = await jwtAxios.post('auth', body);
      localStorage.setItem('token', res.data.token);
      dispatch(setJWTToken(res.data.token));
      dispatch(loadJWTUser());
    } catch (err) {
      console.log('error!!!!', err.response.data.error);
      dispatch(fetchError(err.response.data.error));
    }
  };
};

export const loadJWTUser = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await jwtAxios.get('/auth');
      dispatch(fetchSuccess());
      console.log('res.data', res.data);
      dispatch({
        type: UPDATE_AUTH_USER,
        payload: {
          authType: AuthType.JWT_AUTH,
          displayName: res.data.name,
          email: res.data.email,
          role: defaultUser.role,
          token: res.data._id,
          photoURL: res.data.avatar,
        },
      });
    } catch (err) {
      console.log('error!!!!', err.response.error);
      dispatch(fetchError(err.response.error));
    }
  };
};

export const setJWTToken = (token) => {
  return async (dispatch) => {
    dispatch({
      type: SET_AUTH_TOKEN,
      payload: token,
    });
  };
};

export const onJWTAuthSignout = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    setTimeout(() => {
      dispatch({type: SIGNOUT_AUTH_SUCCESS});
      dispatch({type: FETCH_SUCCESS});
      localStorage.removeItem('token');
    }, 500);
  };
};
