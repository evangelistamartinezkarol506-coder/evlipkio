export type NavItem = {
  label: string;
  to: string;
  icon: string;
};

export type Post = {
  id: number;
  author: string;
  handle: string;
  time: string;
  text: string;
  image?: string;
  accent?: string;
};

export const navItems: NavItem[] = [
  { label: 'Inicio', to: '/', icon: 'home' },
  { label: 'Explorar', to: '/explorar', icon: 'compass' },
  { label: 'Mensajes', to: '/mensajes', icon: 'messages' },
  { label: 'Guardados', to: '/guardados', icon: 'bookmark' },
  { label: 'Mi perfil', to: '/perfil', icon: 'user' },
  { label: 'Juegos', to: '/juegos', icon: 'gamepad' },
  { label: 'EvliPkio Series y Películas', to: '/series-peliculas', icon: 'film' },
  { label: 'Publicidad para empresas', to: '/publicidad', icon: 'megaphone' },
  { label: 'Administración', to: '/administracion', icon: 'shield' },
  { label: 'Términos', to: '/terminos', icon: 'terms' },
];

export const initialPosts: Post[] = [
  {
    id: 1,
    author: 'Alicia Delgado',
    handle: '@alicia',
    time: 'Hace 15 min',
    text:
      'Estoy revisando ideas para una nueva experiencia de comunidad en línea: clara, útil y con espacio para la creatividad. ¿Qué elementos consideran más importantes en una red social moderna?',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accent: 'lavender',
  },
  {
    id: 2,
    author: 'Mateo Ruiz',
    handle: '@mateo',
    time: 'Hace 1 hora',
    text:
      'El diseño limpio y los espacios bien pensados cambian mucho la percepción de una plataforma. Menos ruido, más claridad.',
  },
  {
    id: 3,
    author: 'Sofía Vega',
    handle: '@sofia',
    time: 'Hace 3 horas',
    text:
      'Preparando un mini estudio visual para la etapa 2 de EvliPkio. La prioridad es que todo sea cómodo en móvil y elegante en escritorio.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    accent: 'sand',
  },
];
