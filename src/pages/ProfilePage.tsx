import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Mi perfil</p>
      <h1>Personaliza tu espacio</h1>
      <p>En este panel se mostrarán tu biografía, publicaciones destacadas y ajustes del perfil.</p>
      <p className="muted">La autenticación y gestión real de perfiles se implementará en una fase posterior.</p>
      <Link to="/" className="primary-button inline-button">Volver al inicio</Link>
    </section>
  );
}

export default ProfilePage;
