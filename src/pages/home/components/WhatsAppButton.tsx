export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34615223754?text=Hola%20Daniel%2C%20me%20gustar%C3%ADa%20solicitar%20una%20consulta%20gratuita."
      target="_blank"
      rel="nofollow"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110"
      style={{
        background: '#25D366',
        boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
        animation: 'whatsapp-pulse 2.5s infinite',
      }}
      aria-label="Contactar por WhatsApp"
    >
      <i className="ri-whatsapp-line text-white text-2xl"></i>
      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.45); }
          50% { box-shadow: 0 4px 36px rgba(37,211,102,0.7), 0 0 0 8px rgba(37,211,102,0.12); }
        }
      `}</style>
    </a>
  );
}
