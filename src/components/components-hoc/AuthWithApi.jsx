import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
      const isOk = React.useRef(false);

      React.useEffect(() => {
        if (isOk.current) {
          if (location.pathname === '/login') {
            navigate('/');
          } else if (location.pathname === '/register') {
            navigate('/login');
          }
        }
      }, [location.pathname, navigate]);

      const handleSubmit = async credentials => {
        setError();
        setIsLoading(true);
        try {
          await apiSubmit(credentials);
          console.log('todo ok');
          isOk.current = true;
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
    };

    AuthWithApiComponent.displayName = `WithApi(${getDisplayName(
      WrappedComponent,
    )})`;
    return AuthWithApiComponent;
  };
}

export default AuthWithApi;
