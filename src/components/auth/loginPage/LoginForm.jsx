//import React from 'react';
import FormField from '../../shared/formField/FormField';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';

const LoginForm = () => {
  const initialValues = {
    emailOrUsername: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    //onSubmit(values)
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={values => {
        const errors = {};
        if (!values.emailOrUsername) {
          errors.emailOrUsername = 'Email or Username is required.';
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
          <Field name="emailOrUsername">
            {({ field, form }) => (
              <FormField
                label="Email or Username"
                type="text"
                name="emailOrUsername"
                value={field.value}
                onChange={field.onChange}
                feedback={form.errors.emailOrUsername}
                placeholder=""
                required
                isInvalid={
                  form.errors.emailOrUsername && form.touched.emailOrUsername
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
          <Button className="auth-button login-button mt-3" type="submit">
            LOGIN
          </Button>
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

export default LoginForm;
