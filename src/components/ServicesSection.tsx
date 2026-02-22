import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Layout, Link2, Settings, RefreshCw, Shield } from "lucide-react";

const services = [
  { icon: Globe, title: "Desenvolvimento Web", desc: "Aplicações web modernas, responsivas e de alta performance para o seu negócio." },
  { icon: Layout, title: "Sites Profissionais e Landing Pages", desc: "Páginas profissionais que convertem visitantes em clientes com design impactante." },
  { icon: Link2, title: "Integração de Sistemas", desc: "Conectamos suas ferramentas e APIs para automatizar processos e ganhar eficiência." },
  { icon: Settings, title: "Soluções Personalizadas", desc: "Desenvolvemos soluções sob medida para atender necessidades específicas do seu projeto." },
  { icon: RefreshCw, title: "Otimização e Manutenção", desc: "Mantemos seu site rápido, atualizado e funcionando perfeitamente a todo momento." },
  { icon: Shield, title: "Segurança e Performance", desc: "Protegemos seus dados e otimizamos a velocidade para a melhor experiência do usuário." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-card/50">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Oferecemos soluções completas para sua presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
