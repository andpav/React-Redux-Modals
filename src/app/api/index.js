'use strict';

const url = 'http://api-stage.shoptiques.net';
const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': url,
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  'signature': 'BYPASS',
  'timestamp': +(new Date()),
  'app_id': 'pos',
};

export const login = (credentials) => {
  const params = { method: 'POST', headers: Object.assign({}, headers, credentials) };
  console.log(params.headers);
  return fetch(`${url}/v1/auth/login`, params)
    .then((resp) => resp.json(), (err) => ({ type: 'error', error: err }));
};