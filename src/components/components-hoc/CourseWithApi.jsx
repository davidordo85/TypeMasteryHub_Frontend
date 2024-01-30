import React from 'react';

import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function CourseWithApi({ initialData, apiCall }) {
  return function (WrappedComponent) {
    const CourseWithApiComponent = props => {
      const [error, setError] = React.useState(null);
      const [isLoading, setIsLoading] = React.useState(false);
      const [data, setData] = React.useState(initialData);
      const params = useParams();

      React.useEffect(() => {
        items(params.name);
      }, [params.name]);

      const items = async name => {
        setError();
        setIsLoading(true);
        try {
          const data = await apiCall(name);
          setData(data.result);
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
          data={data}
          {...props}
        />
      );
    };

    CourseWithApiComponent.propTypes = {
      initialData: PropTypes.any,
      apiCall: PropTypes.func,
    };

    CourseWithApiComponent.displayName = `CourseWithApi(${getDisplayName(
      WrappedComponent,
    )})`;
    return CourseWithApiComponent;
  };
}

export default CourseWithApi;
