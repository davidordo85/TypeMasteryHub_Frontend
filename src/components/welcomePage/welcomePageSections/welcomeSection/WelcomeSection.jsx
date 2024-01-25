//import React from 'react'
import { Container, Button } from 'react-bootstrap';

const WelcomeSection = () => {
  return (
    <section className="welcome-container d-flex align-items-center justify-content-center">
      <Container className="p-5">
        <h1 className="display-2 mb-3">Welcome to TypeMastery Hub</h1>
        <p className=" mb-3">
          Improving your typing skills has never been as easy and useful as with
          the online course from TypeMasteryHub. Learn in an effective and
          efficient manner.
        </p>
        <Button variant="outline-light">Getting Started</Button>
      </Container>
    </section>
  );
};

export default WelcomeSection;
