//import React from 'react'
import { Container } from 'react-bootstrap';

const ExplanationSection = () => {
  return (
    <section className="explanation-container p-5">
      <Container>
        <h1 className="mb-1">No se requiere cuenta</h1>
        <p>
          Sin embargo, si decides registrarte, puedes guardar tu progreso y
          seguir tus mejoras sin esfuerzo.
        </p>
      </Container>
      <hr className="explanation-separator" />
      <Container>
        <h1 className="mb-1">Domina la mecanografía con nuestro curso</h1>
        <p>
          Explora una manera efectiva de perfeccionar tus habilidades en el
          teclado. Únete ahora y comienza tu viaje hacia la maestría en
          mecanografía.
        </p>
      </Container>
    </section>
  );
};

export default ExplanationSection;
