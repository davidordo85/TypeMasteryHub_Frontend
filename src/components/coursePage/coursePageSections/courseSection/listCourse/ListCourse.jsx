//import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ListCourse({ name }) {
  return (
    <Card>
      <Card.Title>{name}</Card.Title>
    </Card>
  );
}

ListCourse.propTypes = {
  name: PropTypes.string,
};

export default ListCourse;
