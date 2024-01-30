//import React from 'react';
import PropTypes from 'prop-types';
import ListCourse from './ListCourse';

function CourseList({ course }) {
  console.log(course);

  const renderTopics = (topic, index) => <ListCourse key={index} {...topic} />;
  return (
    <div>
      {course.map((singleCourse, index) => (
        <div key={index}>
          <h1 className="display-5 text-center">{singleCourse.courseName}</h1>
          <div className="d-flex flex-wrap justify-content-center align-items-center course-section">
            {singleCourse.topics.map(renderTopics)}
          </div>
        </div>
      ))}
    </div>
  );
}

CourseList.propTypes = {
  course: PropTypes.arrayOf(
    PropTypes.shape({
      courseName: PropTypes.string.isRequired,
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          order: PropTypes.number.isRequired,
        }),
      ).isRequired,
    }),
  ),
};

export default CourseList;
