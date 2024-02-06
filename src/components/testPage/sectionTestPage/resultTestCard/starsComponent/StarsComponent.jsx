import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

const StarsComponent = ({ starsResult, timeCompleteTest, timeTest }) => {
  console.log(starsResult);
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

  const resultStars = howManyStarts(starsResult, timeTest);

  return <div>{resultStars}</div>;
};

StarsComponent.propTypes = {
  starsResult: PropTypes.object,
  timeCompleteTest: PropTypes.number,
  timeTest: PropTypes.number,
};

export default StarsComponent;
