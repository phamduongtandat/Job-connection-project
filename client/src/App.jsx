import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProfilePage from './pages/profile/ProfilePage';

export default function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/profile/*" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </main>
  );
}
