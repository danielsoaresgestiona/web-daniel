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
      {/* Solid dark background - no image */}

      {/* Gold stitching border decoration */}
      <div className="absolute inset-3 md:inset-8 rounded-[28px] md:rounded-[40px] border border-[#C5A059]/20 pointer-events-none"></div>
      <div className="absolute inset-5 md:inset-10 rounded-[24px] md:rounded-[36px] border border-[#C5A059]/10 pointer-events-none"></div>

      {/* Corner ornaments */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 w-6 h-6 md:w-8 md:h-8 border-t-2 border-l-2 border-[#C5A059]/50 rounded-tl-lg pointer-events-none"></div>
      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-6 h-6 md:w-8 md:h-8 border-t-2 border-r-2 border-[#C5A059]/50 rounded-tr-lg pointer-events-none"></div>
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-6 h-6 md:w-8 md:h-8 border-b-2 border-l-2 border-[#C5A059]/50 rounded-bl-lg pointer-events-none"></div>
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-6 h-6 md:w-8 md:h-8 border-b-2 border-r-2 border-[#C5A059]/50 rounded-br-lg pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-10 pt-28 pb-20 md:py-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 flex flex-col items-start gap-6 w-full">
          {/* Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10">
            <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse flex-shrink-0"></div>
            <span
              className="text-[#C5A059] text-[10px] md:text-xs font-semibold tracking-widest uppercase"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Consultoría Premium · Gijón, Asturias
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            En &ldquo;Daniel Soares Gestiona&rdquo;{' '}
            <em className="not-italic text-[#C5A059]">simplificamos</em>{' '}
            tu vida
          </h1>

          {/* Sub-headline */}
          <p
            className="text-white/75 text-base md:text-xl leading-relaxed max-w-xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Gestión integral en todo el norte de España: particulares, autónomos y negocios.{' '}
            <strong className="text-white/90 font-semibold">Nuestra misión: que pagues menos y ganes tiempo.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-1 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('contacto')}
              className="group flex items-center justify-center gap-3 px-5 py-3.5 md:px-6 md:py-4 rounded-full cursor-pointer whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                <i className="ri-file-text-line text-white text-sm"></i>
              </div>
              <span className="text-[#1A1F2B] font-bold text-xs md:text-sm tracking-wide uppercase">
                Trae tu factura: en 5 min sabrás si pagas de más
              </span>
            </button>

            <button
              onClick={() => scrollTo('servicios')}
              className="flex items-center justify-center gap-2 px-5 py-3.5 md:px-6 md:py-4 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all cursor-pointer whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ver nuestros servicios
              <i className="ri-arrow-down-line"></i>
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-5 md:gap-8 mt-2 pt-5 border-t border-white/10 w-full flex-wrap">
            {[
              { value: '100%', label: 'Consulta gratuita' },
              { value: 'Norte ES', label: 'Cobertura total' },
              { value: '5 min', label: 'Diagnóstico rápido' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span
                  className="text-[#C5A059] text-lg md:text-xl font-extrabold"
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

        {/* Right glass card - hidden on small mobile, shown from sm */}
        <div className="hidden sm:block flex-shrink-0 w-full lg:w-[420px]">
          <div
            className="rounded-[32px] md:rounded-[40px] p-6 md:p-8 border border-[#C5A059]/25 relative"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
            }}
          >
            {/* Leather book image */}
            <img
              src="https://storage.readdy-site.link/project_files/a86d0416-9409-4ded-b478-0e4d4084f695/d5a96593-73ec-4f72-8375-0f327b424da2_Gemini_Generated_Image_2liusv2liusv2liu-2.jpg?v=9c2fe76c904b9aa1a05d3b1c3ca61d30"
              alt="Daniel Soares Gestiona"
              className="w-full h-44 md:h-52 object-cover object-center rounded-[20px] md:rounded-[28px] mb-5 md:mb-6"
            />

            <div className="flex flex-col gap-3 md:gap-4">
              {[
                { icon: 'ri-flashlight-line', label: 'Ahorro energético' },
                { icon: 'ri-home-4-line', label: 'Intermediación inmobiliaria' },
                { icon: 'ri-file-shield-2-line', label: 'Trámites administrativos' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#C5A059]/20 flex-shrink-0">
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

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#C5A059]/20 flex-shrink-0">
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
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex flex-col items-center gap-1 md:gap-2 animate-bounce">
        <span className="text-white/40 text-[9px] md:text-xs tracking-widest uppercase" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Descubre más
        </span>
        <i className="ri-arrow-down-s-line text-[#C5A059] text-base md:text-xl"></i>
      </div>
    </section>
  );
}
