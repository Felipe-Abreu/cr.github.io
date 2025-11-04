import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Check, CreditCard, Truck, Clock, Package } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Pricing() {
  const [cep, setCep] = useState("");
  const [loading, setLoading] = useState(false);
  const [shipping, setShipping] = useState<{ service: string; price: number; days: string } | null>(null);
  const { toast } = useToast();

  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const calculateShipping = async () => {
    const cleanCep = cep.replace(/\D/g, "");
    
    if (cleanCep.length !== 8) {
      toast({
        title: "CEP inv�lido",
        description: "Por favor, insira um CEP v�lido com 8 d�gitos",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Usando API dos Correios via ViaCEP + c�lculo estimado
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        throw new Error("CEP n�o encontrado");
      }

      // Simula��o de c�lculo (em produ��o, usar API oficial dos Correios ou Melhor Envio)
      // PAC estimado baseado em regi�o
      const estimatedPrice = calculateEstimatedPrice(data.uf);
      const estimatedDays = calculateEstimatedDays(data.uf);
      
      setShipping({
        service: "PAC",
        price: estimatedPrice,
        days: estimatedDays,
      });

      toast({
        title: "Frete calculado!",
        description: `Destino: ${data.localidade} - ${data.uf}`,
      });
    } catch (error) {
      toast({
        title: "Erro ao calcular frete",
        description: "Verifique o CEP e tente novamente",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateEstimatedPrice = (uf: string) => {
    // Estimativa baseada em regi�o (GO � Centro-Oeste)
    const regions: { [key: string]: number } = {
      GO: 15, DF: 15, MT: 18, MS: 18, // Centro-Oeste
      SP: 18, RJ: 20, MG: 18, ES: 20, // Sudeste
      PR: 22, SC: 24, RS: 26, // Sul
      BA: 22, SE: 24, AL: 26, PE: 26, PB: 28, RN: 28, CE: 28, PI: 28, MA: 30, // Nordeste
      AM: 35, PA: 32, AP: 38, RR: 38, RO: 32, AC: 35, TO: 20, // Norte
    };
    return regions[uf] || 25;
  };

  const calculateEstimatedDays = (uf: string) => {
    const regions: { [key: string]: string } = {
      GO: "5-7", DF: "5-7", MT: "7-10", MS: "7-10",
      SP: "7-10", RJ: "8-12", MG: "7-10", ES: "8-12",
      PR: "8-12", SC: "10-15", RS: "10-15",
      BA: "10-15", SE: "12-18", AL: "12-18", PE: "12-18", PB: "12-18", RN: "12-18", CE: "12-18", PI: "12-18", MA: "15-20",
      AM: "15-25", PA: "15-25", AP: "20-30", RR: "20-30", RO: "15-25", AC: "20-30", TO: "8-12",
    };
    return regions[uf] || "10-15";
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 8) value = value.slice(0, 8);
    if (value.length > 5) {
      value = value.slice(0, 5) + "-" + value.slice(5);
    }
    setCep(value);
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
            <div className="text-xl text-muted-foreground mb-4">
              + frete
            </div>
            
            {/* Calculadora de Frete */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-muted-foreground text-left">
                  Calcule o frete para sua região (17x24cm, 300g)
                </p>
              </div>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  className="text-center text-lg"
                  maxLength={9}
                />
                <Button 
                  onClick={calculateShipping} 
                  disabled={loading || cep.length < 9}
                  variant="outline"
                  className="whitespace-nowrap"
                >
                  {loading ? "Calculando..." : "Calcular"}
                </Button>
              </div>
              
              {shipping && (
                <div className="mt-4 p-4 bg-primary/10 rounded-lg animate-fade-in">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <p className="font-semibold text-foreground">{shipping.service}</p>
                      <p className="text-sm text-muted-foreground">
                        Entrega em {shipping.days} dias úteis
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        R$ {shipping.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
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
              onClick={() => window.open('https://wa.me/5564981494012?text=Quero%20comprar%20o%20livro%20Esperança', '_blank')}
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
