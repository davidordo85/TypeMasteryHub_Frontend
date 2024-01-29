//import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ListCourse({ name, title, order, onTopicClick }) {
  return (
    <Card
      className="topic-card"
      onClick={title ? null : event => onTopicClick(event, name)}
    >
      <Card.Title>{order}</Card.Title>
      <Card.Body>{name || title}</Card.Body>
    </Card>
  );
}

ListCourse.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  order: PropTypes.number,
  onTopicClick: PropTypes.func,
};

export default ListCourse;
