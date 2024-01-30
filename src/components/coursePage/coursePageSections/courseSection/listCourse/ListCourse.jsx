//import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListCourse({ name, order }) {
  const navigate = useNavigate();
  const handleClick = (event, name) => {
    navigate(`/topic/${name}`);
  };
  return (
    <Card className="topic-card" onClick={event => handleClick(event, name)}>
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
