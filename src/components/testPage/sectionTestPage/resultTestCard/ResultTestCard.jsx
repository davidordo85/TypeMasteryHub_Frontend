//import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  CardFooter,
  CardSubtitle,
} from 'react-bootstrap';
import StarsComponent from './starsComponent/StarsComponent';
import TestControl from './testControl/TestControl';
import { CalculateResults, compose } from '../../../components-hoc';
//TODO: hacer el onSubmit de guardar resultado

function ResultTestCard({
  ppm,
  resultStars,
  timeCompleteTest,
  errorCount,
  onStartTestAgain,
}) {
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

      <CardFooter>
        <TestControl onStartTestAgain={onStartTestAgain} />
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
  onStartTestAgain: PropTypes.func,
};

export default CalculateResultTestCard;
