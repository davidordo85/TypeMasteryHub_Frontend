//import React from 'react';
import PropTypes from 'prop-types';
import { Container, Card } from 'react-bootstrap';
import LoginForm from './LoginForm';
import '../AuthPages.css';
import { AuthWithApi, compose } from '../../components-hoc';

import { login } from '../../../api/auth';

const LoginPage = ({ error, isLoading, handleSubmit }) => {
  return (
    <div className="auth-container login-container">
      <Container>
        <Card className="auth-card">
          <Card.Body className="card-body">
            <div className="image-auth-container login-image"></div>
            <LoginForm
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
  apiSubmit: login,
});
const AuthWithApiLoginPage = compose(AuthWithApiConfig, hoc)(LoginPage);

LoginPage.propTypes = {
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
};

export default AuthWithApiLoginPage;
