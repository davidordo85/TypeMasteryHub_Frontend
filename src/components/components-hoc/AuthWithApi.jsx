import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function AuthWithApi({ apiSubmit }) {
  return function (WrappedComponent) {
    const AuthWithApiComponent = props => {
      const [error, setError] = React.useState(null);
      const [isLoading, setIsLoading] = React.useState(false);
      const navigate = useNavigate();
      const location = useLocation();
      const [isOk, setIsOk] = React.useState(false);

      React.useEffect(() => {
        if (isOk) {
          if (location.pathname === '/login') {
            navigate('/');
            props.onLogin();
          } else if (location.pathname === '/register') {
            navigate('/login');
          }
        }
      }, [location.pathname, navigate, isOk, props]);

      const handleSubmit = async credentials => {
        setError();
        setIsLoading(true);
        try {
          await apiSubmit(credentials);
          setIsOk(true);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };

      return (
        <WrappedComponent
          isLoading={isLoading}
          error={error}
          handleSubmit={handleSubmit}
          {...props}
        />
      );
    };

    AuthWithApiComponent.propTypes = {
      apiCall: PropTypes.func,
      apiSubmit: PropTypes.func,
      actionType: PropTypes.any,
      onLogin: PropTypes.func,
    };

    AuthWithApiComponent.displayName = `WithApi(${getDisplayName(
      WrappedComponent,
    )})`;
    return AuthWithApiComponent;
  };
}

export default AuthWithApi;
