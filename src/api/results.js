import client from './client';
const resultsBaseUrl = '/api/v1/results';

export const getResults = () => {
  const url = `${resultsBaseUrl}`;
  return client.get(url);
};

export const addResult = results => {
  return client.put(`${resultsBaseUrl}/`, results);
};
