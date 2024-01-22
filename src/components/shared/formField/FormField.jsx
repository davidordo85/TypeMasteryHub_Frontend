//import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { FaEnvelope, FaAddressCard, FaLock } from 'react-icons/fa';
import PropTypes from 'prop-types';

const getIconByLabel = label =>
  label === 'Email' ? (
    <FaEnvelope />
  ) : label === 'Username' ? (
    <FaAddressCard />
  ) : (
    <FaLock />
  );

function FormField({ label, ...props }) {
  return (
    <InputGroup className="pt-3 position-relative">
      <InputGroup.Text>{getIconByLabel(label)}</InputGroup.Text>
      <Form.Control {...props} />
      <Form.Label>{label}</Form.Label>
      <Form.Control.Feedback type="invalid">
        {props.feedback}
      </Form.Control.Feedback>
    </InputGroup>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
