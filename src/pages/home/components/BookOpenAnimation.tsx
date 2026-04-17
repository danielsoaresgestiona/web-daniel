import { useState, useEffect } from 'react';

interface BookOpenAnimationProps {
  onComplete: () => void;
}

export default function BookOpenAnimation({ onComplete }: BookOpenAnimationProps) {
  const [phase, setPhase] = useState<'show' | 'opening' | 'open' | 'fadeout' | 'done'>('show');

  useEffect(() => {
    // Pause briefly so user sees the closed notebook
    const t1 = setTimeout(() => setPhase('opening'), 900);
    // Cover fully open
    const t2 = setTimeout(() => setPhase('open'), 2400);
    // Start fade out
    const t3 = setTimeout(() => setPhase('fadeout'), 2700);
    // Done
    const t4 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  const isOpening = phase === 'opening' || phase === 'open' || phase === 'fadeout';
  const isFading = phase === 'fadeout';

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #2a2a2a 0%, #111111 100%)',
        opacity: isFading ? 0 : 1,
        transition: isFading ? 'opacity 0.7s ease' : 'none',
      }}
    >
      {/* Soft spotlight from above */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse at top, rgba(197,160,89,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Notebook wrapper — perspective container */}
      <div
        style={{
          position: 'relative',
          width: '480px',
          height: '600px',
          perspective: '1200px',
          perspectiveOrigin: '50% 40%',
        }}
      >
        {/* ── BACK COVER (always visible, static) ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: '6px 18px 18px 6px',
            background: 'linear-gradient(160deg, #1e2535 0%, #141820 60%, #0e1118 100%)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(197,160,89,0.15)',
          }}
        >
          {/* Leather grain */}
          <LeatherGrain />
          {/* Gold border */}
          <div style={{
            position: 'absolute', inset: '10px',
            borderRadius: '4px 14px 14px 4px',
            border: '1px solid rgba(197,160,89,0.2)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* ── INNER PAGE (visible once cover opens) ── */}
        <div
          style={{
            position: 'absolute',
            inset: '4px 4px 4px 16px',
            borderRadius: '4px 14px 14px 4px',
            background: '#faf8f3',
            overflow: 'hidden',
            opacity: isOpening ? 1 : 0,
            transition: 'opacity 0.3s ease 0.4s',
          }}
        >
          {/* Ruled lines */}
          {Array.from({ length: 22 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '52px',
                right: '20px',
                top: `${68 + i * 22}px`,
                height: '1px',
                background: 'rgba(180,200,220,0.5)',
              }}
            />
          ))}
          {/* Red margin line */}
          <div style={{
            position: 'absolute',
            left: '48px',
            top: 0,
            bottom: 0,
            width: '1.5px',
            background: 'rgba(220,80,80,0.35)',
          }} />
          {/* Spiral holes */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: '8px',
                top: `${50 + i * 44}px`,
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: '#e8e4dc',
                border: '1.5px solid rgba(0,0,0,0.12)',
              }}
            />
          ))}
          {/* Page content */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '68px',
            right: '28px',
          }}>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px',
              letterSpacing: '3px',
              color: 'rgba(197,160,89,0.8)',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              Gijón · Asturias
            </div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              color: '#1A1F2B',
              lineHeight: 1.3,
              marginBottom: '8px',
            }}>
              Daniel Soares<br />
              <span style={{ color: '#C5A059' }}>Gestiona</span>
            </div>
            <div style={{
              width: '50px',
              height: '2px',
              background: '#C5A059',
              marginBottom: '14px',
            }} />
            <div style={{
              fontFamily: 'Raleway, sans-serif',
              fontSize: '12px',
              color: '#555',
              lineHeight: 1.8,
            }}>
              Simplificamos tu vida.<br />
              Energía · Inmobiliaria<br />
              Trámites · Gestión
            </div>
          </div>
        </div>

        {/* ── SPIRAL BINDING ── */}
        <div
          style={{
            position: 'absolute',
            left: '10px',
            top: '30px',
            bottom: '30px',
            width: '18px',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {Array.from({ length: 13 }).map((_, i) => (
            <SpiralCoil key={i} />
          ))}
        </div>

        {/* ── FRONT COVER (the flipping part) ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            transformOrigin: 'left center',
            transformStyle: 'preserve-3d',
            transform: isOpening
              ? 'rotateY(-175deg)'
              : 'rotateY(0deg)',
            transition: isOpening
              ? 'transform 1.3s cubic-bezier(0.45, 0.05, 0.25, 1.0)'
              : 'none',
            zIndex: 10,
          }}
        >
          {/* Front face */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '6px 18px 18px 6px',
              background: 'linear-gradient(160deg, #232a3a 0%, #1A1F2B 50%, #141820 100%)',
              backfaceVisibility: 'hidden',
              overflow: 'hidden',
            }}
          >
            <LeatherGrain />
            {/* Gold stitching border */}
            <div style={{
              position: 'absolute', inset: '12px',
              borderRadius: '4px 14px 14px 4px',
              border: '1.5px solid rgba(197,160,89,0.4)',
              pointerEvents: 'none',
            }} />
            {/* Corner ornaments */}
            <CornerOrnament pos="tl" />
            <CornerOrnament pos="tr" />
            <CornerOrnament pos="bl" />
            <CornerOrnament pos="br" />

            {/* Center brand content */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '16px',
            }}>
              {/* Emblem circle */}
              <div style={{
                width: '80px', height: '80px',
                borderRadius: '50%',
                border: '2px solid rgba(197,160,89,0.5)',
                background: 'rgba(197,160,89,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className="ri-briefcase-4-line" style={{ color: '#C5A059', fontSize: '32px' }} />
              </div>
              {/* Brand name */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  lineHeight: 1.3,
                }}>
                  DANIEL SOARES
                </div>
                <div style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#C5A059',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '5px',
                  marginTop: '4px',
                }}>
                  GESTIONA
                </div>
              </div>
              {/* Divider */}
              <div style={{
                width: '60px', height: '1px',
                background: 'linear-gradient(90deg, transparent, #C5A059, transparent)',
              }} />
              {/* Tagline */}
              <div style={{
                fontFamily: 'Raleway, sans-serif',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '10px',
                letterSpacing: '3px',
                textTransform: 'uppercase',
              }}>
                Simplificamos tu vida
              </div>
            </div>

            {/* Bottom label */}
            <div style={{
              position: 'absolute', bottom: '20px',
              left: 0, right: 0, textAlign: 'center',
              fontFamily: 'Raleway, sans-serif',
              color: 'rgba(197,160,89,0.35)',
              fontSize: '9px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}>
              Gijón · Asturias
            </div>
          </div>

          {/* Back face of cover (inside of cover — slightly lighter) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '6px 18px 18px 6px',
              background: 'linear-gradient(160deg, #2a2f3e 0%, #1e2330 100%)',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div style={{
              position: 'absolute', inset: '12px',
              borderRadius: '4px 14px 14px 4px',
              border: '1px solid rgba(197,160,89,0.15)',
            }} />
          </div>
        </div>

        {/* Cover edge shadow while closed */}
        {!isOpening && (
          <div style={{
            position: 'absolute',
            right: '-6px', top: '10px', bottom: '10px',
            width: '6px',
            background: 'linear-gradient(90deg, rgba(0,0,0,0.4), transparent)',
            borderRadius: '0 4px 4px 0',
          }} />
        )}

        {/* Floor shadow */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '10%',
          right: '10%',
          height: '30px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)',
          filter: 'blur(10px)',
        }} />
      </div>

      {/* "Tap to open" hint */}
      {phase === 'show' && (
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: 'Raleway, sans-serif',
            color: 'rgba(197,160,89,0.6)',
            fontSize: '12px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          Abriendo...
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ── Sub-components ── */

function LeatherGrain() {
  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        borderRadius: 'inherit',
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")
        `,
        backgroundSize: '200px 200px',
        opacity: 0.8,
        pointerEvents: 'none',
        mixBlendMode: 'overlay',
      }}
    />
  );
}

function SpiralCoil() {
  return (
    <div style={{
      width: '16px',
      height: '20px',
      borderRadius: '50%',
      border: '2.5px solid',
      borderColor: '#8a7a5a',
      background: 'linear-gradient(135deg, #c8b87a 0%, #7a6a40 50%, #b0a060 100%)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.2)',
      flexShrink: 0,
    }} />
  );
}

function CornerOrnament({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const isTop = pos.startsWith('t');
  const isLeft = pos.endsWith('l');
  const size = 20;
  return (
    <div style={{
      position: 'absolute',
      top: isTop ? '18px' : undefined,
      bottom: !isTop ? '18px' : undefined,
      left: isLeft ? '18px' : undefined,
      right: !isLeft ? '18px' : undefined,
      width: `${size}px`,
      height: `${size}px`,
      pointerEvents: 'none',
    }}>
      {/* Horizontal bar */}
      <div style={{
        position: 'absolute',
        top: isTop ? 0 : undefined,
        bottom: !isTop ? 0 : undefined,
        left: isLeft ? 0 : undefined,
        right: !isLeft ? 0 : undefined,
        width: `${size}px`,
        height: '2px',
        background: 'rgba(197,160,89,0.55)',
      }} />
      {/* Vertical bar */}
      <div style={{
        position: 'absolute',
        top: isTop ? 0 : undefined,
        bottom: !isTop ? 0 : undefined,
        left: isLeft ? 0 : undefined,
        right: !isLeft ? 0 : undefined,
        width: '2px',
        height: `${size}px`,
        background: 'rgba(197,160,89,0.55)',
      }} />
    </div>
  );
}
