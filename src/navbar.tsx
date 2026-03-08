import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const links = [
    { label: 'Services',      href: isHome ? '#services' : '/#services' },
    { label: 'Notre Vision',  href: '/vision' },
    { label: "L'Équipe",      href: isHome ? '#team'     : '/#team'     },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
          Frame<span className="text-indigo-600">Tech</span>
        </Link>

        {/* Liens desktop */}
        <div className="hidden md:flex space-x-8 font-medium text-sm">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-indigo-600 transition">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <Link
          to="/demarrer"
          className="hidden md:block bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-600 transition"
        >
          Démarrer un projet
        </Link>

        {/* Burger mobile */}
        <button
          className="md:hidden p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col space-y-4 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="hover:text-indigo-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          {/* ✅ Bouton visible sur mobile */}
          <Link
            to="/demarrer"
            onClick={() => setIsMenuOpen(false)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition text-center"
          >
            Démarrer un projet
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;