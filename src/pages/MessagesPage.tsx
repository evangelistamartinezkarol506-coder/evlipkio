import { Link } from 'react-router-dom';

function MessagesPage() {
  return (
    <section className="empty-state panel">
      <p className="eyebrow">Mensajes</p>
      <h1>Tu centro de conversación</h1>
      <p>La vista de mensajes se prepara para conversaciones, chats y notificaciones de comunidad.</p>
      <p className="muted">Esta sección aún no está conectada a mensajes en tiempo real.</p>
      <Link to="/" className="primary-button inline-button">Volver al inicio</Link>
    </section>
  );
}

export default MessagesPage;
