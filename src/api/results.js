import client from './client';
const authBaseUrl = '/api/v1/results';

export const addResult = results => {
  return client.put(`${authBaseUrl}/`, results);
};
