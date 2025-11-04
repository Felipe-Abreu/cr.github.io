import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Truck, Shield, CreditCard } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

export function Hero() {
  const handleBuyClick = () => {
    window.open(
      "https://wa.me/5564981494012?text=Quero%20comprar%20o%20livro%20Esperança",
      "_blank"
    );
  };

  return (
    <section className="hero-gradient min-h-[90vh] flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Texto */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <Badge variant="secondary" className="text-sm font-medium">
              Disponível agora
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-balance leading-tight">
              Esperança: O Caminho para a Transformação
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              Um convite lúcido e acessível para transformar a esperança em
              prática cotidiana.
            </p>

            {/* Preço */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                R$ 40,00 <span className="text-lg font-normal">+ frete</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-primary-foreground/80 mt-3">
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Envio para todo Brasil</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Compra segura</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Pix e Cartão</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                variant="cta"
                size="xl"
                onClick={handleBuyClick}
                className="w-full sm:w-auto"
              >
                <ShoppingCart className="w-5 h-5" />
                Compre aqui
              </Button>
            </div>
          </div>

          {/* Imagem do livro (mantendo a foto única, melhor enquadramento e contorno) */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[380px] lg:w-[440px]">
              {/* destaque difuso atrás da imagem */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/8 to-transparent filter blur-3xl opacity-90 -z-10"></div>

              {/* cartão da imagem com borda, sombra e frame interno */}
              <div
                className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_rgba(8,15,30,0.4)] ring-1 ring-white/10"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Vignette (overlay radial) para escurecer bordas e focar no centro/direita */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 35% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0.18) 100%)",
                    mixBlendMode: "multiply",
                    zIndex: 10,
                  }}
                />

                {/* imagem única: ajusta object-position para focar pessoa + capa */}
                <img
                  src={bookCover}
                  alt="Capa e autor — Esperança"
                  className="w-full h-[560px] md:h-[620px] lg:h-[720px] object-cover"
                  // Ajuste object-position para deslocar o enquadramento.
                  // Ex.: '30% 50%' mostra mais à esquerda (pessoa); '60% 50%' foca mais na capa.
                  style={{ objectPosition: "38% 50%" }}
                />

                {/* contorno interno claro no canto inferior direito com leve destaque */}
                <div
                  aria-hidden="true"
                  className="absolute right-4 bottom-4 rounded-md px-3 py-2 text-sm text-white/90"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                    zIndex: 20,
                    transform: "translateZ(10px)",
                  }}
                >
                  <div className="font-medium">Carlos Roberto</div>
                  <div className="text-xs opacity-80">Autor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
