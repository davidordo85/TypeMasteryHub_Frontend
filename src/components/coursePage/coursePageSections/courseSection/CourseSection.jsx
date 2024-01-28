//import React from 'react'
import { Container } from 'react-bootstrap';

import PropTypes from 'prop-types';
import CourseList from './listCourse/CourseList';

function CourseSection({ topics }) {
  return (
    <Container>
      <CourseList topics={topics} />
    </Container>
  );
}

CourseSection.propTypes = {
  topics: PropTypes.array,
};

export default CourseSection;
