import { push } from 'connected-react-router';
import { snakeToCamelCase } from 'json-style-converter/es5';
import { store as RNC } from 'react-notifications-component';

import { postRegister, postLogin, postLogout, postForgot, postReset} from '_api/auth';
import { login, logout } from '_actions/user';

import { dispatchError } from '_utils/api';

export const attemptLogin = user => dispatch =>
  postLogin(user)
    .then(data => {
      dispatch(login(snakeToCamelCase(data.user)));

      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      dispatch(push('/dashboard'));
      return data;
    })
    .catch(dispatchError(dispatch));

export const attemptRegister = newUser => dispatch =>
  postRegister(newUser)
    .then(data => {
      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });
      return dispatch(attemptLogin(newUser));
    })
    .then(() => dispatch(push('/settings')))
    .catch(dispatchError(dispatch));

export const attemptLogout = () => dispatch =>
  postLogout()
    .then(data => {
      dispatch(logout());

      RNC.addNotification({
        title: 'Success!',
        message: data.message,
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });

      dispatch(push('/auth/login'));
      return data;
    })
    .catch(dispatchError(dispatch));

    export const attemptForgot = user => dispatch =>
    postForgot(user)
    .then(data => {
      RNC.addNotification({
        title: 'Success!',
        message: data?.message ?? "test",
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });
      return data;
    }).catch(dispatchError(dispatch));

    export const attemptReset = user => dispatch =>
    postReset(user)
    .then(data => {
      RNC.addNotification({
        title: 'Success!',
        message: data?.message ?? "test",
        type: 'success',
        container: 'top-right',
        animationIn: ['animated', 'fadeInRight'],
        animationOut: ['animated', 'fadeOutRight'],
        dismiss: {
          duration: 5000,
        },
      });
      dispatch(push('/auth/login'));
      return data;
    }).catch(dispatchError(dispatch));