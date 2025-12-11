import { XCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      title: '"Preciso pensar..."',
      description: "O lead some e nunca mais retorna suas ligações",
    },
    {
      title: '"Vou falar com meu sócio..."',
      description: "Você perde o timing da venda e a oportunidade esfria",
    },
    {
      title: '"Não tenho dinheiro agora..."',
      description: "Você não sabe como reverter e aceita o não",
    },
    {
      title: '"Vou pesquisar outras opções..."',
      description: "O cliente escolhe o concorrente que soube contornar melhor",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-red text-sm font-semibold uppercase tracking-wider mb-4">
              Você conhece essa situação?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Quantas vendas você{" "}
              <span className="text-gradient-red">já perdeu</span> por não saber responder?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diferença entre quem ouve isso e desiste e quem ouve e fecha está em uma única coisa:{" "}
              <span className="text-foreground font-semibold">o script certo.</span>
            </p>
          </div>

          {/* Problems grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card border border-border/50 hover:border-red/30 transition-all duration-300 hover:shadow-red/10 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-red transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Transition text */}
          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl font-serif text-foreground/80">
              E se você tivesse as{" "}
              <span className="text-red font-semibold">respostas exatas</span>{" "}
              para virar o jogo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;