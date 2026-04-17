const services = [
  {
    id: 'A',
    icon: 'ri-flashlight-line',
    title: 'Optimización Energética',
    tag: 'CONSULTA GRATUITA',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description: 'Analizamos tu factura de luz o gas y detectamos si estás pagando de más. Sin compromiso, sin coste.',
    items: [
      'Revisión gratuita de tu factura energética',
      'Detección de cargos indebidos y sobreprecios',
      'Optimización de tarifa según tu consumo real',
      'Cambio de comercializadora sin complicaciones',
    ],
    image: 'https://readdy.ai/api/search-image?query=electricity%20bill%20analysis%2C%20energy%20optimization%20concept%2C%20golden%20light%20bulb%20on%20dark%20background%2C%20professional%20business%20consulting%2C%20clean%20minimalist%20style%2C%20warm%20gold%20and%20dark%20blue%20tones&width=400&height=220&seq=service-energy-01&orientation=landscape',
  },
  {
    id: 'B',
    icon: 'ri-home-4-line',
    title: 'Inmobiliaria',
    tag: null,
    tagColor: '',
    description: 'Compra, venta y alquiler de inmuebles con asesoramiento experto y valoración gratuita de tu propiedad.',
    items: [
      'Compraventa y alquiler de propiedades',
      'Valoración gratuita de tu inmueble',
      'Estudios de mercado detallados',
      'Traspasos de negocios y locales comerciales',
    ],
    image: 'https://readdy.ai/api/search-image?query=luxury%20real%20estate%20property%20keys%20on%20elegant%20dark%20surface%2C%20modern%20apartment%20building%20exterior%2C%20professional%20real%20estate%20concept%2C%20gold%20and%20dark%20blue%20aesthetic%2C%20minimalist%20photography&width=400&height=220&seq=service-realestate-01&orientation=landscape',
  },
  {
    id: 'C',
    icon: 'ri-file-shield-2-line',
    title: 'Trámites y Gestión',
    tag: null,
    tagColor: '',
    description: 'Nos encargamos de toda la burocracia para que tú no pierdas ni un minuto de tu tiempo.',
    items: [
      'Transferencias de vehículos DGT',
      'Contratos de arrendamiento',
      'Herencias y sucesiones',
      'Protección de datos RGPD',
    ],
    image: 'https://readdy.ai/api/search-image?query=official%20documents%20stamps%20and%20legal%20papers%20on%20dark%20elegant%20desk%2C%20bureaucracy%20management%20concept%2C%20professional%20business%20administration%2C%20gold%20seal%20and%20dark%20blue%20tones%2C%20clean%20minimalist%20style&width=400&height=220&seq=service-tramites-01&orientation=landscape',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-28 overflow-hidden" style={{ background: '#1A1F2B' }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(197,160,89,0.3) 40px, rgba(197,160,89,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(197,160,89,0.3) 40px, rgba(197,160,89,0.3) 41px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Lo que hacemos por ti
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Tres servicios.{' '}
            <span className="text-[#C5A059]">Una sola llamada.</span>
          </h2>
          <p
            className="text-white/55 text-lg mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Cubrimos todo lo que necesitas para simplificar tu vida administrativa, energética e inmobiliaria.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-[32px] overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Card image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] via-[#1A1F2B]/30 to-transparent"></div>

                {/* Service letter badge */}
                <div className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#C5A059] text-[#1A1F2B] font-extrabold text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.id}
                </div>

                {/* Tag */}
                {service.tag && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-bold ${service.tagColor}`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.tag}
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#C5A059]/15">
                    <i className={`${service.icon} text-[#C5A059] text-lg`}></i>
                  </div>
                  <h3
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className="text-white/60 text-sm leading-relaxed mb-5"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {service.description}
                </p>

                <ul className="flex flex-col gap-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-circle-fill text-[#C5A059] text-base"></i>
                      </div>
                      <span
                        className="text-white/75 text-sm leading-snug"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            <i className="ri-phone-line text-[#1A1F2B] text-lg"></i>
            <span className="text-[#1A1F2B] font-bold text-sm tracking-wide uppercase whitespace-nowrap">
              Solicitar consulta gratuita
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
