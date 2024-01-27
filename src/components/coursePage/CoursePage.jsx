import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import './CoursePage.css';
import { getCourse } from '../../api/courses';

function CoursePage() {
  const [topics, setTopics] = React.useState([]);
  const now = 0;

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

  console.log(topics);
  return (
    <div className="main-course-page text-white">
      {/* TODO: falta darle funcionalidad, ver donde ponerlo si aqui o en el navbar */}
      <Container className="container-progress p-5 d-flex align-items-around">
        <div className="percentage-complete">
          <h1>Porcentaje completado</h1>
          <div className="mt-2">
            <ProgressBar
              className="bg-dark"
              animated
              striped
              variant="warning"
              now={now}
            />
            <p className="mt-2">{`${now}% completado`}</p>
          </div>
        </div>
        <div className="stars-complete">
          <h1>Estrellas conseguidas</h1>
          <div className="d-flex mt-2">
            <p className="star-paragraph">3/24</p>
            <FaStar color="gold" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CoursePage;
