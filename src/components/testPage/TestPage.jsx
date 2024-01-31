import { getTestAndPerformance } from '../../api/courses';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import { CourseWithApi } from '../components-hoc';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import './TestPage.css';

function TestPage({ error, isLoading, data: test }) {
  console.log(test);
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
            <p>pagina test</p>
          )}
        </>
      )}
    </div>
  );
}

const testWithApiConfig = CourseWithApi({
  initialData: [],
  apiCall: getTestAndPerformance,
});

const TestPageCourseWhitApi = testWithApiConfig(TestPage);

TestPage.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default TestPageCourseWhitApi;
