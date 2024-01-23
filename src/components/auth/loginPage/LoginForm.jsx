//import React from 'react';
import FormField from '../../shared/formField/FormField';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';

import AlertComponent from '../../shared/alertComponent/AlertComponent';
import PropTypes from 'prop-types';

const LoginForm = ({ onSubmit, error, isLoading }) => {
  const initialValues = {
    usernameOrEmail: '',
    password: '',
    remember: false,
  };

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={values => {
        const errors = {};
        if (!values.usernameOrEmail) {
          errors.usernameOrEmail = 'Email or Username is required.';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        }

        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <Form
          className="d-flex flex-column align-items-center justify-content-center p-3 form-container"
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(e);
          }}
          noValidate
        >
          <h1 className="form-title">&#183; Loin Form &#183;</h1>
          <Field name="usernameOrEmail">
            {({ field, form }) => (
              <FormField
                label="Email or Username"
                type="text"
                name="usernameOrEmail"
                value={field.value}
                onChange={field.onChange}
                feedback={form.errors.usernameOrEmail}
                placeholder=""
                required
                isInvalid={
                  form.errors.usernameOrEmail && form.touched.usernameOrEmail
                }
              />
            )}
          </Field>
          <Field name="password">
            {({ field, form }) => (
              <FormField
                label="Password"
                type="password"
                name="password"
                value={field.value}
                onChange={field.onChange}
                feedback={form.errors.password}
                placeholder=""
                required
                isInvalid={form.errors.password && form.touched.password}
              />
            )}
          </Field>
          <Field name="remember" className="d-inline-block mb-3">
            {({ field }) => (
              <Form.Check
                name="remember"
                type="checkbox"
                label="Keep session logged in?"
                checked={field.value}
                onChange={e => {
                  field.onChange(e);
                }}
              />
            )}
          </Field>
          <Button
            className="auth-button login-button mt-3 mb-3"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{' '}
                Loading...
              </>
            ) : (
              'LOGIN'
            )}
          </Button>
          {error ? <AlertComponent error={error.message} /> : null}
          <p className="mt-3">
            Forgot your password?{' '}
            <Link to="#password-reset" className="text-decoration-none">
              Reset Password
            </Link>
          </p>
          <p className="mt-3">
            Do not have an account yet?{' '}
            <Link to="/register" className="text-decoration-none">
              Register Here
            </Link>
          </p>
          <p className="mt-3">
            Want to go back to the main page?{' '}
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default LoginForm;
