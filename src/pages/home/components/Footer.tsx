import { Link } from 'react-router-dom';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ background: '#111620' }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 pt-12 md:pt-16 pb-8 md:pb-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-14">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4 md:gap-5 sm:col-span-2 lg:col-span-1">
            <img
              src="https://static.readdy.ai/image/7d6a93e92b1b509536fa772fdf453f3b/8aa3c503a7bcb90cd119863022b8b429.png"
              alt="Daniel Soares Gestiona"
              className="h-10 md:h-12 w-auto object-contain object-left"
            />
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Consultoría integral en Gijón, Asturias. Simplificamos tu vida administrativa, energética e inmobiliaria, y todos estos servicios también para tu negocio.
            </p>
            <div className="flex gap-3 mt-1 flex-wrap">
              {[
                { icon: 'ri-facebook-fill', href: 'https://www.facebook.com/profile.php?id=61569726269451' },
                { icon: 'ri-instagram-line', href: 'https://www.instagram.com/danielsoares.gestiona/' },
                { icon: 'ri-linkedin-fill', href: '#' },
                { icon: 'ri-whatsapp-line', href: 'https://wa.me/34615223754' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  rel="nofollow"
                  target="_blank"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/50 hover:text-[#C5A059] hover:border-[#C5A059]/40 transition-all cursor-pointer"
                >
                  <i className={`${s.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p
              className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Servicios
            </p>
            {[
              { label: 'Ahorro energético', id: 'servicios' },
              { label: 'Intermediación inmobiliaria', id: 'servicios' },
              { label: 'Trámites administrativos', id: 'servicios' },
              { label: 'Consulta Gratuita', id: 'contacto' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-white/55 hover:text-[#C5A059] text-sm text-left transition-colors cursor-pointer"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p
              className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Contacto
            </p>
            {[
              { icon: 'ri-map-pin-2-line', text: 'C/ Río Cares 20, Gijón' },
              { icon: 'ri-phone-line', text: '615 22 37 54' },
              { icon: 'ri-mail-line', text: 'info@danielsoaresgestiona.com' },
              { icon: 'ri-time-line', text: 'Lun–Vie: 9:00–19:00' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`${item.icon} text-[#C5A059] text-sm`}></i>
                </div>
                <span className="text-white/55 text-sm break-words min-w-0" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-3 md:gap-4">
            <p
              className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Mantente informado
            </p>
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Consejos de ahorro energético y novedades del sector inmobiliario en Asturias.
            </p>
            <div className="flex items-center border-b border-[#C5A059]/40 pb-2 mt-1">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-transparent text-white text-sm placeholder-white/30 focus:outline-none min-w-0"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              />
              <button className="w-8 h-8 flex items-center justify-center text-[#C5A059] hover:text-white transition-colors cursor-pointer flex-shrink-0">
                <i className="ri-arrow-right-line text-lg"></i>
              </button>
            </div>
            <p className="text-white/30 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Sin spam. Solo lo importante.
            </p>
          </div>
        </div>

        {/* Big brand name */}
        <div className="border-t border-white/5 pt-8 md:pt-10 mb-5 md:mb-6 overflow-hidden">
          <p
            className="text-[#C5A059]/10 font-extrabold text-center leading-none select-none"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(20px, 4vw, 72px)',
              letterSpacing: '0.05em',
            }}
          >
            DANIEL SOARES GESTIONA
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 pt-4 border-t border-white/5">
          <p className="text-white/30 text-xs text-center sm:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2026 Daniel Soares Gestiona. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            <Link
              to="/privacidad"
              className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Política de Privacidad
            </Link>
            {['Aviso Legal', 'RGPD'].map((item) => (
              <a
                key={item}
                href="#"
                rel="nofollow"
                className="text-white/30 hover:text-white/60 text-xs transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
