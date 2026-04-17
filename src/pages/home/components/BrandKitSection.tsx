export default function BrandKitSection() {
  return (
    <section
      className="relative py-16 md:py-28 overflow-hidden"
      style={{ background: '#1A1F2B' }}
    >
      {/* Solid background - no image */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Trae tu factura
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            En 5 minutos sabrás si{' '}
            <span className="text-[#C5A059]">estás pagando de más</span>
          </h2>
          <p
            className="text-white/55 text-sm md:text-lg mt-4 md:mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Sin compromiso. Sin coste. Solo trae tu última factura de luz o gas y te decimos en el acto si hay margen de ahorro.
          </p>
        </div>

        {/* Main CTA card */}
        <div
          className="rounded-[28px] md:rounded-[40px] p-7 md:p-14 border border-[#C5A059]/25 text-center max-w-3xl mx-auto mb-10 md:mb-20"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full mx-auto mb-5 md:mb-6"
            style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)' }}
          >
            <i className="ri-file-text-line text-[#1A1F2B] text-2xl md:text-3xl"></i>
          </div>
          <h3
            className="text-white text-xl md:text-2xl lg:text-3xl font-extrabold mb-3 md:mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            TRAE TU FACTURA
          </h3>
          <p
            className="text-white/65 text-sm md:text-base leading-relaxed mb-6 md:mb-8"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Analizamos tu factura energética en 5 minutos y te decimos exactamente cuánto puedes ahorrar.
            Gestión integral en todo el norte de España: sin letra pequeña, sin sorpresas.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            <i className="ri-arrow-right-circle-line text-[#1A1F2B] text-xl"></i>
            <span className="text-[#1A1F2B] font-bold text-sm tracking-wide uppercase">
              Solicitar análisis gratuito
            </span>
          </button>
        </div>


      </div>
    </section>
  );
}
