import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CountDownClock.css';

const CountdownClock = ({ startCountdown, stopCountdown, getTime }) => {
  const [timeLeft, setTimeLeft] = React.useState(180);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (startCountdown) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
    };
  }, [startCountdown]);

  React.useEffect(() => {
    if (stopCountdown) {
      clearInterval(timerRef.current);
      getTime(timeLeft);
    }
  }, [stopCountdown, timeLeft, getTime]);

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
  stopCountdown: PropTypes.bool,
  getTime: PropTypes.func,
};

export default CountdownClock;
