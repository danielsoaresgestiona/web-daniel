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

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <img
              src="https://static.readdy.ai/image/7d6a93e92b1b509536fa772fdf453f3b/8aa3c503a7bcb90cd119863022b8b429.png"
              alt="Daniel Soares Gestiona"
              className="h-12 w-auto object-contain object-left"
            />
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Consultoría integral en Gijón, Asturias. Simplificamos tu vida administrativa, energética e inmobiliaria en todo el norte de España.
            </p>
            <div className="flex gap-3 mt-1">
              {[
                { icon: 'ri-facebook-fill', href: '#' },
                { icon: 'ri-instagram-line', href: '#' },
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
          <div className="flex flex-col gap-4">
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Servicios
            </p>
            {[
              { label: 'Optimización Energética', id: 'servicios' },
              { label: 'Inmobiliaria', id: 'servicios' },
              { label: 'Trámites y Gestión', id: 'servicios' },
              { label: 'Consulta Gratuita', id: 'contacto' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id)}
                className="text-white/55 hover:text-[#C5A059] text-sm text-left transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                <span className="text-white/55 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Col 4: Newsletter */}
          <div className="flex flex-col gap-4">
            <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Mantente informado
            </p>
            <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Consejos de ahorro energético y novedades del sector inmobiliario en Asturias.
            </p>
            <div className="flex items-center border-b border-[#C5A059]/40 pb-2 mt-1">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-transparent text-white text-sm placeholder-white/30 focus:outline-none"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              />
              <button className="w-8 h-8 flex items-center justify-center text-[#C5A059] hover:text-white transition-colors cursor-pointer">
                <i className="ri-arrow-right-line text-lg"></i>
              </button>
            </div>
            <p className="text-white/30 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Sin spam. Solo lo importante.
            </p>
          </div>
        </div>

        {/* Big brand name */}
        <div className="border-t border-white/5 pt-10 mb-6 overflow-hidden">
          <p
            className="text-[#C5A059]/10 font-extrabold text-center leading-none select-none"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(28px, 5vw, 72px)',
              letterSpacing: '0.05em',
            }}
          >
            DANIEL SOARES GESTIONA
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2026 Daniel Soares Gestiona. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            {['Política de Privacidad', 'Aviso Legal', 'RGPD'].map((item) => (
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
