import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { getResults } from '../../../../api/results';
import { FaStar } from 'react-icons/fa';
import './ProgressStartsDisplay.css';

import PropTypes from 'prop-types';

function ProgressStartsDisplay({ course, topic }) {
  const [results, setResults] = React.useState({
    test_completed: 0,
    total_stars_earned: 0,
  });
  const [percentage, setPercentage] = React.useState(0);
  const [totalStars, setTotalStars] = React.useState(0);

  const result = async () => {
    try {
      const items = await getResults();
      setResults(items.result);
    } catch {
      console.log('error');
    }
  };

  React.useEffect(() => {
    result();
    if (course && course.length > 0) {
      // hacer el calculo de el porcentaje para course
      const numberTopicCourse = course[0].topics.length;
      const numberTestsTopic = course[0].topics.reduce((total, topic) => {
        return total + topic.num_test;
      }, 0);
      setPercentage(
        (results.test_completed / (numberTopicCourse * numberTestsTopic)) * 100,
      );
      setTotalStars(numberTestsTopic * 3);
    } else if (topic && topic.length > 0) {
      const numTest = topic[0].tests.length;
      console.log('porcentaje topic', topic, numTest);
      // hacer el calculo de el porcentaje para topic
    } else {
      // no hacer nada
    }
  }, [course, topic, results.test_completed, results.total_stars_earned]);

  return (
    <Container className="container-progress p-3 d-flex align-items-center justify-content-center text-white">
      {/* TODO: falta darle funcionalidad, ver donde ponerlo si aqui o en el navbar */}
      <div className="percentage-complete">
        <h1>Porcentaje completado</h1>
        <div className="mt-2">
          <ProgressBar className="bg-dark" animated striped variant="warning" />
          <p className="mt-2">{`${percentage} %`}</p>
        </div>
      </div>
      <div className="stars-complete">
        <h1>Estrellas conseguidas</h1>
        <div className="d-flex mt-2">
          <p className="star-paragraph">{`${results.total_stars_earned} / ${totalStars}`}</p>
          <FaStar color="gold" />
        </div>
      </div>
    </Container>
  );
}

ProgressStartsDisplay.propTypes = {
  course: PropTypes.array,
  topic: PropTypes.array,
};

export default ProgressStartsDisplay;
