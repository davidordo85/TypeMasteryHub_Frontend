//import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <footer>esto es el footer</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
