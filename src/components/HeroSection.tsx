import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]"
        style={{ animation: "glow 4s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/8 blur-[100px]"
        style={{ animation: "glow 5s ease-in-out infinite 1s" }}
      />

      <div className="relative container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-xs text-muted-foreground tracking-wide uppercase fade-up">
          +4 anos transformando negócios digitais
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight fade-up fade-up-delay-1">
          Transformamos ideias em
          <br />
          <span className="gradient-text">soluções digitais</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed fade-up fade-up-delay-2">
          Desenvolvemos produtos digitais de alto desempenho, com foco em resolver
          problemas reais e impulsionar o crescimento do seu negócio.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up fade-up-delay-3">
          <a
            href="https://wa.me/5531995263679?text=Olá!%20Gostaria%20de%20mais%20informações%20e%20fazer%20um%20orçamento%20para%20um%20site.%20Podemos%20conversar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageCircle size={18} />
            Solicitar Orçamento
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-all duration-200"
          >
            Nossos Serviços
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
