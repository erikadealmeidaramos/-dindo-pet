import axios from 'axios';
import {apiUrl, authenticationSuccessMessage} from '../../utils/constants';
import {Dispatch} from 'redux';
import {login} from '../store/auth/actions';

export const authentication = async (
  email: string,
  password: string,
  dispatch: Dispatch,
) => {
  return new Promise<void>((resolve, reject) => {
    axios
      .post(`${apiUrl}user/login`, {email, password})
      .then(response => {
        const message = response.data.message;

        if (message == authenticationSuccessMessage) {
          const token = response.data.token;
          dispatch(login(token));

          resolve();
        } else {
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};

export const recoverPassword = async (email: string) => {
  return new Promise<void>((resolve, reject) => {
    axios({
      method: 'post',
      url: `${apiUrl}user/recoverpassword`,
      data: email,
      headers: {'Content-Type': 'text/plain'},
    })
      .then(response => {
        const message = response.data.message;

        if (response.status >= 200 && response.status <= 299) {
          resolve();
        } else {
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};
