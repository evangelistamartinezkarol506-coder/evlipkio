import { Link } from 'react-router-dom';

function SavedPage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Guardados</p>
      <h1>Contenido que quieres volver a ver</h1>
      <p>Se mostrará un resumen de publicaciones, artículos y recursos guardados por el usuario.</p>
      <p className="muted">Todavía no se persisten elementos guardados en esta fase.</p>
      <Link to="/" className="primary-button inline-button">Volver al inicio</Link>
    </section>
  );
}

export default SavedPage;
