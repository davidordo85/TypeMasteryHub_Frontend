//import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'react-bootstrap';
import RegisterForm from './RegisterForm';
import '../AuthPages.css';
import { AuthWithApi, compose } from '../../components-hoc';
import { register } from '../../../api/auth';

const RegisterPage = ({ error, isLoading, handleSubmit }) => {
  return (
    <div className="auth-container register-container">
      <Container>
        <Card className="auth-card">
          <Card.Body className="card-body">
            <div className="image-auth-container register-image"></div>
            <RegisterForm
              onSubmit={handleSubmit}
              error={error}
              isLoading={isLoading}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

/* eslint-disable react/display-name */

const hoc = WrappedComponent => props => <WrappedComponent {...props} />;
const AuthWithApiConfig = AuthWithApi({
  apiSubmit: register,
});
const AuthWithApiRegisterPage = compose(AuthWithApiConfig, hoc)(RegisterPage);

RegisterPage.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default AuthWithApiRegisterPage;
