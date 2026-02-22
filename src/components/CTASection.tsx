import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div
          className={`relative max-w-4xl mx-auto text-center p-12 md:p-16 rounded-3xl border border-border bg-card overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 blur-[80px] rounded-full" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar sua <span className="gradient-text">presença digital</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Entre em contato agora e descubra como podemos impulsionar seu negócio com soluções web sob medida.
            </p>
            <a
              href="https://wa.me/5531995263679?text=Olá!%20Gostaria%20de%20mais%20informações%20e%20fazer%20um%20orçamento%20para%20um%20site.%20Podemos%20conversar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-13 px-10 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02]"
            >
              <MessageCircle size={20} />
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
