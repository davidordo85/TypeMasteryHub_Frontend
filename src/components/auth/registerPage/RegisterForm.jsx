//import React from 'react';
import FormField from '../../shared/formField/FormField';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import AlertComponent from '../../shared/alertComponent/AlertComponent';
import PropTypes from 'prop-types';

const RegisterForm = ({ onSubmit, error, isLoading }) => {
  const initialValues = {
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    onSubmit(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};

        // Validación para el campo 'email'
        if (!values.email) {
          errors.email = 'Please enter a valid email address.';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = 'Please enter a valid email address.';
        }

        // Validación para el campo 'username'
        if (!values.username) {
          errors.username = 'Username is required.';
        } else if (values.username.length < 3 || values.username.length > 50) {
          errors.username = 'Username must be between 3 and 50 characters.';
        } else if (!/^[a-zA-Z0-9_\s-']*$/i.test(values.username)) {
          errors.username = 'Invalid characters in the username.';
        }

        // Validación para el campo 'password'
        if (!values.password || values.password.length < 8) {
          errors.password = 'Password must be at least 8 characters.';
        }

        // Validación para el campo 'repeatPassword'
        if (values.password !== values.repeatPassword) {
          errors.repeatPassword = 'Passwords do not match.';
        }

        return errors;
      }}
      onSubmit={handleSubmit}
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
          <h1 className="form-title">&#183; Registration Form &#183;</h1>
          <Field name="email">
            {({ field, form }) => (
              <FormField
                label="Email"
                type="email"
                name="email"
                value={field.value}
                onChange={field.onChange}
                feedback={form.errors.email}
                placeholder=""
                required
                isInvalid={form.errors.email && form.touched.email}
              />
            )}
          </Field>
          <Field name="username">
            {({ field, form }) => (
              <FormField
                label="Username"
                type="text"
                name="username"
                value={field.value}
                onChange={field.onChange}
                feedback={form.errors.username}
                placeholder=""
                required
                isInvalid={form.errors.username && form.touched.username}
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
          <Field name="repeatPassword">
            {({ field, form }) => (
              <FormField
                label="Confirm Password"
                type="password"
                name="repeatPassword"
                value={field.value}
                onChange={field.onChange}
                feedback={form.errors.repeatPassword}
                placeholder=""
                required
                isInvalid={
                  form.errors.repeatPassword && form.touched.repeatPassword
                }
              />
            )}
          </Field>
          <Button
            className="auth-button register-button mt-3 mb-3"
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
              'CREATE ACCOUNT'
            )}
          </Button>
          {error ? <AlertComponent error={error.message} /> : null}
          <p className="mt-3">
            Have already an account?{' '}
            <Link to="/login" className="text-decoration-none">
              Login Here
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

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default RegisterForm;
