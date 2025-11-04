import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function VideoGallery() {
  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Folhear o livro
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o livro de perto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vídeo 1 */}
          <Card className="overflow-hidden shadow-strong animate-scale-in">
            <video 
              controls 
              className="w-full h-auto"
              poster="/videos/book-preview-1.mp4"
            >
              <source src="/videos/book-preview-1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </Card>

          {/* Vídeo 2 */}
          <Card className="overflow-hidden shadow-strong animate-scale-in">
            <video 
              controls 
              autoPlay
              loop
              playsInline
              className="w-full h-auto"
              poster="/videos/book-preview-2.mp4"
            >
              <source src="/videos/book-preview-2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </Card>
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
