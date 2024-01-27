//import React from 'react';
import { Button } from 'react-bootstrap';
import './NotFoundPage.css';

function NotFoundPage() {
  return (
    <div className="main-not-found text-white">
      <h1 className="display-1">404</h1>
      <h2 className="display-5">Error</h2>
      <p className="display-6 mb-4"> Página no encontrada</p>
      <Button variant="outline-light">Ir a Página principal</Button>
    </div>
  );
}

export default NotFoundPage;
