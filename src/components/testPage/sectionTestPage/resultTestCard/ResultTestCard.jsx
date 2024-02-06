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
import { CalculateResults, compose } from '../../../components-hoc';

function ResultTestCard({ ppm, resultStars, timeCompleteTest, errorCount }) {
  return (
    <Card>
      <CardHeader>Prueba Completada</CardHeader>
      <CardBody className="d-flex flex-column">
        <CardTitle>Estrellas conseguidas: </CardTitle>
        <CardSubtitle className="text-center">
          <StarsComponent resultStars={resultStars} />
        </CardSubtitle>
        <CardTitle>Pulsaciones por minuto: </CardTitle>
        <CardSubtitle>{`${ppm} ppm`}</CardSubtitle>
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

/* eslint-disable react/display-name */

const hoc = WrappedComponent => props => <WrappedComponent {...props} />;
const CalculateResultConfig = CalculateResults({});
const CalculateResultTestCard = compose(
  CalculateResultConfig,
  hoc,
)(ResultTestCard);

ResultTestCard.propTypes = {
  ppm: PropTypes.number,
  resultStars: PropTypes.object,
  timeCompleteTest: PropTypes.number,
  errorCount: PropTypes.number,
};

export default CalculateResultTestCard;
