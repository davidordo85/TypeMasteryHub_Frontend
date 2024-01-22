//import React from 'react';
import { Container, Card } from 'react-bootstrap';
import LoginForm from './LoginForm';
import '../AuthPages.css';

const LoginPage = () => {
  return (
    <div className="auth-container login-container">
      <Container>
        <Card className="auth-card">
          <Card.Body className="card-body">
            <div className="image-auth-container login-image"></div>
            <LoginForm />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LoginPage;
