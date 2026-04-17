import { useState, FormEvent } from 'react';

const FORM_URL = 'https://formspree.io/f/mvzdawzj';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === 'message') {
      if (value.length > 500) return;
      setCharCount(value.length);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    if (!privacyAccepted) {
      setPrivacyError(true);
      return;
    }
    setPrivacyError(false);
    setStatus('sending');
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      body.append('privacidad', 'He leído y acepto la Política de Privacidad');
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setPrivacyAccepted(false);
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative py-16 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-3 md:mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Hablemos
          </p>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1F2B] leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contacta con{' '}
            <span className="text-[#C5A059]">Daniel Soares</span>
          </h2>
          <p
            className="text-[#1A1F2B]/55 text-sm md:text-lg mt-4 md:mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Primera consulta siempre gratuita. Sin compromiso. Te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* Contact info */}
          <div className="flex-shrink-0 w-full lg:w-[380px] flex flex-col gap-5 md:gap-6">
            {/* Info card */}
            <div
              className="rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-[#C5A059]/20"
              style={{ background: '#1A1F2B' }}
            >
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <img
                  src="https://static.readdy.ai/image/7d6a93e92b1b509536fa772fdf453f3b/8aa3c503a7bcb90cd119863022b8b429.png"
                  alt="Daniel Soares Gestiona"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>

              {[
                {
                  icon: 'ri-map-pin-2-line',
                  label: 'Dirección',
                  value: 'C/ Río Cares 20, Gijón',
                  sub: 'Asturias, España',
                  href: 'https://maps.google.com/?q=C/+Río+Cares+20,+Gijón,+Asturias',
                },
                {
                  icon: 'ri-phone-line',
                  label: 'Teléfono',
                  value: '615 22 37 54',
                  sub: 'Lun–Vie 9:00–19:00',
                  href: 'tel:+34615223754',
                },
                {
                  icon: 'ri-mail-line',
                  label: 'Email',
                  value: 'info@danielsoaresgestiona.com',
                  sub: 'Respuesta en &lt;24h',
                  href: 'mailto:info@danielsoaresgestiona.com',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  rel="nofollow"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  className="flex items-start gap-3 md:gap-4 mb-5 md:mb-6 group cursor-pointer"
                >
                  <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-xl bg-[#C5A059]/15 flex-shrink-0 group-hover:bg-[#C5A059]/25 transition-colors">
                    <i className={`${item.icon} text-[#C5A059] text-base md:text-lg`}></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white/40 text-xs mb-0.5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-sm break-words" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {item.value}
                    </p>
                    <p
                      className="text-white/50 text-xs mt-0.5"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                      dangerouslySetInnerHTML={{ __html: item.sub }}
                    />
                  </div>
                </a>
              ))}

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/34615223754"
                target="_blank"
                rel="nofollow"
                className="flex items-center justify-center gap-3 w-full px-5 py-3 rounded-full cursor-pointer transition-all hover:scale-105 whitespace-nowrap"
                style={{ background: '#25D366' }}
              >
                <i className="ri-whatsapp-line text-white text-xl"></i>
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Escríbenos por WhatsApp
                </span>
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-[20px] md:rounded-[24px] overflow-hidden border border-[#C5A059]/20 h-44 md:h-52">
              <iframe
                title="Ubicación Daniel Soares Gestiona"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.0!2d-5.6611!3d43.5322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQy8gUsOtbyBDYXJlcyAyMCwgR2lqw7Nu!5e0!3m2!1ses!2ses!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-full">
            <form
              id="contact-form-daniel-soares"
              data-readdy-form
              onSubmit={handleSubmit}
              className="rounded-[24px] md:rounded-[32px] p-5 md:p-10 border border-[#C5A059]/15"
              style={{ background: 'rgba(26,31,43,0.03)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="px-4 py-3 rounded-xl border border-[#1A1F2B]/15 bg-white text-[#1A1F2B] text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="px-4 py-3 rounded-xl border border-[#1A1F2B]/15 bg-white text-[#1A1F2B] text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="615 22 37 54"
                    className="px-4 py-3 rounded-xl border border-[#1A1F2B]/15 bg-white text-[#1A1F2B] text-sm focus:outline-none focus:border-[#C5A059] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-xl border border-[#1A1F2B]/15 bg-white text-[#1A1F2B] text-sm focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="Ahorro Energético">Ahorro Energético</option>
                    <option value="Intermediación Inmobiliaria">Intermediación Inmobiliaria</option>
                    <option value="Trámites Administrativos">Trámites Administrativos</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-5 md:mb-6">
                <label
                  className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Mensaje *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  className="px-4 py-3 rounded-xl border border-[#1A1F2B]/15 bg-white text-[#1A1F2B] text-sm focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                />
                <p
                  className={`text-xs text-right ${charCount > 480 ? 'text-red-500' : 'text-[#1A1F2B]/40'}`}
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {charCount}/500
                </p>
              </div>

              {/* 1º - Casilla obligatoria de privacidad */}
              <div className="mb-5">
                <div className="flex items-start gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const next = !privacyAccepted;
                      setPrivacyAccepted(next);
                      if (next) setPrivacyError(false);
                    }}
                    className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      privacyAccepted
                        ? 'bg-[#C5A059] border-[#C5A059]'
                        : privacyError
                        ? 'bg-white border-red-500'
                        : 'bg-white border-[#1A1F2B]/30 hover:border-[#C5A059]/60'
                    }`}
                  >
                    {privacyAccepted && (
                      <i className="ri-check-line text-white text-xs"></i>
                    )}
                  </button>
                  <span
                    className="text-[#1A1F2B]/70 text-sm leading-relaxed cursor-pointer select-none"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    onClick={() => {
                      const next = !privacyAccepted;
                      setPrivacyAccepted(next);
                      if (next) setPrivacyError(false);
                    }}
                  >
                    He leído y acepto la{' '}
                    <a
                      href="/privacidad"
                      target="_blank"
                      rel="nofollow"
                      className="text-[#C5A059] underline underline-offset-2 hover:text-[#A8863A] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Política de Privacidad
                    </a>
                    . <span className="text-red-500 font-semibold">*</span>
                  </span>
                </div>
                {privacyError && (
                  <p
                    className="mt-1.5 ml-8 text-red-500 text-xs flex items-center gap-1.5"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    <i className="ri-error-warning-line text-sm"></i>
                    Debes aceptar la Política de Privacidad para enviar el formulario.
                  </p>
                )}
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mb-5 px-4 py-3 md:px-5 md:py-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-emerald-500 text-xl flex-shrink-0"></i>
                  <p className="text-emerald-700 text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    ¡Mensaje enviado! Te contactaremos en menos de 24 horas.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-5 px-4 py-3 md:px-5 md:py-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
                  <i className="ri-error-warning-fill text-red-500 text-xl flex-shrink-0"></i>
                  <p className="text-red-700 text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Error al enviar. Por favor, inténtalo de nuevo o llámanos directamente.
                  </p>
                </div>
              )}

              {/* 2º - Botón de envío */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap mb-6"
                style={{
                  background: 'linear-gradient(135deg, #C5A059 0%, #A8863A 100%)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <i className="ri-loader-4-line animate-spin text-[#1A1F2B] text-lg"></i>
                    <span className="text-[#1A1F2B] font-bold text-sm tracking-wide uppercase">Enviando...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line text-[#1A1F2B] text-lg"></i>
                    <span className="text-[#1A1F2B] font-bold text-sm tracking-wide uppercase">Enviar consulta gratuita</span>
                  </>
                )}
              </button>

              {/* 3º - Bloque RGPD debajo del botón */}
              <div
                className="rounded-xl p-4 md:p-5 border border-[#C5A059]/20"
                style={{ background: 'rgba(197,160,89,0.04)', fontFamily: 'Raleway, sans-serif' }}
              >
                <p
                  className="text-[#1A1F2B] text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Información básica sobre protección de datos
                </p>
                <div className="flex flex-col gap-1.5 text-xs text-[#1A1F2B]/60 leading-relaxed">
                  <p><strong className="text-[#1A1F2B]/80">Responsable:</strong> Daniel Soares Augusto</p>
                  <p><strong className="text-[#1A1F2B]/80">Finalidad:</strong> Gestionar la consulta o contacto solicitado a través de este formulario.</p>
                  <p><strong className="text-[#1A1F2B]/80">Legitimación:</strong> Consentimiento del interesado al marcar la casilla de aceptación.</p>
                  <p><strong className="text-[#1A1F2B]/80">Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal o proveedores de servicios necesarios para el funcionamiento de la web.</p>
                  <p>
                    <strong className="text-[#1A1F2B]/80">Derechos:</strong> Puedes acceder, rectificar y suprimir tus datos dirigiendo un correo a{' '}
                    <a href="mailto:info@danielsoaresgestiona.com" className="text-[#C5A059] hover:underline" rel="nofollow">
                      info@danielsoaresgestiona.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-[#1A1F2B]/80">Información adicional:</strong>{' '}
                    <a href="/privacidad" target="_blank" rel="nofollow" className="text-[#C5A059] hover:underline">
                      Política de Privacidad
                    </a>
                  </p>
                </div>
              </div>

              <p className="text-center text-[#1A1F2B]/35 text-xs mt-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <span className="text-red-400">*</span> Campo obligatorio
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
