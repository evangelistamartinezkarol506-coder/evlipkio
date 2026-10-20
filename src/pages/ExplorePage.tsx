import { Link } from 'react-router-dom';

function ExplorePage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Explorar</p>
      <h1>Descubre ideas y comunidades</h1>
      <p>
        Esta sección está diseñada para mostrar contenido recomendado, búsquedas destacadas y tendencias futuras.
      </p>
      <p className="muted">Todavía no hay integración con fuentes de datos reales en esta fase.</p>
      <Link to="/" className="primary-button inline-button">Continuar en Inicio</Link>
    </section>
  );
}

export default ExplorePage;
