import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#1A1F2B]/90 backdrop-blur-xl shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 cursor-pointer">
          <img
            src="https://static.readdy.ai/image/7d6a93e92b1b509536fa772fdf453f3b/8aa3c503a7bcb90cd119863022b8b429.png"
            alt="Daniel Soares Gestiona Logo"
            className="h-10 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Servicios', id: 'servicios' },
            { label: 'Filosofía', id: 'filosofia' },
            { label: 'Contacto', id: 'contacto' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-white font-medium text-sm tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacto')}
            className="px-5 py-2 rounded-full border border-[#C5A059] text-[#C5A059] text-sm font-semibold hover:bg-[#C5A059]/10 transition-all cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Consulta Gratuita
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1F2B]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {[
            { label: 'Servicios', id: 'servicios' },
            { label: 'Filosofía', id: 'filosofia' },
            { label: 'Contacto', id: 'contacto' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/80 hover:text-white text-base font-medium text-left cursor-pointer"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contacto')}
            className="px-5 py-2 rounded-full border border-[#C5A059] text-[#C5A059] text-sm font-semibold w-fit cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Consulta Gratuita
          </button>
        </div>
      )}
    </nav>
  );
}
