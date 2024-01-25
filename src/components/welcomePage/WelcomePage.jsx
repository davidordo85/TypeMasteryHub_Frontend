//import React from 'react'
import './WelcomePage.css';

import { Container, Button } from 'react-bootstrap';

const WelcomePage = () => {
  return (
    <div className="text-white">
      <section className="welcome-container d-flex align-items-center justify-content-center">
        <Container className="p-5">
          <h1 className="display-2 mb-3">Welcome to TypeMastery Hub</h1>
          <p className=" mb-3">
            Improving your typing skills has never been as easy and useful as
            with the online course from TypeMasteryHub. Learn in an effective
            and efficient manner.
          </p>
          <Button variant="outline-light">Getting Started</Button>
        </Container>
      </section>

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
            Explore an effective way to perfect your keyboard skills. Join now
            and start your journey to typing mastery.
          </p>
        </Container>
      </section>
      <section className="more-explanation-container bg-dark">
        <div>
          <h1>explanation 1</h1>
          <p>parrafo 1</p>
        </div>
        <div>
          <h1>explanation 2</h1>
          <p>parrafo 2</p>
        </div>
        <div>
          <h1>explanation 3</h1>
          <p>parrafo 3</p>
        </div>
        <div>
          <h1>explanation 4</h1>
          <p>parrafo 4</p>
        </div>
        <div>
          <h1>explanation 5</h1>
          <p>parrafo 5</p>
        </div>
        <div>
          <h1>explanation 6</h1>
          <p>parrafo 6</p>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
