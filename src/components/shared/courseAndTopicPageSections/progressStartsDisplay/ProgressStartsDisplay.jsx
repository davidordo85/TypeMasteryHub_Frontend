import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import {
  getTotalTestsAndStars,
  getTotalTestsAndStarsForTopicName,
} from '../../../../api/results';
import { FaStar } from 'react-icons/fa';
import './ProgressStartsDisplay.css';

import PropTypes from 'prop-types';

function ProgressStartsDisplay({ course, topic }) {
  const [results, setResults] = React.useState({});
  const [percentage, setPercentage] = React.useState(0);
  const [starsEarned, setStarsEarned] = React.useState(0);
  const [totalStars, setTotalStars] = React.useState(0);

  const items = async () => {
    try {
      const items = await getTotalTestsAndStars();
      setResults(items.result);
    } catch {
      console.log('error');
    }
  };

  const itemsForTopicName = async topicName => {
    try {
      const items = await getTotalTestsAndStarsForTopicName(topicName);
      setResults(items.result);
    } catch {
      console.log('error');
    }
  };

  React.useEffect(() => {
    if (course && course.length > 0) {
      items();
      const numTestCompleted = results.totalTestsCompleted;
      const topicNumber = course[0].topics.length;
      const numberTestsTopic = course[0].topics.reduce((total, topic) => {
        return total + topic.num_test;
      }, 0);
      setPercentage(
        (numTestCompleted / (topicNumber * numberTestsTopic)) * 100,
      );
      setTotalStars(numberTestsTopic * 3);
      setStarsEarned(results.totalStarsEarned);
    } else if (topic && topic.length > 0) {
      console.log(
        'estoy en el topic',
        results.totalTestsCompleted,
        results.totalStarsEarned,
        topic[0].tests.length,
      );
      itemsForTopicName(topic[0].topicName);
      const numberTestsCompletedTopic = results.totalTestsCompleted;
      const numTestsInTopic = topic[0].tests.length;
      setPercentage((numberTestsCompletedTopic / numTestsInTopic) * 100);
      setTotalStars(numTestsInTopic * 3);
      setStarsEarned(results.totalStarsEarned);
    }
  }, [course, topic, results.totalTestsCompleted, results.totalStarsEarned]);

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
          {/* TODO: falta poner el numero de estrellas conseguidas */}
          <p className="star-paragraph">{`${starsEarned} / ${totalStars}`}</p>
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
