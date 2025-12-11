import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CreditCard } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-20" 
           style={{ background: 'radial-gradient(ellipse at center, hsl(0, 72%, 51%, 0.4) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 mb-8">
            <Clock className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive font-medium">
              Oferta por tempo limitado
            </span>
          </div>

          {/* Main headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pare de perder vendas{" "}
            <span className="text-gradient-red">agora mesmo</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8">
            Cada objeção não respondida é dinheiro deixado na mesa.
            <br />
            <span className="text-foreground font-medium">Você não pode mais se dar ao luxo de improvisar.</span>
          </p>

          {/* Price */}
          <div className="mb-8">
            <p className="text-muted-foreground line-through mb-2">De R$ 169,00</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-5xl md:text-6xl font-bold text-gradient-red">R$ 16</span>
              <span className="text-2xl text-muted-foreground">,99</span>
            </div>
            <p className="text-red mt-2 font-medium">Pagamento único • Acesso vitalício</p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="red" 
            size="xl"
            asChild
            className="group mb-8"
          >
            <a href="https://pay.kiwify.com.br/kf4p5yg" target="_blank" rel="noopener noreferrer">
              SIM, QUERO O SCRIPT SECRETO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>

          {/* Trust badges */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-red" />
              <span>Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-red" />
              <span>Pagamento seguro via Kiwify</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;