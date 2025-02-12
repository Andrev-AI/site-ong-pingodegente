import React from 'react'
import Header from "./Header"
import imgcapa from "../assets/imagemcapa.jpg"
import im1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { FaHeart, FaHandHoldingHeart } from "react-icons/fa6";
import { FaUserMd, FaPaintBrush } from "react-icons/fa";
import { MdChildCare, MdOutlineElderly } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='min-h-screen grid lg:grid-cols-2 grid-cols-1'>
        <div className='flex flex-col bg-white'>
          <header className='mb-6 lg:mb-12'>
            <Header />
          </header>

          <div className='mt-6 lg:mt-12 w-full flex flex-wrap items-center gap-3 mx-4 lg:ml-5'>
            <h1 className='bg-yellow-300 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm'>
              Instituição sem fins lucrativos
            </h1>
            <span className='bg-red-50 text-red-500 text-xs px-4 py-1.5 rounded-full font-semibold tracking-wide shadow-sm border border-red-100'>
              ONG
            </span>
          </div>

          <h1 className='text-3xl lg:text-5xl font-bold mt-6 lg:mt-8 leading-tight p-4 lg:p-5'>
            Instituto Pingo de Gente - Onde o carinho e a esperança se encontram
          </h1>
          
          <div className='mt-8 lg:mt-12 mx-4 lg:ml-5'>
            <a href='doar'>
              <button className='flex items-center justify-center px-6 py-4 rounded-lg bg-sky-500 text-xl text-white hover:bg-sky-600 transition-all duration-300 gap-2'>
                <FaHeart className="text-white text-xl" />
                <span>Ajudar</span>
              </button>
            </a>
          </div>
        </div>

        <div className='h-64 lg:h-screen mt-8 lg:mt-0'>
          <img 
            src={imgcapa} 
            alt="Imagem de Capa" 
            className='w-full h-full object-cover'
          />
        </div>
      </section>

      <section className='min-h-screen bg-white px-4 lg:px-12 py-12 lg:py-16'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center' id="sobre-nos">Sobre Nós</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16'>
          <div className='flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all'>
            <div className='bg-blue-100 p-4 rounded-full mb-4'>
              <MdChildCare className='text-4xl text-blue-600' />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Apoio às Crianças</h3>
            <p className='text-center text-gray-600'>Atendimento especializado para crianças com deficiência</p>
          </div>

          <div className='flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all'>
            <div className='bg-red-100 p-4 rounded-full mb-4'>
              <MdOutlineElderly className='text-4xl text-red-600' />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Cuidado com Idosos</h3>
            <p className='text-center text-gray-600'>Suporte a idosos diagnosticados com câncer</p>
          </div>

          <div className='flex flex-col items-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all lg:col-span-1 md:col-span-2 lg:col-span-1'>
            <div className='bg-green-100 p-4 rounded-full mb-4'>
              <FaUserMd className='text-4xl text-green-600' />
            </div>
            <h3 className='text-xl font-semibold mb-3'>Equipe Especializada</h3>
            <p className='text-center text-gray-600'>Profissionais dedicados ao bem-estar dos pacientes</p>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-8 lg:mt-12'>
          <div className='bg-gradient-to-br from-blue-500 to-blue-600 p-6 lg:p-8 rounded-2xl text-white flex flex-col lg:flex-row items-center gap-6 lg:gap-8'>
            <div className='flex-1'>
              <h3 className='text-2xl font-bold mb-4'>Nossa Missão</h3>
              <p className='leading-relaxed'>
                Oferecemos apoio e acolhimento em um ambiente especializado, 
                proporcionando atividades terapêuticas e suporte emocional para 
                pacientes e famílias.
              </p>
            </div>
            <FaHandHoldingHeart className='text-6xl text-blue-100 opacity-80' />
          </div>

          <div className='bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 lg:p-8 rounded-2xl text-white flex flex-col lg:flex-row items-center gap-6 lg:gap-8'>
            <div className='flex-1'>
              <h3 className='text-2xl font-bold mb-4'>Nossas Atividades</h3>
              <p className='leading-relaxed'>
                Promovemos oficinas de arte, momentos de lazer e interação social,
                além de fornecer kits de suplementos essenciais.
              </p>
            </div>
            <FaPaintBrush className='text-6xl text-cyan-100 opacity-80' />
          </div>
        </div>
      </section>

      <section className='min-h-screen bg-gray-200 px-4 lg:px-12 py-12 lg:py-16'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center'>Nossos Kits de Suplementos</h2>
        <p className='text-center text-gray-600 max-w-3xl mx-auto mb-8 lg:mb-12 px-4'>
          Fornecemos suplementos nutricionais especializados para garantir a saúde e bem-estar de nossos assistidos.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          <div className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all'>
            <img 
              src={im1} 
              alt="Kit de Suplementos" 
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-3'>Kit Básico de Suplementos</h3>
              <p className='text-gray-600 mb-4'>
                Conjunto completo de suplementos para as necessidades nutricionais básicas e cuidados de saúde.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all'>
            <img 
              src={img2} 
              alt="Neocate" 
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-3'>Neocate</h3>
              <p className='text-gray-600 mb-4'>
                Suplemento proteico e vitamínico especializado, ideal para casos de alergias alimentares.
              </p>
            </div>
          </div>

          <div className='bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-1'>
            <img 
              src={img3} 
              alt="Peptamen" 
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-3'>Peptamen</h3>
              <p className='text-gray-600 mb-4'>
                Suplemento nutricional completo com proteínas hidrolisadas para melhor absorção.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8 lg:mt-12 text-center'>
          <a href='/doar'>
            <button className='bg-sky-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-sky-600 transition-all duration-300'>
              Doar
            </button>
          </a>
        </div>
      </section>

      <section className='min-h-screen bg-white px-4 lg:px-12 py-12 lg:py-16'>
        <h2 className='text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center'>Nossa Localização</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto'>
          <div>
            <img 
              src={img4} 
              alt="Fachada do Instituto" 
              className='rounded-xl shadow-lg w-full h-[300px] lg:h-[400px] object-cover'
            />
            <div className='mt-6 lg:mt-8'>
              <h3 className='text-xl lg:text-2xl font-bold mb-4'>Instituto Pingo de Gente</h3>
              <p className='text-gray-600 text-base lg:text-lg'>
                QSA 08 Lote 01<br />
                Taguatinga Sul<br />
                Distrito Federal
              </p>
            </div>
          </div>

          <div className='h-[300px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg'>
            <iframe 
              title="Google Maps localização"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8943950840696!2d-48.0562!3d-15.8341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sQSA%208%20Lt%201%20-%20Taguatinga%20Sul%2C%20Bras%C3%ADlia%20-%20DF!5e0!3m2!1spt-BR!2sbr!4v1625147000000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className='mt-8 lg:mt-12 text-center'>
          <p className='text-gray-600 max-w-2xl mx-auto mb-6 lg:mb-8 px-4'>
            Venha nos conhecer! Estamos de portas abertas para receber você e mostrar nosso trabalho.
          </p>
          <a 
            href="https://www.google.com/maps/dir//QSA+8+Lt+1+-+Taguatinga+Sul,+Brasília+-+DF" 
            target="_blank" 
            rel="noopener noreferrer"
            className='inline-flex items-center bg-sky-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-sky-600 transition-all duration-300'
          >
            Como Chegar
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 lg:py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
              <a 
                href="https://www.instagram.com/pingodeegente_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <FaInstagram className="text-2xl" />
                <span>Siga-nos no Instagram</span>
              </a>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contato para Doações</h3>
              <p className="mb-2">
                <span className="block text-gray-400">E-mail:</span>
                <a href="mailto:doacoes@institutopingodegente.org" className="hover:text-sky-400 transition-colors">
                  doacoes@institutopingodegente.org
                </a>
              </p>
              <p className="mb-2">
                <span className="block text-gray-400">Telefone</span>
                <a href="mailto:doacoes@institutopingodegente.org" className="hover:text-sky-400 transition-colors">
                ​(61) 9 99880-9556
                </a>
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Chave PIX</h3>
              <p className="mb-2">
                <span className="block text-gray-400">CNPJ:</span>
                <span className="font-mono">57.537.019/0001-99</span>
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-sm lg:text-base">
              &copy; {new Date().getFullYear()} Instituto Pingo de Gente. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home