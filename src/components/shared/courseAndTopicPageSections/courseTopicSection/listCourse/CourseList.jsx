//import React from 'react';
import PropTypes from 'prop-types';
import ListCourse from './ListCourse';

function CourseList({ course }) {
  console.log(course);

  const renderTopics = (topic, index) => <ListCourse key={index} {...topic} />;
  return (
    <div className="container">
      {course.map((singleCourse, index) => (
        <div key={index}>
          <h1 className="display-5 text-center text-white">
            {singleCourse.courseName || singleCourse.topicName}
          </h1>
          <div className="d-flex flex-wrap justify-content-center align-items-center course-section">
            {singleCourse.topics?.map(renderTopics) ||
              singleCourse.tests?.map(renderTopics)}
          </div>
        </div>
      ))}
    </div>
  );
}

CourseList.propTypes = {
  course: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string,
      topicName: PropTypes.string,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          order: PropTypes.number.isRequired,
        }),
      ),
      tests: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          order: PropTypes.number.isRequired,
        }),
      ),
    }),
  ),
};

export default CourseList;
