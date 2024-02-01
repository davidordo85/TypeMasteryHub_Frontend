import React from 'react';
import { getTestAndPerformance } from '../../api/courses';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import { CourseWithApi } from '../components-hoc';
import { CountDownClock, DisplayTest } from './sectionTestPage';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';
import './TestPage.css';

function TestPage({ error, isLoading, data: testsData }) {
  const test = testsData[0];
  const [startTest, setStartTest] = React.useState(false);
  const [startCountdown, setStartCountdown] = React.useState(false);
  const [userInput, setUserInput] = React.useState('');
  const [indexCharacterText, setIndexCharacterText] = React.useState(0);
  const [errorCount, setErrorCount] = React.useState(0);
  const inputRef = React.useRef(null);

  const handleKeyPress = event => {
    const enteredText = event.target.value;
    const lastPressedChar = enteredText.charAt(enteredText.length - 1);
    setStartCountdown(true);
    setUserInput(enteredText);

    const testText = test.test.text_test;
    if (testText[indexCharacterText] === lastPressedChar) {
      setIndexCharacterText(indexCharacterText + 1);
    } else if (
      testText[indexCharacterText] !== enteredText[indexCharacterText]
    ) {
      setErrorCount(errorCount + 1);
    }
  };

  React.useEffect(() => {
    if (startTest) {
      inputRef.current.focus();
    }
  }, [startTest, indexCharacterText, errorCount]);

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
                <CountDownClock startCountdown={startCountdown} />
              </div>

              {!startTest ? (
                <div className="d-flex justify-content-center ">
                  <Button
                    size="lg"
                    variant="success"
                    onClick={() => setStartTest(true)}
                  >
                    Start
                  </Button>
                </div>
              ) : (
                <div className="m-5">
                  <DisplayTest
                    text={test.test.text_test}
                    errorCount={errorCount}
                    character_correct={indexCharacterText}
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
    { performance: {}, test: { title: '', order: 0, text_test: '' } },
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
