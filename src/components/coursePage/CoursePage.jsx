import { Container } from 'react-bootstrap';
import './CoursePage.css';

function coursePage() {
  return (
    <div className="main-course-page text-white">
      <Container className="container-progress p-5 d-flex">
        <div>porcentaje completado</div>
        <div>estrellas</div>
        <div>medallas</div>
      </Container>
    </div>
  );
}

export default coursePage;
