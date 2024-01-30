//import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ListCourse({ name, order }) {
  return (
    <Card className="topic-card">
      <Card.Title className="text-center">{order}</Card.Title>
      <Card.Body className="text-center">{name}</Card.Body>
    </Card>
  );
}

ListCourse.propTypes = {
  name: PropTypes.string,
  order: PropTypes.number,
};

export default ListCourse;
