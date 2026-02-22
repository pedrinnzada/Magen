import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Zap, Users } from "lucide-react";

const stats = [
  { icon: Code2, value: "4+", label: "Anos de experiência" },
  { icon: Zap, value: "30+", label: "Projetos entregues" },
  { icon: Users, value: "10+", label: "Tecnologias dominadas" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quem é a <span className="gradient-text">MAGEN</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Somos uma empresa de soluções web com mais de 4 anos de experiência,
            especializada em construir, otimizar e modernizar produtos digitais.
            Nosso foco é resolver problemas reais de negócios por meio de tecnologia,
            performance e design limpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center p-8 rounded-2xl bg-card border border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <s.icon size={24} />
              </div>
              <div className="text-4xl font-bold mb-1">{s.value}</div>
              <div className="text-muted-foreground text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
