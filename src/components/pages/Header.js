import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="logo Pingo de Gente" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <h1 className="ml-3 text-sm md:text-xl font-bold text-gray-800">
                Instituto Pingo de Gente
              </h1>
            </a>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-sky-500 transition-colors duration-200">
              Home
            </a>
            <a href="#sobre-nos" className="text-gray-600 hover:text-sky-500 transition-colors duration-200">
              Sobre
            </a>
            <a href="/doar" className="px-4 py-2 text-white bg-sky-500 rounded-md hover:bg-sky-600 transition-colors duration-200">
              Doar
            </a>
          </nav>

          {/* Botão Menu Mobile */}
          <button
            className="block lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 px-2 py-1"
              >
                Home
              </a>
              <a
                href="#sobre-nos"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 px-2 py-1"
              >
                Sobre
              </a>
              <a
                href="/doar"
                className="text-gray-600 hover:text-sky-500 transition-colors duration-200 px-2 py-1"
              >
                Doar
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;