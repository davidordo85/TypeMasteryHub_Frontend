import React from 'react';
import './CoursePage.css';
import { getCourse, getTopicForName } from '../../api/courses';
import { CourseSection, ProgressStartsDisplay } from './coursePageSections';
import AlertComponent from '../shared/alertComponent/AlertComponent';

function CoursePage() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const now = 5;

  React.useEffect(() => {
    items();
  }, []);

  const items = async () => {
    try {
      const items = await getCourse();
      setData(items.result);
    } catch (error) {
      setError(error);
    } finally {
      console.log('ok getCourse');
    }
  };

  const handleTopicClick = async (event, topicName) => {
    try {
      const items = await getTopicForName(topicName);
      setData(items.result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('ok getTopicForName');
    }
  };

  return (
    <div className="main-course-page text-white">
      <ProgressStartsDisplay now={now} />
      {error ? (
        <div className="d-flex justify-content-center align-items-center">
          <AlertComponent error={error.message} />
        </div>
      ) : (
        <CourseSection topics={data} onTopicClick={handleTopicClick} />
      )}
    </div>
  );
}

export default CoursePage;
