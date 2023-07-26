import axios from 'axios';
import {apiUrl} from '../../utils/constants';
import {User, UserModel} from '../../model/User';
import {Dispatch} from 'redux';
import {logout} from '../store/auth/actions';

export const userProfileService = async (token: string | null) => {
  return new Promise<User>((resolve, reject) => {
    axios
      .get(`${apiUrl}user/`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const user = new UserModel(response.data);
          resolve(user);
        } else {
          console.log(response);
          const message = response.data.message;
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};

export const updateUserProfileService = async (
  token: string | null,
  user: User,
) => {
  return new Promise<User>((resolve, reject) => {
    axios
      .put(`${apiUrl}user/`, JSON.stringify(user), {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const user = new UserModel(response.data);
          resolve(user);
        } else {
          console.log(response);
          const message = response.data.message;
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};

export const registerUserProfileService = async (
  token: string | null,
  user: User,
) => {
  return new Promise<User>((resolve, reject) => {
    axios
      .post(`${apiUrl}user/register`, JSON.stringify(user), {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const user = new UserModel(response.data);
          resolve(user);
        } else {
          console.log(response);
          const message = response.data.message;
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};

export const userDeleteService = async (
  token: string | null,
  user: User,
  dispatch: Dispatch,
) => {
  return new Promise<User | null>((resolve, reject) => {
    axios
      .delete(`${apiUrl}user/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          const user = new UserModel(response.data);
          dispatch(logout());
          resolve(user);
        } else {
          console.log(response);
          const message = response.data.message;
          reject(new Error(message));
        }
      })
      .catch(error => {
        console.log(error.response.data);
        reject(new Error(error.response.data.message));
      });
  });
};
