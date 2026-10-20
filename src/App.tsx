import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import MessagesPage from './pages/MessagesPage';
import SavedPage from './pages/SavedPage';
import ProfilePage from './pages/ProfilePage';
import GamesPage from './pages/GamesPage';
import SeriesPage from './pages/SeriesPage';
import AdvertisingPage from './pages/AdvertisingPage';
import AdministrationPage from './pages/AdministrationPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/explorar" element={<Layout><ExplorePage /></Layout>} />
      <Route path="/mensajes" element={<Layout><MessagesPage /></Layout>} />
      <Route path="/guardados" element={<Layout><SavedPage /></Layout>} />
      <Route path="/perfil" element={<Layout><ProfilePage /></Layout>} />
      <Route path="/juegos" element={<Layout><GamesPage /></Layout>} />
      <Route path="/series-peliculas" element={<Layout><SeriesPage /></Layout>} />
      <Route path="/publicidad" element={<Layout><AdvertisingPage /></Layout>} />
      <Route path="/administracion" element={<Layout><AdministrationPage /></Layout>} />
      <Route path="/terminos" element={<Layout><TermsPage /></Layout>} />
      <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
    </Routes>
  );
}

export default App;
