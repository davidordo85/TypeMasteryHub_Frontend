//import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function TestControl({ onStartTestAgain }) {
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center flex-column mb-2">
        <Button className="mb-2">Guardar resultado</Button>
        <Button onClick={onStartTestAgain}>Volver a empezar</Button>
      </div>
      <div className="d-flex justify-content-around">
        <Link className="text-decoration-none">Siguiente</Link>
        <Link className="text-decoration-none">Volver al tema</Link>
      </div>
    </div>
  );
}

TestControl.propTypes = {
  onStartTestAgain: PropTypes.func,
};

export default TestControl;
