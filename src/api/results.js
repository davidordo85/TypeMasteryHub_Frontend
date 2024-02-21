import client from './client';
const resultsBaseUrl = '/api/v1/results';

export const getResults = () => {
  const url = `${resultsBaseUrl}`;
  return client.get(url);
};

export const getTotalTestsAndStars = () => {
  const url = `${resultsBaseUrl}/totalTestsAndTotalStars`;
  return client.get(url);
};

export const getTotalTestsAndStarsForTopicName = topicName => {
  const url = `${resultsBaseUrl}/totalTestsAndTotalStars/${topicName}`;
  return client.get(url);
};

export const addResult = results => {
  console.log(results);
  return client.put(`${resultsBaseUrl}/`, results);
};
