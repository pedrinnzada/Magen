import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Móveis Planejados",
    desc: "E-commerce de móveis planejados com personalização de ambientes e integração com fornecedores.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    url: "https://sitemoveis.vercel.app/",
    image: "/img/moveisplanejados.png"
  },

  {
    name: "Açaíteria Delivery",
    desc: "Cardápio online para açaíteria com opções de personalização e integração com sistemas de entrega.",
    tech: ["Canva", "NoCode", "Integração", "GUI Design"],
    url: "https://magensecop.my.canva.site/cardapiopracai",
    image: "/img/acai.png"
  },

  {
    name: "Landing Page Fisioterapeuta",
    desc: "Página institucional para fisioterapeutas com informações sobre serviços e agendamento online.",
    tech: ["HTML", "TypeScript", "React", "NodeJS", "Json", "ChatBot"],
    url: "https://landingpage-fisioterapeuta.vercel.app/",
    image: "/img/fisioterapeuta.png"
  },

  {
    name: "Landing Page Arquiteto",
    desc: "Landing Page institucional para arquitetos com portfólio de projetos e informações sobre serviços.",
    tech: ["HTML", "NodeJS", "React", "Json","TypeScript", "Vite"],
    url: "https://site-arquiteto.vercel.app/",
    image: "/img/arquiteto.png"
  },

  {
    name: "EA BV Construct",
    desc: "Site para arquiteto focado em telhados com portfólio de projetos e utilizando tecnologias modernas para uma experiência interativa.",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://eaconstructbv.vercel.app/",
    image: "/img/telhado.png"
  },

  {
    name: "Fazenda Boa Vista",
    desc: "Landing Page institucional para arquitetos com portfólio de projetos e informações sobre serviços.",
    tech: ["HTML", "Rotas", "CSS", "API","MySQL", "JavaScript"],
    url: "https://fazendaboavista.vercel.app/",
    image: "/img/fazenda.png"
  },

  
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-card/50">
      <div ref={ref} className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça alguns dos projetos que já desenvolvemos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-700 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="h-36 rounded-xl overflow-hidden mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs font-normal">
                    {t}
                  </Badge>
                ))}
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-4"
              >
                Ver Projeto <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
