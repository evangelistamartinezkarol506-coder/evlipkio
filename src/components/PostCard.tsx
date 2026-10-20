import { useState } from 'react';
import { ImagePlus, Send } from 'lucide-react';

type FeedComposerProps = {
  onSubmit: (text: string) => void;
};

function FeedComposer({ onSubmit }: FeedComposerProps) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!text.trim()) {
      setError('Escribe algo antes de publicar.');
      return;
    }

    onSubmit(text.trim());
    setText('');
    setError('');
  };

  return (
    <section className="composer panel">
      <div className="composer__header">
        <div className="avatar avatar--small avatar--dark">E</div>
        <div>
          <strong>EvliPkio</strong>
          <p>Comparte una idea</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="composer__form">
        <textarea
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="¿Qué quieres compartir hoy?"
          rows={4}
          aria-label="Escribe una publicación"
        />

        {error ? <p className="form-error">{error}</p> : null}

        <div className="composer__actions">
          <button type="button" className="secondary-button" aria-label="Añadir imagen">
            <ImagePlus size={17} />
            <span>Imagen</span>
          </button>
          <button type="submit" className="primary-button">
            <Send size={17} />
            <span>Publicar</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default FeedComposer;
