//import React from 'react';
import { Container, Card } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import '../AuthPages.css';

const RegisterPage = () => {
  return (
    <div className="auth-container register-container">
      <Container>
        <Card className="auth-card">
          <Card.Body className="card-body">
            <div className="image-auth-container register-image"></div>
            <RegisterForm />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
