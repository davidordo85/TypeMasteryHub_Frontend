//import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

function Layout({ children, ...props }) {
  return (
    <div>
      <Header {...props} />
      <main className="bg-secondary">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
