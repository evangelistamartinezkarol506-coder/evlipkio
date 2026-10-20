import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bell, Menu, Search, X } from 'lucide-react';
import type { NavItem } from '../App';

type TopbarProps = {
  navItems: NavItem[];
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onSearchChange: (value: string) => void;
  searchValue: string;
};

function getIcon(name: string) {
  switch (name) {
    case 'home':
      return '⌂';
    case 'compass':
      return '◌';
    case 'messages':
      return '✉';
    case 'bookmark':
      return '▣';
    case 'user':
      return '◔';
    case 'gamepad':
      return '▤';
    case 'film':
      return '▥';
    case 'megaphone':
      return '◍';
    case 'shield':
      return '◈';
    case 'terms':
      return '☰';
    default:
      return '•';
  }
}

function Topbar({ navItems, mobileOpen, onToggleMobile, onSearchChange, searchValue }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar__inner">
        <div className="topbar__left">
          <button className="icon-button mobile-only" onClick={onToggleMobile} aria-label="Abrir menú">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link to="/" className="brand" aria-label="Ir a la página de inicio">
            <span className="brand__mark">E</span>
            <span>EvliPkio</span>
          </Link>
        </div>

        <label className="search" aria-label="Buscar en EvliPkio">
          <Search size={17} />
          <input
            type="search"
            placeholder="Buscar"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <div className="topbar__actions">
          <button className="icon-button desktop-only" aria-label="Notificaciones">
            <Bell size={18} />
          </button>
          <button className="account-button">Cuenta</button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `mobile-nav__item ${isActive ? 'is-active' : ''}`}
              onClick={() => onToggleMobile()}
            >
              <span>{getIcon(item.icon)}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

export default Topbar;
