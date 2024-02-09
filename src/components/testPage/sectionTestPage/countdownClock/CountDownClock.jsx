import React from 'react';
import { FaClock } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './CountDownClock.css';

const CountdownClock = ({
  maxTime,
  startCountdown,
  stopCountdown,
  getTime,
  startTest,
}) => {
  const [timeLeft, setTimeLeft] = React.useState(maxTime);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (startCountdown) {
      if (startTest) {
        setTimeLeft(maxTime);
      }

      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timerRef.current);
    }
  }, [startTest, startCountdown, maxTime]);

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
  maxTime: PropTypes.number,
  startCountdown: PropTypes.bool,
  stopCountdown: PropTypes.bool,
  startTest: PropTypes.bool,
  getTime: PropTypes.func,
};

export default CountdownClock;
