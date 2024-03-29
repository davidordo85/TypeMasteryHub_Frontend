import React from 'react';
import { Routes, Route } from 'react-router';
import {
  WelcomePage,
  LoginPage,
  RegisterPage,
  Layout,
  CoursePage,
  TopicPage,
  NotFoundPage,
  TestPage,
} from './components';
import { PropTypes } from 'prop-types';
import './App.css';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout isLogged={isLogged} onLogout={handleLogout}>
            <WelcomePage />
          </Layout>
        }
      />
      <Route
        path="/course"
        element={
          <Layout isLogged={isLogged} onLogout={handleLogout}>
            <CoursePage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/topic/:name"
        element={
          <Layout isLogged={isLogged} onLogout={handleLogout}>
            <TopicPage />
          </Layout>
        }
      />
      <Route
        path="/test/:topicName/:title"
        element={
          <Layout isLogged={isLogged} onLogout={handleLogout}>
            <TestPage />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout isLogged={isLogged} onLogout={handleLogout}>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  );
}

App.propTypes = {
  isInitiallyLogged: PropTypes.bool.isRequired,
};
export default App;
