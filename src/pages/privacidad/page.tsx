import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PrivacidadPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#1A1F2B' }}>
      {/* Top gold line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent"></div>

      {/* Navbar minimal */}
      <nav className="sticky top-0 z-50 border-b border-white/5" style={{ background: '#1A1F2B' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://static.readdy.ai/image/7d6a93e92b1b509536fa772fdf453f3b/8aa3c503a7bcb90cd119863022b8b429.png"
              alt="Daniel Soares Gestiona"
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-white/60 hover:text-[#C5A059] text-sm transition-colors cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            <i className="ri-arrow-left-line"></i>
            Volver al inicio
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Documento legal
          </p>
          <h1
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Política de{' '}
            <span className="text-[#C5A059]">Privacidad</span>
          </h1>
          <div className="flex items-center gap-3 text-white/40 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
            <i className="ri-calendar-line text-[#C5A059]/60"></i>
            <span>Última actualización: abril de 2026</span>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-[#C5A059]/30 to-transparent"></div>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-12" style={{ fontFamily: 'Raleway, sans-serif' }}>

          {/* 1 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">1</span>
              Responsable del tratamiento
            </h2>
            <div className="rounded-2xl p-6 border border-white/8" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/70 leading-relaxed">
                <div><span className="text-white/40 text-xs uppercase tracking-wide block mb-1">Nombre</span>Daniel Soares Augusto</div>
                <div><span className="text-white/40 text-xs uppercase tracking-wide block mb-1">Actividad</span>Consultoría y gestión integral</div>
                <div><span className="text-white/40 text-xs uppercase tracking-wide block mb-1">Dirección</span>C/ Río Cares 20, Gijón, Asturias, España</div>
                <div><span className="text-white/40 text-xs uppercase tracking-wide block mb-1">Email de contacto</span>
                  <a href="mailto:info@danielsoaresgestiona.com" className="text-[#C5A059] hover:underline" rel="nofollow">
                    info@danielsoaresgestiona.com
                  </a>
                </div>
                <div><span className="text-white/40 text-xs uppercase tracking-wide block mb-1">Teléfono</span>615 22 37 54</div>
                <div><span className="text-white/40 text-xs uppercase tracking-wide block mb-1">Web</span>danielsoaresgestiona.com</div>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">2</span>
              Datos que recopilamos
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              A través del formulario de contacto de nuestra web recopilamos los siguientes datos personales:
            </p>
            <ul className="flex flex-col gap-2">
              {['Nombre y apellidos', 'Dirección de correo electrónico', 'Número de teléfono (opcional)', 'Servicio de interés', 'Contenido del mensaje'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/65 text-sm">
                  <i className="ri-checkbox-circle-line text-[#C5A059] text-base flex-shrink-0"></i>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">3</span>
              Finalidad del tratamiento
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Los datos personales que nos facilitas a través del formulario de contacto son tratados con la única finalidad de <strong className="text-white/85">gestionar y responder a tu consulta o solicitud de información</strong>. No utilizamos tus datos para ninguna otra finalidad sin tu consentimiento expreso.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">4</span>
              Base legal del tratamiento
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              La base legal para el tratamiento de tus datos es el <strong className="text-white/85">consentimiento del interesado</strong>, que otorgas de forma libre, específica, informada e inequívoca al marcar la casilla de aceptación de esta Política de Privacidad antes de enviar el formulario, de conformidad con el artículo 6.1.a) del Reglamento General de Protección de Datos (RGPD).
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">5</span>
              Conservación de los datos
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Tus datos serán conservados durante el tiempo necesario para atender tu consulta y, posteriormente, durante los plazos legalmente establecidos. Una vez cumplida la finalidad, los datos serán suprimidos de forma segura.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">6</span>
              Destinatarios de los datos
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-3">
              No se cederán tus datos a terceros, salvo en los siguientes supuestos:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                'Obligación legal que así lo exija.',
                'Proveedores de servicios técnicos necesarios para el funcionamiento de la web (como el servicio de envío de formularios Formspree, que actúa como encargado del tratamiento bajo acuerdo de confidencialidad).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                  <i className="ri-arrow-right-s-line text-[#C5A059] text-base flex-shrink-0 mt-0.5"></i>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">7</span>
              Tus derechos
            </h2>
            <p className="text-white/65 text-sm leading-relaxed mb-4">
              De conformidad con el RGPD y la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD), puedes ejercer los siguientes derechos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: 'ri-eye-line', title: 'Acceso', desc: 'Conocer qué datos tuyos tratamos.' },
                { icon: 'ri-edit-line', title: 'Rectificación', desc: 'Corregir datos inexactos o incompletos.' },
                { icon: 'ri-delete-bin-line', title: 'Supresión', desc: 'Solicitar la eliminación de tus datos.' },
                { icon: 'ri-pause-circle-line', title: 'Limitación', desc: 'Restringir el tratamiento en ciertos casos.' },
                { icon: 'ri-download-line', title: 'Portabilidad', desc: 'Recibir tus datos en formato estructurado.' },
                { icon: 'ri-close-circle-line', title: 'Oposición', desc: 'Oponerte al tratamiento de tus datos.' },
              ].map((right) => (
                <div key={right.title} className="flex items-start gap-3 rounded-xl p-4 border border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#C5A059]/15 flex-shrink-0">
                    <i className={`${right.icon} text-[#C5A059] text-sm`}></i>
                  </div>
                  <div>
                    <p className="text-white/85 text-sm font-semibold mb-0.5" style={{ fontFamily: 'Montserrat, sans-serif' }}>{right.title}</p>
                    <p className="text-white/50 text-xs leading-relaxed">{right.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl p-5 border border-[#C5A059]/20" style={{ background: 'rgba(197,160,89,0.06)' }}>
              <p className="text-white/65 text-sm leading-relaxed">
                Para ejercer cualquiera de estos derechos, envía un correo electrónico a{' '}
                <a href="mailto:info@danielsoaresgestiona.com" className="text-[#C5A059] hover:underline" rel="nofollow">
                  info@danielsoaresgestiona.com
                </a>{' '}
                indicando el derecho que deseas ejercer y adjuntando una copia de tu documento de identidad. También puedes presentar una reclamación ante la{' '}
                <a href="https://www.aepd.es" target="_blank" rel="nofollow" className="text-[#C5A059] hover:underline">
                  Agencia Española de Protección de Datos (AEPD)
                </a>.
              </p>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">8</span>
              Seguridad de los datos
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a que están expuestos.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-bold text-[#C5A059] mb-4 flex items-center gap-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#C5A059]/15 text-xs font-extrabold text-[#C5A059]">9</span>
              Cambios en esta política
            </h2>
            <p className="text-white/65 text-sm leading-relaxed">
              Nos reservamos el derecho a modificar esta Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales. En caso de cambios sustanciales, te lo comunicaremos de forma destacada en nuestra web. La fecha de última actualización siempre estará visible en la parte superior de este documento.
            </p>
          </section>

        </div>

        {/* Back button */}
        <div className="mt-16 pt-10 border-t border-white/8 flex justify-center">
          <Link
            to="/"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#C5A059]/40 text-[#C5A059] font-semibold text-sm hover:bg-[#C5A059]/10 transition-all cursor-pointer whitespace-nowrap"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <i className="ri-arrow-left-line"></i>
            Volver al inicio
          </Link>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-white/5 py-8 mt-8">
        <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
            © 2026 Daniel Soares Gestiona. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
            C/ Río Cares 20, Gijón, Asturias
          </p>
        </div>
      </footer>
    </div>
  );
}
