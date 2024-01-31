//import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ListCourse({ name, title, order }) {
  const navigate = useNavigate();
  const params = useParams();
  const handleClick = (event, name, title) => {
    if (name) {
      navigate(`/topic/${name}`);
    } else if (title) {
      navigate(`/test/${params.name}/${title}`);
    }
  };
  return (
    <Card
      className="topic-card bg-dark text-white"
      onClick={event => handleClick(event, name, title)}
    >
      <Card.Title className="text-center mt-2">{order}</Card.Title>
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
