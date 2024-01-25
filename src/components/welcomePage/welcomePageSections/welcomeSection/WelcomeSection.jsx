//import React from 'react'
import { Container, Button } from 'react-bootstrap';

const WelcomeSection = () => {
  return (
    <section className="welcome-container d-flex align-items-center justify-content-center">
      <Container className="p-5">
        {/* TODO: referir a el dueño de la imagen del background
        Foto de seppe machielsen: 
        https://www.pexels.com/es-es/foto/oscuro-internet-abstracto-conexion-14011035/ */}
        <h1 className="display-2 mb-3">Bienvenido a TypeMastery Hub</h1>
        <p className="mb-3">
          Mejorar tus habilidades de escritura nunca ha sido tan fácil y útil
          como con el curso en línea de TypeMasteryHub. Aprende de manera
          efectiva y eficiente.
        </p>
        <Button variant="outline-light">Empezar</Button>
      </Container>
    </section>
  );
};

export default WelcomeSection;
