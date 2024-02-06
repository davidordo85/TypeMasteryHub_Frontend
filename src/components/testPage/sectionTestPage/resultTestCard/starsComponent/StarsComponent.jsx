import PropTypes from 'prop-types';

const StarsComponent = ({ resultStars }) => {
  return <div>{resultStars}</div>;
};

StarsComponent.propTypes = {
  resultStars: PropTypes.any,
};

export default StarsComponent;
