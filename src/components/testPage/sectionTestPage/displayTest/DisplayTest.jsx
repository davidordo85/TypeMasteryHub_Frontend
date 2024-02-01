import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DisplayTest({ text, characterCorrect }) {
  const characters = text.split('');

  const renderText = () => {
    return characters.map((char, index) => {
      const isCorrect = index < characterCorrect;

      if (isCorrect) {
        return (
          <span key={index} style={{ color: 'green' }}>
            {char}
          </span>
        );
      } else {
        return (
          <span key={index} style={{ color: 'black' }}>
            {char}
          </span>
        );
      }
    });
  };

  return (
    <Card className="">
      <p className="p-3" style={{ fontSize: '2rem' }}>
        {renderText()}
      </p>
    </Card>
  );
}

DisplayTest.propTypes = {
  text: PropTypes.string,
  characterCorrect: PropTypes.number,
};

export default DisplayTest;
