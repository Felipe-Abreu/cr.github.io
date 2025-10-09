import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Eye, Zap } from "lucide-react";

export function Benefits() {
  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Heart,
      title: "Resgatar o ânimo",
      description: "Nas pequenas ações do dia a dia",
    },
    {
      icon: Sparkles,
      title: "Transformar rotina",
      description: "Em gestos significativos",
    },
    {
      icon: Eye,
      title: "Exercitar um olhar",
      description: "Positivo e realista diante dos desafios",
    },
    {
      icon: Zap,
      title: "Colocar a esperança em movimento",
      description: "Agir com coragem",
    },
  ];

  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que você vai encontrar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Benefícios práticos para o seu dia a dia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-strong transition-smooth animate-scale-in"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Preço destacado */}
        <Card className="p-8 text-center bg-primary/5 border-primary/20 mb-8">
          <p className="text-2xl font-semibold text-foreground mb-2">
            Investimento
          </p>
          <p className="text-4xl md:text-5xl font-bold text-primary mb-4">
            R$ 40,00 <span className="text-xl font-normal text-muted-foreground">+ frete</span>
          </p>
          <p className="text-muted-foreground">
            Envio para todo o Brasil • Pagamento por Pix e Cartão
          </p>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="xl" onClick={handleBuyClick}>
            Compre aqui
          </Button>
        </div>
      </div>
    </section>
  );
}
