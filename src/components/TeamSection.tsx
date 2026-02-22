import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import pedroImg from "@/assets/pedro.jpg";
import juanImg from "@/assets/juan.jpeg";

const team = [
  {
    name: "Pedro Nascimento",
    role: "Full Stack Developer",
    skills: ["HTML", "CSS", "JavaScript", "API", "Python", "Java", "MySQL"],
    desc: "Desenvolvedor versátil com experiência em todo o ciclo de desenvolvimento. Combina profissionalismo e expertise técnica para entregar soluções robustas e escaláveis.",
  },
  {
    name: "Juan Pablo",
    role: "Developer & Digital Solutions Specialist",
    skills: ["WordPress", "Canva", "Segurança", "Programação"],
    desc: "Especialista criativo com conhecimento em segurança e soluções práticas. Transforma ideias em produtos digitais eficientes com foco na experiência do usuário.",
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="equipe" className="py-24 lg:py-32">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossa <span className="gradient-text">Equipe</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Profissionais dedicados a entregar o melhor em cada projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 200}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-secondary overflow-hidden mb-6 mx-auto">
                <img src={i === 0 ? pedroImg : juanImg} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{m.name}</h3>
                <p className="text-primary text-sm font-medium mb-4">{m.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{m.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {m.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
