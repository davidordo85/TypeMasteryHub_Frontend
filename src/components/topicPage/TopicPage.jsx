import React from 'react';
import { getTopicForName } from '../../api/courses';
import {
  ProgressStartsDisplay,
  CourseSection,
} from '../coursePage/coursePageSections';
import AlertComponent from '../shared/alertComponent/AlertComponent';
import { useParams } from 'react-router-dom';
import './TopicPage.css';

/* TODO: high order component para topicPage y CoursePage que haga la peticion
Ya que reutilizo ProgressStartsDisplay y CourseSection cambiarlos de lugar 
Falta el loader tanto en topicPage como en CoursePage
hacer un button para ir atrás en topicPage para que vaya a la página de Course
*/

function TopicPage() {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const params = useParams();
  const now = 1;

  React.useEffect(() => {
    items(params.name);
  }, [params.name]);

  const items = async name => {
    try {
      const items = await getTopicForName(name);
      setData(items.result);
    } catch (error) {
      setError(error);
    } finally {
      console.log('ok get Topics');
    }
  };
  console.log('data', data);

  return (
    <div className="main-topic-page">
      <ProgressStartsDisplay now={now} />
      {error ? (
        <div className="d-flex justify-content-center align-items-center">
          <AlertComponent error={error.message} />
        </div>
      ) : (
        <CourseSection course={data} />
      )}
    </div>
  );
}

export default TopicPage;
