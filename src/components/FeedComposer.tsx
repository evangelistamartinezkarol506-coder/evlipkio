import type { ReactNode } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../App';
import Topbar from './Topbar';

const sidebarItems = navItems;

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="app-shell">
      <Topbar
        navItems={navItems}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((current) => !current)}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
      />

      <div className="content-shell">
        <aside className="sidebar">
          <nav className="sidebar__nav" aria-label="Menú principal">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}
              >
                <span className="sidebar__icon">{item.icon === 'home' ? '⌂' : item.icon === 'compass' ? '◌' : item.icon === 'messages' ? '✉' : item.icon === 'bookmark' ? '▣' : item.icon === 'user' ? '◔' : item.icon === 'gamepad' ? '▤' : item.icon === 'film' ? '▥' : item.icon === 'megaphone' ? '◍' : item.icon === 'shield' ? '◈' : '☰'}</span>
                <span>{item.label}</span>
              </NavLink>
            ))}
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
