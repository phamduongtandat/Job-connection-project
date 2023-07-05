import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LinkNotFound from './components/linkNotFound/LinkNotFound';
import UIContainer from './components/uiContainer/UIContainer';
import AdminPage from './pages/admin/AdminPage';
import Home from './pages/home/Home';
import ProfilePage from './pages/profile/ProfilePage';

export default function App() {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<LinkNotFound />} />
        </Routes>
      </Layout>
      <UIContainer />
      <ReactQueryDevtools />
    </main>
  );
}
