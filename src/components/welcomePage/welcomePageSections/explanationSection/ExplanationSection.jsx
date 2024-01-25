//import React from 'react'
import { Container } from 'react-bootstrap';

const ExplanationSection = () => {
  return (
    <section className="explanation-container p-5">
      <Container>
        <h1 className="mb-1">No Account Required</h1>
        <p>
          However, if you choose to register, you can save your progress and
          track your improvement effortlessly.
        </p>
      </Container>
      <hr className="explanation-separator" />
      <Container>
        <h1 className="mb-1">Master touch typing with our course!</h1>
        <p>
          Explore an effective way to perfect your keyboard skills. Join now and
          start your journey to typing mastery.
        </p>
      </Container>
    </section>
  );
};

export default ExplanationSection;
