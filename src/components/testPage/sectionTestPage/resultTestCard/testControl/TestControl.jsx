//import React from 'react'
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addResult } from '../../../../../api/auth';

function TestControl({
  id_topic,
  id_test,
  //errorCount,
  ppm,
  stars,
  onStartTestAgain,
}) {
  const result = {
    id_topic: id_topic,
    id_test: id_test,
    stars: stars,
    ppm: ppm,
  };
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    try {
      await addResult(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center flex-column mb-2">
        <Button type="submit" onClick={handleSubmit} className="mb-2">
          Guardar resultado
        </Button>
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
  id_topic: PropTypes.string,
  id_test: PropTypes.string,
  errorCount: PropTypes.number,
  ppm: PropTypes.number,
  stars: PropTypes.number,
  onStartTestAgain: PropTypes.func,
};

export default TestControl;
