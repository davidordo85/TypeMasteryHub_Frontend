//import React from 'react';
import { Container, Form, Card, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaAddressCard, FaLock } from 'react-icons/fa';
import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <Container>
        <Card className="register-card">
          <Card.Body className="card-body">
            <div className="image-container"></div>
            <Form className="d-flex flex-column align-items-center justify-content-center p-3 form-container">
              <h1 className="register-title">
                &#183; Registration Form &#183;
              </h1>
              <InputGroup className="pt-3 position-relative">
                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>
                <Form.Control type="email" placeholder="" required />
                <Form.Label>Email address</Form.Label>
              </InputGroup>
              <InputGroup className="pt-3 position-relative">
                <InputGroup.Text>
                  <FaAddressCard />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="" required />
                <Form.Label>Username</Form.Label>
              </InputGroup>
              <InputGroup className="pt-3 position-relative">
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="" required />
                <Form.Label>Password</Form.Label>
              </InputGroup>
              <InputGroup className="pt-3 position-relative">
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>
                <Form.Control type="password" placeholder="" required />
                <Form.Label>Confirm Password</Form.Label>
              </InputGroup>
              <Button className="register-button mt-3" type="submit">
                CREATE ACCOUNT
              </Button>
              <p className="mt-3">
                Have already an account?{' '}
                <Link to="/login" className="text-decoration-none">
                  Login Here
                </Link>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
