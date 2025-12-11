import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Transforme objeções em fechamentos",
    "Scripts validados em campo",
    "Resultados imediatos",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20" 
           style={{ background: 'radial-gradient(ellipse at center, hsl(43, 74%, 49%, 0.3) 0%, transparent 70%)' }} />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-light rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-red rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red/30 bg-red/5 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
            <span className="text-sm text-red font-medium tracking-wide uppercase">
              Método Exclusivo de Closers
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Script Secreto para{" "}
            <span className="text-gradient-red">Quebra de Objeções</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A arma que os <span className="text-red font-semibold">Closers de Alta Performance</span> usam para fechar vendas mesmo quando o cliente diz{" "}
            <span className="italic">"Preciso Pensar"</span>
          </p>

          {/* Benefits */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-red" />
                <span className="text-sm text-foreground/80">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="red" 
              size="xl"
              asChild
              className="group"
            >
              <a href="https://pay.kiwify.com.br/kf4p5yg" target="_blank" rel="noopener noreferrer">
                QUERO FECHAR MAIS VENDAS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Acesso imediato após a compra
            </p>
          </div>

          {/* Trust badge */}
          <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
