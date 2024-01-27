import { Container, ProgressBar } from 'react-bootstrap';
import { FaStar, FaMedal } from 'react-icons/fa';
import './CoursePage.css';

function coursePage() {
  return (
    <div className="main-course-page text-white">
      {/* TODO: falta darle funcionalidad, ver donde ponerlo si aqui o en el navbar */}
      <Container className="container-progress p-5 d-flex align-items-around">
        <div className="percentage-complete">
          <h1>Porcentaje completado</h1>
          <div className="mt-2">
            <ProgressBar animated striped variant="warning" now={20} />
          </div>
        </div>
        <div className="stars-complete">
          <h1>Estrellas conseguidas</h1>
          <div className="d-flex mt-2">
            <p className="star-paragraph">3/10</p>
            <FaStar color="gold" />
          </div>
        </div>
        <div className="medals-complete">
          <h1>Medallas conseguidas</h1>
          <div className="d-flex mt-2">
            <p className="medal-paragraph">3/10</p>
            <FaMedal color="gold" />
            <p className="medal-paragraph silver">3/10</p>
            <FaMedal color="silver" />
            <p className="medal-paragraph brown">3/10</p>
            <FaMedal color="brown" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default coursePage;
