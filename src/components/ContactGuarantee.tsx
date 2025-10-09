import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Mail, MessageCircle } from "lucide-react";

export function ContactGuarantee() {
  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
        document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Garantia */}
          <Card className="p-8 shadow-soft animate-scale-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Compra Segura</h3>
                <p className="text-muted-foreground">
                  Garantia de satisfação e atendimento humanizado
                </p>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li>✓ Pagamento 100% seguro</li>
              <li>✓ Troca em caso de defeito (7 dias)</li>
              <li>✓ Suporte personalizado</li>
              <li>✓ Envio com rastreamento</li>
            </ul>
          </Card>

          {/* Contato */}
          <Card className="p-8 shadow-soft animate-scale-in">
            <h3 className="text-2xl font-semibold mb-6">Entre em contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">E-mail</p>
                  <a 
                    href="mailto:contato@esperancalivro.com" 
                    className="text-primary hover:underline"
                  >
                    cr.livro@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <button 
                    onClick={handleWhatsAppClick}
                    className="text-primary hover:underline"
                  >
                    Enviar mensagem
                  </button>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Respondemos todas as mensagens em até 24 horas
            </p>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6">
            Pronto para transformar sua vida?
          </h3>
          <Button 
            variant="cta" 
            size="xl" 
            onClick={handleBuyClick}
          >
            Compre aqui
          </Button>
        </div>
      </div>
    </section>
  );
}
