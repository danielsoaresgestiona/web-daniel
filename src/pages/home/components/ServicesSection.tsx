const services = [
  {
    id: 'A',
    icon: 'ri-flashlight-line',
    title: 'Ahorro energético',
    tag: 'CONSULTA GRATUITA',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    description: 'Analizamos tu factura de luz o gas y detectamos si estás pagando de más. Sin compromiso, sin coste.',
    items: [
      'Revisión gratuita de tu factura energética',
      'Detección de cargos indebidos y sobreprecios',
      'Optimización de tarifa según tu consumo real',
      'Cambio de comercializadora sin complicaciones',
    ],
    footer: null,
    image: 'https://readdy.ai/api/search-image?query=electricity%20bill%20analysis%2C%20energy%20optimization%20concept%2C%20golden%20light%20bulb%20on%20dark%20background%2C%20professional%20business%20consulting%2C%20clean%20minimalist%20style%2C%20warm%20gold%20and%20dark%20blue%20tones&width=400&height=220&seq=service-energy-01&orientation=landscape',
  },
  {
    id: 'B',
    icon: 'ri-home-4-line',
    title: 'Intermediación inmobiliaria',
    tag: null,
    tagColor: '',
    description: 'Compra venta y alquiler de inmuebles y negocios con asesoramiento experto y estudio del mercado.',
    items: [
      'Venta y alquiler de inmuebles',
      'Traspasos de locales y negocios',
      'Estudio del mercado',
      'Valoramos personalmente tu caso',
    ],
    footer: 'Gestión completa hasta la firma',
    image: 'https://readdy.ai/api/search-image?query=luxury%20real%20estate%20property%20keys%20on%20elegant%20dark%20surface%2C%20modern%20apartment%20building%20exterior%2C%20professional%20real%20estate%20concept%2C%20gold%20and%20dark%20blue%20aesthetic%2C%20minimalist%20photography&width=400&height=220&seq=service-realestate-01&orientation=landscape',
  },
  {
    id: 'C',
    icon: 'ri-file-shield-2-line',
    title: 'Trámites administrativos',
    tag: null,
    tagColor: '',
    description: 'Nos encargamos de todo el papeleo para que tú no pierdas ni un minuto de tu tiempo.',
    items: [
      'Gestión de vehículos: cambio de titularidad, trámites DGT e ITV a domicilio',
      'Cumplimiento normativo: protección de datos, plan de igualdad, registro de jornada y control horario',
      'Redacción y gestión de documentos: contratos, herencias',
    ],
    footer: 'Facilitamos el proceso administrativo de cualquier trámite',
    image: 'https://readdy.ai/api/search-image?query=official%20documents%20stamps%20and%20legal%20papers%20on%20dark%20elegant%20desk%2C%20bureaucracy%20management%20concept%2C%20professional%20business%20administration%2C%20gold%20seal%20and%20dark%20blue%20tones%2C%20clean%20minimalist%20style&width=400&height=220&seq=service-tramites-01&orientation=landscape',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="relative py-16 md:py-28 overflow-hidden" style={{ background: '#1A1F2B' }}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(197,160,89,0.3) 40px, rgba(197,160,89,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(197,160,89,0.3) 40px, rgba(197,160,89,0.3) 41px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Lo que hacemos por ti
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Tres servicios.{' '}
            <span className="text-[#C5A059]">Una sola llamada.</span>
          </h2>
          <p
            className="text-white/55 text-sm md:text-lg mt-4 md:mt-5 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Cubrimos todo lo que necesitas para simplificar tu vida administrativa, energética e inmobiliaria, y todos estos servicios también para tu negocio.
          </p>
        </div>

        {/* Cards grid - 1 col mobile, 2 tablet, 3 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group rounded-[24px] md:rounded-[32px] overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 cursor-default flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              {/* Card image */}
              <div className="relative overflow-hidden h-40 md:h-48 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2B] via-[#1A1F2B]/30 to-transparent"></div>

                {/* Service letter badge */}
                <div
                  className="absolute top-3 left-3 md:top-4 md:left-4 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#C5A059] text-[#1A1F2B] font-extrabold text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {service.id}
                </div>

                {/* Tag */}
                {service.tag && (
                  <div
                    className={`absolute top-3 right-3 md:top-4 md:right-4 px-2 py-0.5 md:px-3 md:py-1 rounded-full border text-[10px] md:text-xs font-bold ${service.tagColor}`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {service.tag}
                  </div>
                )}
              </div>

              {/* Card content */}
              <div className="p-5 md:p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#C5A059]/15 flex-shrink-0">
                    <i className={`${service.icon} text-[#C5A059] text-base md:text-lg`}></i>
                  </div>
                  <h3
                    className="text-white font-bold text-sm md:text-base lg:text-lg leading-tight"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className="text-white/60 text-sm leading-relaxed mb-4 md:mb-5"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {service.description}
                </p>

                <ul className="flex flex-col gap-2.5 md:gap-3 flex-1">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 md:gap-3">
                      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-checkbox-circle-fill text-[#C5A059] text-base"></i>
                      </div>
                      <span
                        className="text-white/75 text-xs md:text-sm leading-snug"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {service.footer && (
                  <div className="mt-4 md:mt-5 pt-3 md:pt-4 border-t border-[#C5A059]/20 flex items-center gap-2">
                    <i className="ri-shield-check-line text-[#C5A059] text-sm flex-shrink-0"></i>
                    <span
                      className="text-[#C5A059] text-xs font-semibold leading-snug"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {service.footer}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-14 text-center">
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-6 py-3.5 md:px-8 md:py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-105"
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
