//import React from 'react';
import { Container, Card } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <Container>
        <Card className="auth-card">
          <Card.Body className="card-body">
            <div className="image-register-container"></div>
            <RegisterForm />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
