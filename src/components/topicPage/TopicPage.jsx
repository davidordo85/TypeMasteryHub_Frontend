//import React from 'react';
import { getTopicForName } from '../../api/courses';
import {
  ProgressStartsDisplay,
  CourseSection,
} from '../shared/courseAndTopicPageSections';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import { CourseWithApi } from '../components-hoc';
import PropTypes from 'prop-types';
import './TopicPage.css';
import { Spinner } from 'react-bootstrap';

/* TODO: Ya que reutilizo ProgressStartsDisplay y CourseSection cambiarlos de lugar 
Falta el loader en CoursePage
hacer un button para ir atrás en topicPage para que vaya a la página de Course
*/

function TopicPage({ error, isLoading, data: topic }) {
  const now = 1;

  return (
    <div className="main-topic-page">
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center spinner-container">
          <Spinner variant="warning" className="spinner-topic" />
        </div>
      ) : (
        <>
          <ProgressStartsDisplay now={now} />
          {error ? (
            <div className="d-flex justify-content-center align-items-center">
              <AlertComponent error={error.message} />
            </div>
          ) : (
            <CourseSection course={topic} />
          )}
        </>
      )}
    </div>
  );
}

const courseWithApiConfig = CourseWithApi({
  initialData: [],
  apiCall: getTopicForName,
});

const TopicPageCourseWhitApi = courseWithApiConfig(TopicPage);

TopicPage.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};
export default TopicPageCourseWhitApi;
