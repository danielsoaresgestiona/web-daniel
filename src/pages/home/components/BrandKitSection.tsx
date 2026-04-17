export default function BrandKitSection() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: '#1A1F2B' }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20panoramic%20view%20of%20Gijon%20Asturias%20Spain%20city%20and%20coastline%20at%20dusk%2C%20dramatic%20golden%20hour%20light%2C%20deep%20blue%20ocean%2C%20warm%20amber%20sky%2C%20cinematic%20wide%20angle%20photography%2C%20luxury%20travel%20aesthetic&width=1920&height=700&seq=brandkit-bg-01&orientation=landscape"
          alt="Gijón Asturias"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2B]/80 via-[#1A1F2B]/60 to-[#1A1F2B]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Trae tu factura
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            En 5 minutos sabrás si{' '}
            <span className="text-[#C5A059]">estás pagando de más</span>
          </h2>
          <p
            className="text-white/55 text-lg mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Sin compromiso. Sin coste. Solo trae tu última factura de luz o gas y te decimos en el acto si hay margen de ahorro.
          </p>
        </div>

        {/* Main CTA card */}
        <div
          className="rounded-[40px] p-10 md:p-14 border border-[#C5A059]/25 text-center max-w-3xl mx-auto mb-20"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)' }}>
            <i className="ri-file-text-line text-[#1A1F2B] text-3xl"></i>
          </div>
          <h3
            className="text-white text-2xl md:text-3xl font-extrabold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            TRAE TU FACTURA
          </h3>
          <p
            className="text-white/65 text-base leading-relaxed mb-8"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Analizamos tu factura energética en 5 minutos y te decimos exactamente cuánto puedes ahorrar.
            Gestión integral en todo el norte de España: sin letra pequeña, sin sorpresas.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C5A059]/30 whitespace-nowrap"
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

        {/* Brand colors & typography showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Colors */}
          <div
            className="rounded-[28px] p-7 border border-[#C5A059]/20"
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
          >
            <p className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Identidad de color
            </p>
            <div className="flex flex-col gap-3">
              {[
                { color: '#1A1F2B', name: 'Midnight Blue', hex: '#1A1F2B', border: 'border-white/20' },
                { color: '#C5A059', name: 'Gold Premium', hex: '#C5A059', border: 'border-[#C5A059]/40' },
                { color: '#FFFFFF', name: 'Pure White', hex: '#FFFFFF', border: 'border-white/30' },
              ].map((c) => (
                <div key={c.hex} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl border ${c.border} flex-shrink-0`}
                    style={{ background: c.color }}
                  ></div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {c.name}
                    </p>
                    <p className="text-white/40 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {c.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div
            className="rounded-[28px] p-7 border border-[#C5A059]/20"
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
          >
            <p className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Tipografía
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-white text-2xl font-extrabold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Montserrat
                </p>
                <p className="text-white/40 text-xs mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Bold / SemiBold — Títulos y CTAs
                </p>
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white text-xl font-light" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Raleway
                </p>
                <p className="text-white/40 text-xs mt-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Regular / Light — Cuerpo de texto
                </p>
              </div>
            </div>
          </div>

          {/* Tone */}
          <div
            className="rounded-[28px] p-7 border border-[#C5A059]/20"
            style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
          >
            <p className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Tono de comunicación
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: 'ri-chat-check-line', text: 'Directo y claro' },
                { icon: 'ri-shield-check-line', text: 'Experto pero accesible' },
                { icon: 'ri-hand-heart-line', text: 'Cercano y honesto' },
                { icon: 'ri-forbid-line', text: 'Sin tecnicismos innecesarios' },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#C5A059]/15">
                    <i className={`${t.icon} text-[#C5A059] text-sm`}></i>
                  </div>
                  <span className="text-white/75 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
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
