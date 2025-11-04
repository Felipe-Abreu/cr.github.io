import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Truck, Shield, CreditCard } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg"; 
import authorAvatar from "@/assets/author-avatar.jpg";

export function Hero() {
  const handleBuyClick = () => {
    window.open('https://wa.me/5564981494012?text=Quero%20comprar%20o%20livro%20Esperança', '_blank');
  };

  return (
    <section className="hero-gradient min-h-[85vh] flex items-center py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Texto */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <Badge variant="secondary" className="text-sm font-medium">
              Disponível agora
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Esperança: O Caminho para a Transformação
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto lg:mx-0">
              Um convite lúcido e acessível para transformar a esperança em prática cotidiana.
            </p>

            <div className="bg-primary-foreground/6 backdrop-blur-sm rounded-2xl p-6 inline-block">
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
                  <span>Pix</span>
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
                <ShoppingCart className="w-5 h-5 mr-2" />
                Compre aqui
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[320px] md:w-[380px] lg:w-[420px]">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent filter blur-2xl opacity-90"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={bookCover}
                  alt="Capa do livro Esperança"
                  className="w-full h-[560px] md:h-[640px] object-cover object-[85%_50%]"
                />
              </div>

              <div className="absolute left-4 bottom-4 flex items-center gap-3">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src={authorAvatar} alt="Autor" className="w-full h-full object-cover" />
                </div>
                <div className="hidden md:block text-white/90">
                  <div className="font-semibold">Carlos Roberto</div>
                  <div className="text-sm">Autor</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
