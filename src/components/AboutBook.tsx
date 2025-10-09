import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import pageExcerpt1 from "@/assets/page-excerpt-1.jpg";
import pageExcerpt2 from "@/assets/page-excerpt-2.jpg";
import pageExcerpt3 from "@/assets/page-excerpt-3.jpg";

export function AboutBook() {
  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const highlights = [
    "Esperança como prática, não abstração",
    "Reflexões curtas e aplicáveis ao cotidiano",
    "Leitura acolhedora, direta e inspiradora",
  ];

  const quotes = [
    "Transformar momentos em celebrações significativas é a esperança em ação.",
    "É a forma como escolhemos reagir que molda nosso caminho.",
  ];

  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sobre o livro
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Em tempos de incerteza, falar de esperança pode parecer ingênuo. Este livro mostra o contrário: <strong className="text-primary">esperança é força ativa</strong> — que exige coragem, lucidez e ação.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Em linguagem clara e provocadora, Carlos Roberto de Miranda convida você a <strong className="text-primary">rever hábitos, crenças e escolhas</strong> e a transformar a esperança em atitude diária. Cada capítulo é um passo concreto rumo à transformação pessoal.
          </p>
        </div>

        {/* Highlights */}
        <Card className="p-8 mb-12 shadow-soft animate-scale-in">
          <h3 className="text-2xl font-semibold mb-6 text-center">O que você vai encontrar</h3>
          <ul className="space-y-4">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg">{highlight}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quotes.map((quote, index) => (
            <Card key={index} className="p-6 bg-primary/5 border-primary/20 animate-fade-in">
              <blockquote className="text-lg italic text-foreground/80">
                "{quote}"
              </blockquote>
            </Card>
          ))}
        </div>

        {/* Trechos de páginas */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="overflow-hidden rounded-lg shadow-soft animate-fade-in">
            <img 
              src={pageExcerpt1} 
              alt="Trecho do livro - página sobre esperança e transformação"
              className="w-full h-auto hover:scale-105 transition-smooth"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-soft animate-fade-in">
            <img 
              src={pageExcerpt2} 
              alt="Trecho do livro - reflexões sobre o cotidiano"
              className="w-full h-auto hover:scale-105 transition-smooth"
            />
          </div>
          <div className="overflow-hidden rounded-lg shadow-soft animate-fade-in">
            <img 
              src={pageExcerpt3} 
              alt="Trecho do livro - força da esperança"
              className="w-full h-auto hover:scale-105 transition-smooth"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" onClick={handleBuyClick}>
            Compre aqui
          </Button>
        </div>
      </div>
    </section>
  );
}
