import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DisplayTest({ text, errorCount, character_correct }) {
  const characters = text.split('');

  const renderText = () => {
    let foundError = false;

    return characters.map((char, index) => {
      const isCorrect = index < character_correct;
      const isIncorrect =
        index >= character_correct && index < character_correct + errorCount;
      if (isCorrect) {
        foundError = false;
        return (
          <span key={index} style={{ color: 'green' }}>
            {char}
          </span>
        );
      } else if (isIncorrect && !foundError) {
        foundError = true;
        return (
          <span key={index} style={{ color: 'red' }}>
            {char}
          </span>
        );
      } else {
        return <span key={index}>{char}</span>;
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
  errorCount: PropTypes.number,
  character_correct: PropTypes.number,
};

export default DisplayTest;
