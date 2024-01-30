//import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListCourse({ name, title, order }) {
  const navigate = useNavigate();
  const handleClick = (event, name) => {
    if (name) {
      navigate(`/topic/${name}`);
    }
  };
  return (
    <Card className="topic-card" onClick={event => handleClick(event, name)}>
      <Card.Title className="text-center">{order}</Card.Title>
      <Card.Body className="text-center">{name || title}</Card.Body>
    </Card>
  );
}

ListCourse.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  order: PropTypes.number,
};

export default ListCourse;
