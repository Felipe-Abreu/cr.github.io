import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const handleBuyClick = () => {
    document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "O livro é físico?",
      answer: "Sim, é a versão impressa com capa colorida de alta qualidade.",
    },
    {
      question: "Quanto é o frete?",
      answer: "O frete é calculado no checkout conforme seu CEP. Enviamos para todo o Brasil pelos Correios.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "A postagem é feita em até 3 dias úteis após a confirmação do pagamento. O prazo de entrega depende dos Correios e da sua localização.",
    },
    {
      question: "Quais formas de pagamento?",
      answer: "Aceitamos pagamento por Pix e Cartão de Crédito.",
    },
    {
      question: "Posso comprar mais de uma unidade?",
      answer: "Sim! O livro é ótimo para presentear amigos e familiares. Você pode comprar quantas unidades desejar.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim. Se o livro chegar com defeito ou danificado, fazemos a troca em até 7 dias após o recebimento.",
    },
  ];

  return (
    <section className="py-20 md:py-28 section-gradient">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas antes de comprar
          </p>
        </div>

        <Accordion type="single" collapsible className="mb-12 animate-fade-in">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

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
