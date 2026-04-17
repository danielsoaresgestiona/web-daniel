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

        {/* Tone of communication card */}
        <div className="flex justify-center">
          <div
            className="rounded-[24px] md:rounded-[28px] p-7 md:p-10 border border-[#C5A059]/20 w-full max-w-lg"
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
          >
            <p
              className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-5 md:mb-7"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Tono de comunicación
            </p>
            <div className="flex flex-col gap-4 md:gap-5">
              {[
                { icon: 'ri-chat-check-line', text: 'Directo y claro' },
                { icon: 'ri-shield-check-line', text: 'Experto pero accesible' },
                { icon: 'ri-hand-heart-line', text: 'Cercano y honesto' },
                { icon: 'ri-forbid-line', text: 'Sin tecnicismos innecesarios' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#C5A059]/15 flex-shrink-0">
                    <i className={`${t.icon} text-[#C5A059] text-base md:text-lg`}></i>
                  </div>
                  <span className="text-white/80 text-sm md:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {t.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
