//import React from 'react'

import PropTypes from 'prop-types';
import CourseList from './listCourse/CourseList';

function CourseSection({ topics, onTopicClick }) {
  return (
    <div>
      <CourseList topics={topics} onTopicClick={onTopicClick} />
    </div>
  );
}

CourseSection.propTypes = {
  topics: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onTopicClick: PropTypes.func,
};

export default CourseSection;
