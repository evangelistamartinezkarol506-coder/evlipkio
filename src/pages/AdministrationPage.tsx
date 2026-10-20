import { Link } from 'react-router-dom';

function AdministrationPage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Administración</p>
      <h1>Panel de gestión del producto</h1>
      <p>Se preparan vistas para configuración, moderación y supervisión operativa de la plataforma.</p>
      <p className="muted">Las herramientas de administración reales se integrarán más adelante.</p>
      <Link to="/" className="primary-button inline-button">Volver al inicio</Link>
    </section>
  );
}

export default AdministrationPage;
