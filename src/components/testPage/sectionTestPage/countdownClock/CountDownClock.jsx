import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CountDownClock.css';

const CountdownClock = ({ startCountdown }) => {
  const [timeLeft, setTimeLeft] = React.useState(180);

  React.useEffect(() => {
    let timer;

    if (startCountdown) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [startCountdown]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="d-flex badge-container">
      <Badge
        bg="light"
        className="d-flex align-items-center text-black badge-countdown"
      >
        {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
        <FaClock className="fa-clock" />
      </Badge>
    </div>
  );
};

CountdownClock.propTypes = {
  startCountdown: PropTypes.bool,
};

export default CountdownClock;
