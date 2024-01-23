import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AlertComponent.css';

function AlertComponent({ error }) {
  return (
    <Alert variant="danger" className="d-flex align-items-center" dismissible>
      <p>{error}</p>
    </Alert>
  );
}

AlertComponent.propTypes = {
  error: PropTypes.string.isRequired,
};

export default AlertComponent;
