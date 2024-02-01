import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DisplayTest({ text, character_correct }) {
  const characters = text.split('');

  const renderText = () => {
    return characters.map((char, index) => {
      const isCorrect = index < character_correct;

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
  character_correct: PropTypes.number,
};

export default DisplayTest;
