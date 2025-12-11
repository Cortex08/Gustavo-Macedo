import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Script Secreto para Quebra de Objeções | Feche Mais Vendas</title>
        <meta 
          name="description" 
          content="Descubra os scripts que closers de alta performance usam para fechar vendas mesmo quando o cliente diz 'preciso pensar'. Aumente suas conversões hoje." 
        />
        <meta name="keywords" content="script de vendas, quebra de objeções, closer, vendas high ticket, fechamento de vendas" />
        <link rel="canonical" href="https://pay.kiwify.com.br/kf4p5yg" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
