import React, { useState } from 'react';
import logo from "../assets/logo.jpg";
import { FaHeart, FaHandHoldingHeart, FaPiggyBank } from 'react-icons/fa';

function Doar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
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
            <a href="/" className="text-gray-600 hover:text-sky-500 transition-colors duration-200">
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
                href="/"
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
      
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            Instituição sem fins lucrativos
          </span>
          <h1 className="mt-8 text-4xl font-bold text-gray-900 sm:text-5xl">
            Ajude o Instituto Pingo de Gente
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Sua doação faz a diferença na vida de crianças e idosos que precisam de apoio e cuidados especiais
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaPiggyBank className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Doação via PIX</h3>
            <p className="text-gray-600 mb-4">
              Faça sua doação diretamente para nossa conta usando nossa chave PIX
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">CNPJ (Chave PIX)</p>
              <p className="font-mono font-medium">57.537.019/0001-99</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaHandHoldingHeart className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Doação de Materiais</h3>
            <p className="text-gray-600 mb-4">
              Aceitamos doações de suplementos, materiais de higiene, roupas, brinquedos e outros itens essenciais
            </p>
              ​(61) 9 99880-9556
              <p>Email: doacoes@institutopingodegente.org</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FaHeart className="text-3xl text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Seja Voluntário</h3>
            <p className="text-gray-600 mb-4">
              Doe seu tempo e habilidades para ajudar nossa causa
            </p>
            <a href="https://www.atados.com.br/ong/instituto-pingo-de-gente-333139/vagas" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Quero ser voluntário
              </button>
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Como sua doação faz a diferença
            </h2>
            <p className="text-blue-100 text-lg mb-3">
              Cada contribuição nos ajuda a manter nossos programas de assistência, 
              fornecendo suplementos nutricionais, apoio médico e atividades terapêuticas 
              para crianças com deficiência e idosos com câncer.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perguntas Frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-4">Como posso fazer uma doação?</h3>
              <p className="text-gray-600">
                Você pode fazer doações via PIX usando nossa chave CNPJ ou entrar em 
                contato para doar materiais e suplementos.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-4">As doações são dedutíveis do imposto de renda?</h3>
              <p className="text-gray-600">
                Sim, todas as doações são dedutíveis do imposto de renda conforme 
                legislação vigente.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Doar;