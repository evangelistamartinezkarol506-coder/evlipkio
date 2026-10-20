import { Link } from 'react-router-dom';

function TermsPage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Términos</p>
      <h1>Política y condiciones</h1>
      <p>Este espacio está pensado para mostrar avisos legales, condiciones y normativa de uso.</p>
      <p className="muted">La versión final será revisada con contenido legal formal en una etapa posterior.</p>
      <Link to="/" className="primary-button inline-button">Volver al inicio</Link>
    </section>
  );
}

export default TermsPage;
