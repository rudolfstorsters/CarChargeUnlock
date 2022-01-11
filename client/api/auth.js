import request from 'superagent';
import { handleSuccess, handleError } from '_utils/api';

export const postRegister = user =>
  request.post('/api/auth/register')
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogin = user =>
  request.post('/api/auth/login')
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postLogout = () =>
  request.post('/api/auth/logout')
    .then(handleSuccess)
    .catch(handleError);

  export const postForgot = (user) =>
    request.post('/api/auth/forgot')
    .send(user)
    .then(handleSuccess)
    .catch(handleError);

export const postReset = (user) =>
  request.post('/api/auth/reset')
    .send(user)
    .then(handleSuccess)
    .catch(handleError)
