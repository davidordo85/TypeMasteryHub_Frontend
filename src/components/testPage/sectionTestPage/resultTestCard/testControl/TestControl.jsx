import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AlertComponent from '../../../../shared/alertComponent/AlertComponent';
import PropTypes from 'prop-types';
import { addResult } from '../../../../../api/results';

/*
 TODO: usar el AuthWithApi para la peticion al backend y meter mas datos
 */

function TestControl({
  topic_name,
  test_name,
  errorCount,
  ppm,
  stars,
  onStartTestAgain,
  timeCompleteTest,
}) {
  const result = {
    topic_name: topic_name,
    test_name: test_name,
    stars: stars,
    ppm: ppm,
    time_test: timeCompleteTest,
    errorCount: errorCount,
  };

  const [dataSubmitted, setDataSubmitted] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  const handleSubmit = async () => {
    setError();
    setIsLoading(true);
    try {
      await addResult(result);
      setDataSubmitted(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="d-flex justify-content-center flex-column mb-2">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="mb-2"
          disabled={dataSubmitted}
        >
          {isLoading ? (
            <>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
                className="mr-2"
              />
              Cargando...
            </>
          ) : (
            'Guardar resultados'
          )}
        </Button>
        {error ? <AlertComponent error={error.message} /> : null}
        <Button onClick={onStartTestAgain}>Volver a empezar</Button>
      </div>
      <div className="d-flex justify-content-around">
        {/* TODO: falta darle funcionalidad a siguiente */}
        <Link className="text-decoration-none">Siguiente</Link>
        <Link className="text-decoration-none" onClick={goBackHandler}>
          Volver al tema
        </Link>
      </div>
    </div>
  );
}

TestControl.propTypes = {
  topic_name: PropTypes.string,
  test_name: PropTypes.string,
  errorCount: PropTypes.number,
  ppm: PropTypes.number,
  stars: PropTypes.number,
  onStartTestAgain: PropTypes.func,
  timeCompleteTest: PropTypes.number,
};

export default TestControl;
