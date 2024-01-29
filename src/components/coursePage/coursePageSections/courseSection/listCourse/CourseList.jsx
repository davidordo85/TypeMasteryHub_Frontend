//import React from 'react';
import PropTypes from 'prop-types';
import ListCourse from './ListCourse';

function CourseList({ topics, onTopicClick }) {
  const renderTopics = (topic, index) => (
    <ListCourse key={index} {...topic} onTopicClick={onTopicClick} />
  );
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center course-section">
      {topics.tests ? topics.tests.map(renderTopics) : topics.map(renderTopics)}
    </div>
  );
}

CourseList.propTypes = {
  topics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onTopicClick: PropTypes.func,
};

export default CourseList;
