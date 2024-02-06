//import React from 'react';
import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function CalculateResults() {
  return function (WrappedComponent) {
    const CalculateResultsComponent = props => {
      const errorCount = props.errorCount;
      /**
       * Cálculo tiempo de prueba
       */
      const timeCompleteTest = props.performance.max_time - props.timeTest;

      /*
       * Cálculo renderizar estrellas
       */
      const howManyStarts = stars => {
        const goldTime = stars.levels.gold.max_time;
        const silverTime = stars.levels.silver.max_time;
        const copperTime = stars.levels.copper.max_time;
        const starsColor = [
          timeCompleteTest <= goldTime ? 'gold' : 'grey',
          timeCompleteTest <= silverTime ? 'gold' : 'grey',
          timeCompleteTest <= copperTime ? 'gold' : 'grey',
        ];

        return (
          <span>
            {starsColor.map((color, index) => (
              <FaStar style={{ color }} key={index} />
            ))}
          </span>
        );
      };

      const resultStars = howManyStarts(props.performance, props.timeTest);

      /*
       * Calculo ppm
       */
      const calculatePPM = (timeCompleteTest, lengthTest) => {
        const timeInMinutes = timeCompleteTest / 60;
        const ppm = (lengthTest - errorCount) / timeInMinutes;
        return Math.round(ppm);
      };

      const ppmResult = calculatePPM(timeCompleteTest, props.lengthTest);
      return (
        <WrappedComponent
          ppm={ppmResult}
          resultStars={resultStars}
          timeCompleteTest={timeCompleteTest}
          errorCount={errorCount}
          {...props}
        />
      );
    };

    CalculateResultsComponent.displayName = `CalculateResult(${getDisplayName(
      WrappedComponent,
    )})`;

    CalculateResultsComponent.propTypes = {
      performance: PropTypes.object.isRequired,
      timeTest: PropTypes.number.isRequired,
      errorCount: PropTypes.number.isRequired,
      lengthTest: PropTypes.number.isRequired,
    };
    return CalculateResultsComponent;
  };
}

export default CalculateResults;
