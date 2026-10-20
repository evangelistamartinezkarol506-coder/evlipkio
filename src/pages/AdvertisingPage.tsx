import { Link } from 'react-router-dom';

function AdvertisingPage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Publicidad para empresas</p>
      <h1>Soluciones para marcas y organizaciones</h1>
      <p>En esta vista se mostrarán modelos de anuncios, campañas y herramientas de promoción.</p>
      <p className="muted">No se está ejecutando ninguna campaña real ni pasarela de pago.</p>
      <Link to="/" className="primary-button inline-button">Volver al inicio</Link>
    </section>
  );
}

export default AdvertisingPage;
