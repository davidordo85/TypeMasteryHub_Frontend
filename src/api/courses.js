import client from './client';
const coursesBaseUrl = '/api/v1/course';

export const getCourse = () => {
  const url = `${coursesBaseUrl}`;
  return client.get(url);
};

export const getTopicForName = name => {
  const url = `${coursesBaseUrl}/${name}`;
  return client.get(url);
};
