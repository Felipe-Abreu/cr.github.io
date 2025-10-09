import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import authorPhoto from "@/assets/author-photo.jpg";

export function AboutAuthor() {
  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sobre o autor
          </h2>
        </div>

        <Card className="overflow-hidden shadow-strong">
          <div className="grid lg:grid-cols-5 gap-8 p-8 lg:p-12">
            {/* Foto do autor */}
            <div className="lg:col-span-2 flex justify-center items-start animate-scale-in">
              <div className="relative max-w-sm">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
                <img 
                  src={authorPhoto} 
                  alt="Carlos Roberto de Miranda - autor do livro Esperança"
                  className="relative w-full h-auto rounded-full shadow-strong"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3 space-y-6 animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-semibold text-primary">
                Carlos Roberto de Miranda
              </h3>
              
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-primary">Carlos Roberto de Miranda</strong> é educador, escritor e formador. Sua trajetória é marcada pelo compromisso com o ser humano em sua totalidade.
                </p>
                
                <p>
                  Com formação em <strong>Ciências (Biologia) e Direito</strong>, dedica-se há anos à observação do comportamento humano, espiritualidade e processos de transformação pessoal.
                </p>
                
                <p>
                  Seu estilo <strong className="text-primary">direto, sensível e provocador</strong> convida o leitor a enxergar a vida com mais profundidade, propósito e coragem.
                </p>
                
                <p className="text-muted-foreground italic">
                  Este é seu primeiro livro publicado.
                </p>
              </div>

              <div className="pt-4">
                <Button variant="cta" size="lg" onClick={handleBuyClick}>
                  Compre aqui
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
