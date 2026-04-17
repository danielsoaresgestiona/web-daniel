const pillars = [
  {
    icon: 'ri-eye-line',
    title: 'Transparencia total',
    description: 'Sin letra pequeña, sin sorpresas. Te explicamos cada paso con claridad absoluta antes de actuar.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Cercanía real cara a cara',
    description: 'Nos reunimos contigo en persona. Creemos en el trato humano, no en los formularios impersonales.',
  },
  {
    icon: 'ri-award-line',
    title: 'Profesionalidad sin letra pequeña',
    description: 'Experiencia real, resultados medibles. Trabajamos con rigor y te damos cuentas de todo.',
  },
];

export default function PhilosophySection() {
  return (
    <section id="filosofia" className="relative py-28 overflow-hidden bg-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: image + quote */}
          <div className="flex-shrink-0 w-full lg:w-[420px] flex flex-col items-center gap-6">
            <div
              className="relative rounded-[40px] overflow-hidden border-2 border-[#C5A059]/40 w-full"
              style={{ aspectRatio: '4/5' }}
            >
              <img
                src="https://readdy.ai/api/search-image?query=professional%20male%20business%20consultant%20in%20elegant%20dark%20suit%2C%20confident%20friendly%20expression%2C%20modern%20office%20with%20large%20windows%2C%20Asturias%20Spain%2C%20warm%20professional%20portrait%20photography%2C%20dark%20blue%20and%20gold%20tones%2C%20premium%20consultancy%20aesthetic&width=420&height=525&seq=philosophy-portrait-01&orientation=portrait"
                alt="Daniel Soares - Consultor"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B]/60 via-transparent to-transparent"></div>

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div
                  className="rounded-[20px] p-5 border border-[#C5A059]/30"
                  style={{
                    background: 'rgba(26,31,43,0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                  }}
                >
                  <p
                    className="text-white text-lg font-bold italic leading-snug"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    &ldquo;No vendemos, asesoramos.&rdquo;
                  </p>
                  <p
                    className="text-[#C5A059] text-sm mt-2 font-semibold"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    — Daniel Soares
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex-1 flex flex-col gap-10">
            <div>
              <p
                className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                (Nuestra filosofía)
              </p>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[#1A1F2B] leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Transparencia total.{' '}
                <span className="text-[#C5A059]">Sin letra pequeña.</span>
              </h2>
              <p
                className="text-[#1A1F2B]/60 text-lg mt-5 leading-relaxed max-w-xl"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                En Daniel Soares Gestiona no buscamos clientes, buscamos personas que quieran mejorar su situación.
                Nuestra consultoría en Gijón se basa en la confianza, la cercanía y la profesionalidad sin adornos.
              </p>
            </div>

            {/* Pillars */}
            <div className="flex flex-col gap-5">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 p-6 rounded-[24px] border border-[#C5A059]/15 hover:border-[#C5A059]/40 transition-all duration-300 group"
                  style={{ background: 'rgba(197,160,89,0.04)' }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)' }}
                  >
                    <i className={`${pillar.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3
                      className="text-[#1A1F2B] font-bold text-base mb-1"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-[#1A1F2B]/60 text-sm leading-relaxed"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>
    </section>
  );
}
