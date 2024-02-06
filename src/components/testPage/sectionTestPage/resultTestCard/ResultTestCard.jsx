//import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  CardFooter,
  Button,
  CardSubtitle,
} from 'react-bootstrap';
import StarsComponent from './starsComponent/StarsComponent';
//TODO: refactorizar un poco el codigo

function ResultTestCard({ errorCount, timeTest, lengthTest, performance }) {
  const timeCompleteTest = performance.max_time - timeTest;

  const calculatePPM = (timeCompleteTest, lengthTest) => {
    const timeInMinutes = timeCompleteTest / 60;
    const ppm = (lengthTest - errorCount) / timeInMinutes;
    return Math.round(ppm);
  };
  const ppmResult = calculatePPM(timeCompleteTest, lengthTest);

  return (
    <Card>
      <CardHeader>Prueba Completada</CardHeader>
      <CardBody className="d-flex flex-column">
        <CardTitle>Estrellas conseguidas: </CardTitle>
        <CardSubtitle className="text-center">
          <StarsComponent
            starsResult={performance}
            timeCompleteTest={timeCompleteTest}
            timeTest={timeTest}
          />
        </CardSubtitle>
        <CardTitle>Pulsaciones por minuto: </CardTitle>
        <CardSubtitle>{`${ppmResult} ppm`}</CardSubtitle>
        <CardTitle>Errores: </CardTitle>
        <CardSubtitle>{`- Has cometido ${errorCount} ${
          errorCount > 1 ? `errores` : `error`
        }`}</CardSubtitle>
        <CardText>
          {timeCompleteTest <= 180
            ? '- Has pasado la prueba'
            : '- No has pasado la prueba'}
        </CardText>
      </CardBody>

      <CardFooter className="d-flex justify-content-center">
        {timeCompleteTest <= 180 ? (
          /* TODO: falta darle la funcionalidad a los buttons */
          <Button>Guardar resultados</Button>
        ) : (
          <Button>Volver a empezar</Button>
        )}
      </CardFooter>
    </Card>
  );
}

ResultTestCard.propTypes = {
  errorCount: PropTypes.number,
  timeTest: PropTypes.number,
  lengthTest: PropTypes.number,
  performance: PropTypes.object,
};

export default ResultTestCard;
