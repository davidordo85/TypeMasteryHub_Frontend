//import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';

function Layout({ children, ...props }) {
  return (
    <div>
      <Header {...props} />
      <main className="bg-secondary">{children}</main>
      <footer>
        {/* Foto de seppe machielsen:
        https://www.pexels.com/es-es/foto/oscuro-internet-abstracto-conexion-14011035/ */}
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
