export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#1A1F2B' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20Gijon%20Asturias%20Spain%20coastline%20at%20golden%20hour%2C%20dramatic%20sky%2C%20deep%20blue%20ocean%2C%20warm%20amber%20tones%2C%20cinematic%20photography%2C%20ultra%20wide%20angle%2C%20luxury%20travel%20aesthetic%2C%20rich%20colors&width=1920&height=1080&seq=hero-bg-01&orientation=landscape"
          alt="Gijón Asturias"
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1F2B]/90 via-[#1A1F2B]/70 to-[#1A1F2B]/85"></div>
      </div>

      {/* Gold stitching border decoration */}
      <div className="absolute inset-4 md:inset-8 rounded-[40px] border border-[#C5A059]/20 pointer-events-none"></div>
      <div className="absolute inset-6 md:inset-10 rounded-[36px] border border-[#C5A059]/10 pointer-events-none"></div>

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#C5A059]/50 rounded-tl-lg pointer-events-none"></div>
      <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#C5A059]/50 rounded-tr-lg pointer-events-none"></div>
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#C5A059]/50 rounded-bl-lg pointer-events-none"></div>
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#C5A059]/50 rounded-br-lg pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 flex flex-col items-start gap-7">
          {/* Badge */}
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10"
          >
            <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></div>
            <span
              className="text-[#C5A059] text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Consultoría Premium · Gijón, Asturias
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            En &ldquo;Daniel Soares Gestiona&rdquo;{' '}
            <em className="not-italic text-[#C5A059]">simplificamos</em>{' '}
            tu vida
          </h1>

          {/* Sub-headline */}
          <p
            className="text-white/75 text-lg md:text-xl leading-relaxed max-w-xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Gestión integral en todo el norte de España: particulares, autónomos y negocios.{' '}
            <strong className="text-white/90 font-semibold">Nuestra misión: que pagues menos y ganes tiempo.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <button
              onClick={() => scrollTo('contacto')}
              className="group flex items-center gap-3 px-6 py-4 rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C5A059]/30"
              style={{
                background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20">
                <i className="ri-file-text-line text-white text-sm"></i>
              </div>
              <span className="text-[#1A1F2B] font-bold text-sm tracking-wide uppercase">
                Trae tu factura: en 5 min sabrás si pagas de más
              </span>
            </button>

            <button
              onClick={() => scrollTo('servicios')}
              className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ver nuestros servicios
              <i className="ri-arrow-down-line"></i>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4 pt-6 border-t border-white/10 w-full">
            {[
              { value: '100%', label: 'Consulta gratuita' },
              { value: 'Norte ES', label: 'Cobertura total' },
              { value: '5 min', label: 'Diagnóstico rápido' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-[#C5A059] text-xl font-extrabold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-white/50 text-xs"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right glass card */}
        <div className="flex-shrink-0 w-full lg:w-[420px]">
          <div
            className="rounded-[40px] p-8 border border-[#C5A059]/25 relative overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Badge top right */}
            <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40">
              <span className="text-[#C5A059] text-xs font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Norte de España
              </span>
            </div>

            <img
              src="https://readdy.ai/api/search-image?query=open%20luxury%20leather%20notebook%20with%20golden%20pen%2C%20elegant%20business%20documents%2C%20energy%20bill%2C%20house%20keys%20and%20official%20stamps%20arranged%20artistically%20on%20dark%20midnight%20blue%20surface%2C%20professional%20flat%20lay%20photography%2C%20warm%20gold%20accents%2C%20minimalist%20luxury%20aesthetic&width=420&height=320&seq=hero-card-01&orientation=landscape"
              alt="Servicios Daniel Soares Gestiona"
              className="w-full h-52 object-cover object-top rounded-[28px] mb-6"
            />

            <div className="flex flex-col gap-4">
              {[
                { icon: 'ri-flashlight-line', label: 'Optimización Energética', color: '#C5A059' },
                { icon: 'ri-home-4-line', label: 'Inmobiliaria', color: '#C5A059' },
                { icon: 'ri-file-shield-2-line', label: 'Trámites y Gestión', color: '#C5A059' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-xl"
                    style={{ background: `${item.color}20` }}
                  >
                    <i className={`${item.icon} text-[#C5A059] text-base`}></i>
                  </div>
                  <span
                    className="text-white/85 text-sm font-medium"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {item.label}
                  </span>
                  <i className="ri-check-line text-[#C5A059] ml-auto text-sm"></i>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C5A059]/20">
                <i className="ri-map-pin-2-line text-[#C5A059]"></i>
              </div>
              <div>
                <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  C/ Río Cares 20, Gijón
                </p>
                <p className="text-white/50 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Asturias, España
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Descubre más
        </span>
        <i className="ri-arrow-down-s-line text-[#C5A059] text-xl"></i>
      </div>
    </section>
  );
}
