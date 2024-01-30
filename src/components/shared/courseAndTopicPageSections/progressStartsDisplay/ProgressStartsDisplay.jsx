//import React from 'react'
import { Container, ProgressBar } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './ProgressStartsDisplay.css';

import PropTypes from 'prop-types';

function ProgressStartsDisplay({ now }) {
  return (
    <Container className="container-progress p-3 d-flex align-items-center justify-content-center text-white">
      {/* TODO: falta darle funcionalidad, ver donde ponerlo si aqui o en el navbar */}
      <div className="percentage-complete">
        <h1>Porcentaje completado</h1>
        <div className="mt-2">
          <ProgressBar
            className="bg-dark"
            animated
            striped
            variant="warning"
            now={now}
          />
          <p className="mt-2">{`${now}% completado`}</p>
        </div>
      </div>
      <div className="stars-complete">
        <h1>Estrellas conseguidas</h1>
        <div className="d-flex mt-2">
          <p className="star-paragraph">3/24</p>
          <FaStar color="gold" />
        </div>
      </div>
    </Container>
  );
}

ProgressStartsDisplay.propTypes = {
  now: PropTypes.number,
};

export default ProgressStartsDisplay;
