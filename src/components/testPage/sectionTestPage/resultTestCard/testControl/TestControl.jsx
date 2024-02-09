//import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function TestControl({ onStartTestAgain }) {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center flex-column mb-2">
        <Button className="mb-2">Guardar resultado</Button>
        <Button onClick={onStartTestAgain}>Volver a empezar</Button>
      </div>
      <div className="d-flex justify-content-around">
        <Link className="text-decoration-none">Siguiente</Link>
        {/* TODO: Crear un componente button para ir atras, para usarlo en la pagina tema y curso. Ver como colocarlo aqui tambien*/}
        <Link className="text-decoration-none" onClick={goBackHandler}>
          Volver al tema
        </Link>
      </div>
    </div>
  );
}

TestControl.propTypes = {
  onStartTestAgain: PropTypes.func,
};

export default TestControl;
