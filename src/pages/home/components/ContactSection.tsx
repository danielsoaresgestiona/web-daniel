import { useState, FormEvent } from 'react';

const FORM_URL = 'https://readdy.ai/api/form/d7h75j7hkiob2r09ifqg';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
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
    setStatus('sending');
    try {
      const body = new URLSearchParams();
      Object.entries(formData).forEach(([k, v]) => body.append(k, v));
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setCharCount(0);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="relative py-28 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C5A059]/70 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Hablemos
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-[#1A1F2B] leading-tight"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Contacta con{' '}
            <span className="text-[#C5A059]">Daniel Soares</span>
          </h2>
          <p
            className="text-[#1A1F2B]/55 text-lg mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Primera consulta siempre gratuita. Sin compromiso. Te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Contact info */}
          <div className="flex-shrink-0 w-full lg:w-[380px] flex flex-col gap-6">
            {/* Info card */}
            <div
              className="rounded-[32px] p-8 border border-[#C5A059]/20"
              style={{ background: '#1A1F2B' }}
            >
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://static.readdy.ai/image/7d6a93e92b1b509536fa772fdf453f3b/8aa3c503a7bcb90cd119863022b8b429.png"
                  alt="Daniel Soares Gestiona"
                  className="h-12 w-auto object-contain"
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
                  className="flex items-start gap-4 mb-6 group cursor-pointer"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#C5A059]/15 flex-shrink-0 group-hover:bg-[#C5A059]/25 transition-colors">
                    <i className={`${item.icon} text-[#C5A059] text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                className="flex items-center gap-3 w-full px-5 py-3 rounded-full cursor-pointer transition-all hover:scale-105 whitespace-nowrap"
                style={{ background: '#25D366' }}
              >
                <i className="ri-whatsapp-line text-white text-xl"></i>
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Escríbenos por WhatsApp
                </span>
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-[24px] overflow-hidden border border-[#C5A059]/20 h-52">
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
          <div className="flex-1">
            <form
              data-readdy-form
              id="contact-form-daniel-soares"
              onSubmit={handleSubmit}
              className="rounded-[32px] p-8 md:p-10 border border-[#C5A059]/15"
              style={{ background: 'rgba(26,31,43,0.03)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                  <label className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                  <label className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                  <label className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                    <option value="Optimización Energética">Optimización Energética</option>
                    <option value="Inmobiliaria">Inmobiliaria</option>
                    <option value="Trámites y Gestión">Trámites y Gestión</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-7">
                <label className="text-[#1A1F2B]/60 text-xs font-semibold uppercase tracking-wide"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
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
                <p className={`text-xs text-right ${charCount > 480 ? 'text-red-500' : 'text-[#1A1F2B]/40'}`}
                  style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {charCount}/500
                </p>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mb-5 px-5 py-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3">
                  <i className="ri-checkbox-circle-fill text-emerald-500 text-xl"></i>
                  <p className="text-emerald-700 text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    ¡Mensaje enviado! Te contactaremos en menos de 24 horas.
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-5 px-5 py-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3">
                  <i className="ri-error-warning-fill text-red-500 text-xl"></i>
                  <p className="text-red-700 text-sm font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    Error al enviar. Por favor, inténtalo de nuevo o llámanos directamente.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-full cursor-pointer transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
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

              <p className="text-center text-[#1A1F2B]/40 text-xs mt-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Tus datos están protegidos conforme al RGPD. No compartimos tu información con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
