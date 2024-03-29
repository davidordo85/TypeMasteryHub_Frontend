import React from 'react';
import { getTestAndPerformance } from '../../api/courses';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import { CourseWithApi } from '../components-hoc';
import { CountDownClock, DisplayTest, ResultTestCard } from './sectionTestPage';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';
import './TestPage.css';

//TODO: refactorizar un poco el codigo, reiniciar el tiempo al hacer click en el button de volver a empezar.
function TestPage({ error, isLoading, data: testsData }) {
  const test = testsData[0];
  const [startTest, setStartTest] = React.useState(false);
  const [finishTest, setFinishTest] = React.useState(false);
  const [startCountdown, setStartCountdown] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');
  const [indexCharacterText, setIndexCharacterText] = React.useState(0);
  const [errorCount, setErrorCount] = React.useState(0);
  const inputRef = React.useRef(null);
  const [timeTest, setTimeTest] = React.useState(0);

  const getTime = time => {
    setTimeTest(time);
  };

  const playErrorSound = () => {
    /*TODO: Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6008">Pixabay</a> */
    const audio = new Audio('../../../public/sounds/negative_beeps-6008.mp3');
    audio.play();
  };

  const handleKeyPress = event => {
    const enteredText = event.target.value;
    const lastPressedChar = enteredText.charAt(enteredText.length - 1);

    setStartCountdown(true);
    setUserInput(enteredText);

    const testText = test.test.text_test;
    if (testText[indexCharacterText] === lastPressedChar) {
      if (testText.length <= indexCharacterText + 1) {
        setIndexCharacterText(indexCharacterText + 1);
        setFinishTest(true);
        setStartTest(false);
      } else {
        setIndexCharacterText(indexCharacterText + 1);
      }
    } else if (
      testText[indexCharacterText] !== enteredText[indexCharacterText]
    ) {
      playErrorSound();
      setErrorCount(errorCount + 1);
    }
  };

  React.useEffect(() => {
    if (startTest) {
      inputRef.current.focus();
    }
  }, [startTest, indexCharacterText, errorCount]);

  const handleStartTestAgain = () => {
    setFinishTest(false);
    setStartTest(false);
    setStartCountdown(false);
    setUserInput('');
    setIndexCharacterText(0);
    setErrorCount(0);
    setTimeTest(0);
  };

  return (
    <div className="main-test-page">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {error ? (
            <div className="d-flex justify-content-center align-items-center">
              <AlertComponent error={error.message} />
            </div>
          ) : (
            <div className="container-test-page">
              <div className="d-flex justify-content-around pt-3">
                <h1 className="display-5">{test.test.title}</h1>
                <CountDownClock
                  maxTime={test.performance.max_time}
                  startCountdown={startCountdown}
                  startTest={startTest}
                  stopCountdown={finishTest}
                  getTime={getTime}
                />
              </div>

              {!startTest && !finishTest ? (
                <div className="d-flex justify-content-center ">
                  <Button
                    size="lg"
                    variant="success"
                    onClick={() => setStartTest(true)}
                  >
                    Start
                  </Button>
                </div>
              ) : finishTest ? (
                <div className="d-flex justify-content-center mt-5">
                  <ResultTestCard
                    topic_name={test.topic_name}
                    test_name={test.test.title}
                    errorCount={errorCount}
                    timeTest={timeTest}
                    lengthTest={test.test.text_test.length}
                    performance={test.performance}
                    onStartTestAgain={handleStartTestAgain}
                  />
                </div>
              ) : (
                <div className="m-5">
                  <DisplayTest
                    text={test.test.text_test}
                    errorCount={errorCount}
                    characterCorrect={indexCharacterText}
                  />
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={handleKeyPress}
                    className="offscreen"
                  />
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

const testWithApiConfig = CourseWithApi({
  initialData: [
    {
      performance: {
        max_time: 0,
        levels: {
          copper: { max_time: 0, stars: 0 },
          silver: { max_time: 0, stars: 0 },
          gold: { max_time: 0, stars: 0 },
        },
      },
      test: { title: '', order: 0, text_test: '' },
    },
  ],
  apiCall: getTestAndPerformance,
});

const TestPageCourseWhitApi = testWithApiConfig(TestPage);

TestPage.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default TestPageCourseWhitApi;
