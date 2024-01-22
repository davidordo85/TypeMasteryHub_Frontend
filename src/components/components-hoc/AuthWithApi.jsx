import React from 'react';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function AuthWithApi({ apiSubmit }) {
  return function (WrappedComponent) {
    const AuthWithApiComponent = props => {
      const [error, setError] = React.useState(null);
      const [isLoading, setIsLoading] = React.useState(false);
      const handleSubmit = async credentials => {
        setError();
        setIsLoading(true);
        try {
          await apiSubmit(credentials);
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
    };

    AuthWithApiComponent.displayName = `WithApi(${getDisplayName(
      WrappedComponent,
    )})`;
    return AuthWithApiComponent;
  };
}

export default AuthWithApi;
