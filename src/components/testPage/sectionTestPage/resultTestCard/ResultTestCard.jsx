//import React from 'react'
import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardFooter,
  Button,
} from 'react-bootstrap';

function ResultTestCard({ errorCount, time_set, length_test, performance }) {
  console.log(errorCount, time_set, length_test, performance);
  // TODO: enseñar datos dependiendo de las props
  return (
    <Card>
      <CardHeader>Prueba Completada</CardHeader>
      <CardBody className="d-flex flex-column">
        <CardText>Estrellas conseguidas</CardText>
        <CardText>Pulsaciones por minuto</CardText>
        <CardText>Errores</CardText>
        <CardText>Si has pasado la prueba o no</CardText>
      </CardBody>
      <CardFooter>
        <Button>Guardar resultados</Button>
      </CardFooter>
    </Card>
  );
}

ResultTestCard.propTypes = {
  errorCount: PropTypes.number,
  time_set: PropTypes.number,
  length_test: PropTypes.number,
  performance: PropTypes.object,
};

export default ResultTestCard;
