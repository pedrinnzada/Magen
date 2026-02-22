import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">
              <img src="/public/img/logo.jpeg" alt="Logo MAGEN" width={250} className="rounded-lg" />
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Soluções digitais profissionais para impulsionar seu negócio.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Navegação</h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Equipe", "Portfólio", "Contato"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" />
                <a href="https://wa.me/553192546664?text=Olá!%20Gostaria%20de%20mais%20informações%20e%20fazer%20um%20orçamento%20para%20um%20site.%20Podemos%20conversar%3F" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  (31) 99254-6664
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-primary" />
                Juanjfmfree@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary" />
                Sete Lagoas, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} MAGEN. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
