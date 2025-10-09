import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, CreditCard, Truck, Clock } from "lucide-react";

export function Pricing() {
  const handleBuyClick = () => {
    window.open('https://wa.me/5564981494012?text=Quero%20comprar%20o%20livro%20Esperança', '_blank');
  };

  const features = [
    "Livro físico com capa colorida",
    "Envio pelos Correios",
    "Pagamento seguro (Pix e Cartão)",
    "Garantia de qualidade",
  ];

  return (
    <section id="comprar" className="py-20 md:py-28 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Quanto custa?
          </h2>
          <p className="text-xl text-muted-foreground">
            Transforme sua vida por um investimento acessível
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-strong animate-scale-in">
          {/* Preço */}
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
              R$ 40,00
            </div>
            <div className="text-xl text-muted-foreground">
              + frete calculado no checkout
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* Informações de entrega */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 p-6 bg-secondary/30 rounded-lg">
            <div className="flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">Pagamento</p>
                <p className="text-sm text-muted-foreground">Pix e Cartão</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">Postagem</p>
                <p className="text-sm text-muted-foreground">Até 3 dias úteis</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">Entrega</p>
                <p className="text-sm text-muted-foreground">Todo o Brasil</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={handleBuyClick}
              className="w-full md:w-auto"
            >
              Compre aqui
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Ótimo para presentear • Compre múltiplas unidades
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
