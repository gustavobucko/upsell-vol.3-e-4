import { useState, useEffect, useRef } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, "rgba(0, 212, 224, 0.35)");
    gradient.addColorStop(0.5, "rgba(255, 165, 0, 0.25)");
    gradient.addColorStop(1, "rgba(255, 69, 0, 0.3)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  return (
    <main
      className="min-h-screen w-full pb-24 md:pb-0"
      style={{
        background:
          "linear-gradient(160deg, rgb(255, 255, 255) 0%, rgba(0, 212, 224, 0.18) 25%, rgba(255, 165, 0, 0.22) 65%, rgba(255, 69, 0, 0.28) 100%) fixed",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center px-5 pt-10 pb-8 overflow-hidden"
        style={{ minHeight: "auto" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ zIndex: 0 }}
        />
        <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center gap-4">
          <img
            alt="Logo"
            className="h-10 object-contain"
            src="https://static.readdy.ai/image/cfd36e59f048292473ecb14da542f16f/f75c97789ca9f1ab362c49650cc78717.png"
          />
          <div
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white font-semibold text-xs"
            style={{
              backgroundColor: "rgb(34, 197, 94)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span>✅</span>
            <span>Compra confirmada! Seu kit está no seu e-mail.</span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: "rgb(26, 26, 26)",
            }}
          >
            Espera! Oferta exclusiva para você
          </h1>
          <h2
            className="text-xl md:text-3xl font-bold"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 69, 0))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Volumes 3 e 4 com 50% OFF
          </h2>
          <div
            className="flex items-center gap-2 w-full rounded-xl px-4 py-3 text-left"
            style={{
              background: "rgba(255, 165, 0, 0.18)",
              borderLeft: "4px solid rgb(255, 107, 0)",
            }}
          >
            <span className="text-base">⚠️</span>
            <p
              className="text-xs font-semibold"
              style={{
                color: "rgb(26, 26, 26)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Esta oferta aparece uma única vez. Ao fechar, desaparece para
              sempre.
            </p>
          </div>
        </div>
      </section>

      {/* Timer Bar */}
      <div
        className="mx-4 my-3 rounded-2xl px-5 py-4 flex items-center justify-between gap-4"
        style={{
          background: "rgba(26, 26, 26, 0.9)",
          border: "1.5px solid rgba(255, 107, 0, 0.4)",
        }}
      >
        <p
          className="text-white text-xs font-semibold leading-tight flex-1"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          ⏳ Oferta expira em:
        </p>
        <div
          className="flex items-center gap-1 px-4 py-2 rounded-xl"
          style={{
            background: "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 69, 0))",
          }}
        >
          <span
            className="text-2xl font-bold text-white tabular-nums"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {timeDisplay}
          </span>
        </div>
      </div>

      {/* What you'll receive */}
      <section className="px-4 py-6 flex flex-col items-center gap-5">
        <h2
          className="text-2xl md:text-3xl font-bold text-center"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "rgb(26, 26, 26)",
          }}
        >
          O que você vai receber
        </h2>

        {/* Volume 3 */}
        <div
          className="w-full max-w-lg rounded-2xl p-4 flex flex-row items-center gap-4"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(12px)",
            border: "2px solid rgb(0, 212, 224)",
          }}
        >
          <div
            className="flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: 90, height: 110 }}
          >
            <img
              alt="Capa Volume 3"
              className="w-full h-full object-cover"
              src="https://static.readdy.ai/image/cfd36e59f048292473ecb14da542f16f/1e2b8d33db813bbc593137e7ae013083.jpeg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{
                color: "rgb(0, 184, 196)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Volume 3
            </span>
            <h3
              className="text-base font-bold leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "rgb(26, 26, 26)",
              }}
            >
              28 Mandalas &amp; Padrões Geométricos
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "rgb(74, 74, 74)",
              }}
            >
              Relaxamento profundo e meditativo.
            </p>
          </div>
        </div>

        {/* Volume 4 */}
        <div
          className="w-full max-w-lg rounded-2xl p-4 flex flex-row items-center gap-4"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(12px)",
            border: "2px solid rgb(255, 107, 0)",
          }}
        >
          <div
            className="flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: 90, height: 110 }}
          >
            <img
              alt="Capa Volume 4"
              className="w-full h-full object-cover"
              src="https://static.readdy.ai/image/cfd36e59f048292473ecb14da542f16f/1cd257ab0e6f1746d19897b4199c170e.jpeg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span
              className="text-xs font-bold uppercase tracking-wider"
              style={{
                color: "rgb(255, 107, 0)",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Volume 4
            </span>
            <h3
              className="text-base font-bold leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "rgb(26, 26, 26)",
              }}
            >
              28 Jardins &amp; Paisagens Florais
            </h3>
            <p
              className="text-xs leading-relaxed"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "rgb(74, 74, 74)",
              }}
            >
              Os favoritos de quem já tem o Vol. 1.
            </p>
          </div>
        </div>

        {/* Info bar */}
        <div
          className="flex items-center gap-2 rounded-xl px-4 py-3 w-full max-w-lg"
          style={{
            background: "rgba(255, 165, 0, 0.12)",
            border: "1px solid rgba(255, 165, 0, 0.4)",
          }}
        >
          <span className="text-base">📦</span>
          <p
            className="text-xs font-semibold"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "rgb(26, 26, 26)",
            }}
          >
            56 desenhos novos • PDF digital • Acesso imediato por e-mail
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-4 flex justify-center">
        <div
          className="w-full max-w-lg rounded-2xl px-6 py-8 flex flex-col items-center text-center gap-4"
          style={{
            background:
              "linear-gradient(135deg, rgb(0, 212, 224) 0%, rgb(255, 165, 0) 60%, rgb(255, 69, 0) 100%)",
          }}
        >
          <p
            className="text-white/80 text-sm line-through"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            De R$ 59,80
          </p>
          <div className="flex flex-col items-center gap-0.5">
            <span
              className="text-6xl font-extrabold"
              style={{
                fontFamily: "Poppins, sans-serif",
                background:
                  "linear-gradient(135deg, rgb(255, 245, 224), rgb(255, 255, 255))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(rgba(0, 0, 0, 0.15) 0px 2px 6px)",
              }}
            >
              R$ 29,90
            </span>
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              50% OFF — os dois volumes juntos
            </span>
          </div>
          <p
            className="text-xs text-white/90"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Acesso imediato • PDF para imprimir • Garantia 7 dias
          </p>
          <div
            style={{ textAlign: "center" }}
            id="kiwify-upsell-emgjhL6"
            data-upsell-url=""
            data-downsell-url="https://downritualr.netlify.app/"
          >
            <button
              id="kiwify-upsell-trigger-emgjhL6"
              className="w-full mt-1 py-4 rounded-2xl text-white font-bold text-base text-center cursor-pointer transition-all duration-300 hover:scale-105 leading-snug"
              style={{
                fontFamily: "Poppins, sans-serif",
                background:
                  "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 69, 0))",
                boxShadow: "rgba(255, 69, 0, 0.5) 0px 6px 28px",
                animation: "ctaPulse 2.5s ease-in-out infinite",
                border: "none",
              }}
            >
              <span className="block">✅ SIM! QUERO OS VOLUMES 3 E 4</span>
              <span className="block">POR APENAS R$ 29,90</span>
            </button>
            <div
              id="kiwify-upsell-cancel-trigger-emgjhL6"
              className="mt-4 cursor-pointer text-sm underline"
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "rgb(153, 153, 153)",
              }}
            >
              Não, obrigada. Prefiro continuar sem os volumes 3 e 4.
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 py-4 flex justify-center">
        <div
          className="w-full max-w-lg rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
          style={{
            background: "rgba(255, 255, 255, 0.5)",
            backdropFilter: "blur(12px)",
            border: "1.5px solid rgba(255, 107, 0, 0.2)",
          }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-base">
                ★
              </span>
            ))}
          </div>
          <p
            className="text-sm leading-relaxed"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "rgb(58, 58, 58)",
            }}
          >
            "Comprei na hora. Sabia que ia querer mais desenhos logo. Valeu
            muito a pena — já imprimi tudo e tenho material para meses."
          </p>
          <p
            className="text-xs font-semibold"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "rgb(26, 26, 26)",
            }}
          >
            — Patrícia, 42 anos, Rio de Janeiro
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section id="upsell-checkout" className="px-4 py-4 flex justify-center">
        <div
          className="w-full max-w-lg rounded-2xl px-5 py-4 flex items-center gap-3"
          style={{
            background: "rgba(34, 197, 94, 0.1)",
            border: "2px solid rgb(34, 197, 94)",
          }}
        >
          <span className="text-3xl flex-shrink-0">🛡️</span>
          <p
            className="text-sm font-semibold leading-snug"
            style={{
              fontFamily: "Poppins, sans-serif",
              color: "rgb(26, 26, 26)",
            }}
          >
            Garantia de 7 dias — 100% do valor devolvido sem perguntas.
          </p>
        </div>
      </section>

      {/* Spacer for mobile fixed bar */}
      <div className="pb-6" />

      {/* Fixed bottom CTA (mobile) */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 md:hidden"
        style={{
          background: "rgba(255, 255, 255, 0.97)",
          borderTop: "1px solid rgba(255, 107, 0, 0.2)",
          backdropFilter: "blur(10px)",
        }}
      >
        <button
          onClick={() => {
            const trigger = document.getElementById("kiwify-upsell-trigger-emgjhL6");
            if (trigger) trigger.click();
          }}
          className="w-full py-3 rounded-2xl text-white font-bold text-sm text-center cursor-pointer block leading-snug"
          style={{
            fontFamily: "Poppins, sans-serif",
            background:
              "linear-gradient(135deg, rgb(255, 107, 0), rgb(255, 69, 0))",
            boxShadow: "rgba(255, 69, 0, 0.45) 0px 4px 20px",
            animation: "ctaPulseFixed 2.5s ease-in-out infinite",
            border: "none",
          }}
        >
          <span className="block">✅ SIM! QUERO OS VOLUMES 3 E 4</span>
          <span className="block">POR APENAS R$ 29,90</span>
        </button>
      </div>
    </main>
  );
};

export default Index;
