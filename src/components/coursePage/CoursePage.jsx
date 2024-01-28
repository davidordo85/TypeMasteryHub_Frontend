import React from 'react';
import './CoursePage.css';
import { getCourse } from '../../api/courses';
import { CourseSection, ProgressStartsDisplay } from './coursePageSections';

function CoursePage() {
  const [topics, setTopics] = React.useState([]);
  const now = 5;

  React.useEffect(() => {
    items();
  }, []);

  const items = async () => {
    try {
      const items = await getCourse();
      setTopics(items.result);
    } catch (error) {
      console.log(error);
    } finally {
      console.log('ok');
    }
  };

  return (
    <div className="main-course-page text-white">
      <ProgressStartsDisplay now={now} />
      <CourseSection topics={topics} />
    </div>
  );
}

export default CoursePage;
