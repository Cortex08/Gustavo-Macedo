import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Closer Imobiliário",
      content: "Fechei 3 vendas na primeira semana usando os scripts. O cliente disse 'preciso pensar' e eu já sabia exatamente o que falar.",
      rating: 5,
    },
    {
      name: "Amanda S.",
      role: "Vendedora Digital",
      content: "Antes eu travava quando ouvia objeções. Agora tenho confiança porque sei exatamente o que responder.",
      rating: 5,
    },
    {
      name: "Roberto L.",
      role: "Consultor de Vendas",
      content: "Aumentei minha taxa de conversão em 40% em apenas um mês. Material direto ao ponto e muito prático.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-red text-sm font-semibold uppercase tracking-wider mb-4">
              Resultados Reais
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Quem usou{" "}
              <span className="text-gradient-red">aprova</span>
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border/50 hover:border-red/30 transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-red/20 absolute top-6 right-6" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-red fill-red" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red/20 flex items-center justify-center">
                    <span className="text-red font-semibold text-lg">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;