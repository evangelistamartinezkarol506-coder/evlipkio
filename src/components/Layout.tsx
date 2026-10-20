import type { ReactNode } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Bell,
  Bookmark,
  Compass,
  Film,
  Gamepad2,
  Home,
  Megaphone,
  Menu,
  MessageSquareText,
  ScrollText,
  Search,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react';
import { navItems } from '../data/mockData';

const sidebarIconMap = {
  home: Home,
  compass: Compass,
  messages: MessageSquareText,
  bookmark: Bookmark,
  user: UserRound,
  gamepad: Gamepad2,
  film: Film,
  megaphone: Megaphone,
  shield: ShieldCheck,
  terms: ScrollText,
} as const;

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <div className="topbar__left">
            <button
              type="button"
              className="icon-button mobile-only"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen((current) => !current)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <a href="/" className="brand" aria-label="Ir a inicio">
              <span className="brand__mark">E</span>
              <span>EvliPkio</span>
            </a>
          </div>

          <label className="search" aria-label="Buscar en EvliPkio">
            <Search size={17} />
            <input
              type="search"
              placeholder="Buscar"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </label>

          <div className="topbar__actions">
            <button type="button" className="icon-button desktop-only" aria-label="Notificaciones">
              <Bell size={18} />
            </button>
            <button type="button" className="account-button">Cuenta</button>
          </div>
        </div>

        {mobileOpen ? (
          <nav className="mobile-nav" aria-label="Navegación móvil">
            {navItems.map((item) => {
              const Icon = sidebarIconMap[item.icon as keyof typeof sidebarIconMap] ?? Home;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `mobile-nav__item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        ) : null}
      </header>

      <div className="content-shell">
        <aside className="sidebar">
          <nav className="sidebar__nav" aria-label="Menú principal">
            {navItems.map((item) => {
              const Icon = sidebarIconMap[item.icon as keyof typeof sidebarIconMap] ?? Home;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}
                >
                  <span className="sidebar__icon"><Icon size={16} /></span>
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>
        </aside>

        <main className="page-content">{children}</main>

        <aside className="right-rail">
          <div className="panel">
            <h3>Descubre</h3>
            <ul className="suggestions-list">
              {['Filosofía del diseño', 'Innovación en UX', 'Contenido visual', 'Comunidades digitales'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="panel">
            <h3>Temas del momento</h3>
            <ul className="suggestions-list compact">
              <li>Diseño limpio</li>
              <li>Experiencias digitales</li>
              <li>Comunidad y conversación</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Layout;
