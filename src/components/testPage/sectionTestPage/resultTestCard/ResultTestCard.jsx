//import React from 'react';
import { FaStar } from 'react-icons/fa';
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
//TODO: refactorizar un poco el codigo

function ResultTestCard({ errorCount, timeTest, lengthTest, performance }) {
  const timeCompleteTest = performance.max_time - timeTest;
  const howManyStarts = performance => {
    const goldTime = performance.levels.gold.max_time;
    const goldStars = performance.levels.gold.stars;
    const silverTime = performance.levels.silver.max_time;
    const silverStars = performance.levels.silver.stars;
    const copperTime = performance.levels.copper.max_time;
    const copperStars = performance.levels.copper.stars;
    if (timeCompleteTest <= goldTime) {
      return Array.from({ length: goldStars }, (_, index) => (
        <FaStar style={{ color: 'gold' }} key={index} />
      ));
    } else if (timeCompleteTest <= silverTime) {
      return Array.from({ length: silverStars }, (_, index) => (
        <FaStar style={{ color: 'gold' }} key={index} />
      ));
    } else if (timeCompleteTest <= copperTime) {
      return Array.from({ length: copperStars }, (_, index) => (
        <FaStar style={{ color: 'gold' }} key={index} />
      ));
    } else {
      return 'Sin estrellas';
    }
  };

  const calculatePPM = (timeCompleteTest, lengthTest) => {
    const timeInMinutes = timeCompleteTest / 60;
    const ppm = (lengthTest - errorCount) / timeInMinutes;
    return Math.round(ppm);
  };

  const starsResult = howManyStarts(performance, timeTest);
  const ppmResult = calculatePPM(timeCompleteTest, lengthTest);

  return (
    <Card>
      <CardHeader>Prueba Completada</CardHeader>
      <CardBody className="d-flex flex-column">
        <CardTitle>Estrellas conseguidas: </CardTitle>
        <CardSubtitle className="text-center">{starsResult}</CardSubtitle>
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
