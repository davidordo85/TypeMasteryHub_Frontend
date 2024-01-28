//import React from 'react';
import PropTypes from 'prop-types';
import ListCourse from './ListCourse';
import { Row } from 'react-bootstrap';

function CourseList({ topics }) {
  const renderTopics = (topic, index) => (
    <ListCourse key={index} name={topic.name} />
  );
  return (
    <div>
      <Row>{topics.map(renderTopics)}</Row>
    </div>
  );
}

CourseList.propTypes = {
  topics: PropTypes.array,
};

export default CourseList;
