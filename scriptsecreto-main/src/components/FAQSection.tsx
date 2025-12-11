import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Para quem é esse material?",
      answer: "Para closers, vendedores, consultores e qualquer profissional que lida com vendas e precisa contornar objeções de forma eficiente. Se você ouve 'preciso pensar' com frequência, esse script é para você.",
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe acesso ao material completo por email. O acesso é vitalício.",
    },
    {
      question: "Funciona para qualquer tipo de venda?",
      answer: "Sim! Os scripts foram desenvolvidos para serem adaptáveis a qualquer nicho: imobiliário, digital, serviços, produtos físicos, etc. As objeções são universais.",
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Você tem 7 dias de garantia incondicional. Se não gostar ou não ver resultados, devolvemos 100% do seu dinheiro.",
    },
    {
      question: "É um curso ou um material prático?",
      answer: "É um guia prático e direto. Sem enrolação, sem horas de vídeo. Você lê, aprende os scripts e já pode aplicar na próxima ligação.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-red text-sm font-semibold uppercase tracking-wider mb-4">
              Dúvidas Frequentes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Tire suas dúvidas
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 hover:border-red/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:text-red py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;