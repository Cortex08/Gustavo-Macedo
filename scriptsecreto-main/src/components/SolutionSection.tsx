import { CheckCircle2, Zap, Target, TrendingUp } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Scripts prontos para usar no momento exato que o cliente objeta",
    },
    {
      icon: Target,
      title: "Validado em Campo",
      description: "Testado e aprovado por closers que vendem milhões",
    },
    {
      icon: TrendingUp,
      title: "Aumento de Conversão",
      description: "Transforme leads indecisos em clientes pagantes",
    },
  ];

  const includes = [
    "Scripts para as 15 objeções mais comuns",
    "Frases de impacto que geram urgência",
    "Técnicas de reversão em tempo real",
    "Gatilhos mentais para fechamento",
    "Exemplos práticos de uso",
    "Atualizações gratuitas",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10" 
           style={{ background: 'radial-gradient(ellipse at center, hsl(0, 72%, 51%, 0.5) 0%, transparent 70%)' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-red text-sm font-semibold uppercase tracking-wider mb-4">
              A Solução
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              O Script Secreto para{" "}
              <span className="text-gradient-red">Quebra de Objeções</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um guia direto, prático e validado em campo, com as respostas exatas que você deve usar para virar o jogo e conduzir o cliente ao "sim" — sem pressão e com total naturalidade
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:border-red/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-red/10 flex items-center justify-center group-hover:bg-red/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-red" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="bg-card border border-red/20 rounded-2xl p-8 md:p-12">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">
              O que você vai receber:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3">
                  <CheckCircle2 className="w-6 h-6 text-red flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;