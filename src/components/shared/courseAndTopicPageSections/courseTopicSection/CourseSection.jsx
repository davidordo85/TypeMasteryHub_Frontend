//import React from 'react'

import PropTypes from 'prop-types';
import CourseList from './listCourse/CourseList';
import './CourseSection.css';

function CourseSection({ course }) {
  return (
    <div>
      <CourseList course={course} />
    </div>
  );
}

CourseSection.propTypes = {
  course: PropTypes.array,
};

export default CourseSection;
