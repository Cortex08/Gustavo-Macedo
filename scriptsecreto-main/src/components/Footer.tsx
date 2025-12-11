const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} Script Secreto para Quebra de Objeções. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground/60 text-xs max-w-2xl mx-auto">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
