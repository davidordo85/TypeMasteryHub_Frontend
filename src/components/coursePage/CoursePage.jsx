//import React from 'react';
import './CoursePage.css';
import { getCourse } from '../../api/courses';
import {
  CourseSection,
  ProgressStartsDisplay,
} from '../shared/courseAndTopicPageSections';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';
import { CourseWithApi } from '../components-hoc';

function CoursePage({ error, isLoading, data: course }) {
  const now = 5;

  return (
    <div className="main-course-page text-white">
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
            <CourseSection course={course} />
          )}
        </>
      )}
    </div>
  );
}

const courseWithApiConfig = CourseWithApi({
  initialData: [],
  apiCall: getCourse,
});

const CoursePageCourseWhitApi = courseWithApiConfig(CoursePage);

CoursePage.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.array,
};

export default CoursePageCourseWhitApi;
