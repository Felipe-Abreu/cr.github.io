import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Truck, Shield, CreditCard } from "lucide-react";
import bookCover from "@/assets/book-cover.jpg";

export function Hero() {
  const handleBuyClick = () => {
    window.open('https://wa.me/5564981494012?text=Quero%20comprar%20o%20livro%20Esperança', '_blank');
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
              Um convite lúcido e acessível para transformar a esperança em prática cotidiana.
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

          {/* Imagem do livro */}
          <div className="relative animate-scale-in">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary-foreground/20 blur-3xl rounded-full"></div>
              <img 
                src={bookCover} 
                alt="Capa do livro Esperança: O Caminho para a Transformação"
                className="relative w-full h-auto shadow-strong rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
