import React from 'react';
import { getTestAndPerformance } from '../../api/courses';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import { CourseWithApi } from '../components-hoc';
import { CountDownClock } from './sectionTestPage';
import PropTypes from 'prop-types';
import { Button, Spinner } from 'react-bootstrap';
import './TestPage.css';

function TestPage({ error, isLoading, data: testsData }) {
  const [startCountdown, setStartCountdown] = React.useState(false);

  const test = testsData[0];

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
              <div>zona de texto del test</div>
              {!startCountdown ? (
                <div className="d-flex justify-content-center ">
                  <Button
                    size="lg"
                    variant="success"
                    onClick={() => setStartCountdown(true)}
                  >
                    Start
                  </Button>
                </div>
              ) : null}
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
