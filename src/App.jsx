import { Routes, Route } from 'react-router';
import { WelcomePage, LoginPage, RegisterPage, Layout } from './components';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <WelcomePage />
          </Layout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
