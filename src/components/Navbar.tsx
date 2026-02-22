import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-xl font-bold tracking-tight">
          <span className="text-primary">MAGEN</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5531992546664?text=Olá!%20Gostaria%20de%20mais%20informações%20e%20fazer%20um%20orçamento%20para%20um%20site.%20Podemos%20conversar%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex h-9 px-5 items-center rounded-md bg-primary text-primary-foreground text-sm font-medium"
        >
          Fale Conosco
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t animate-fade-in">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5531995263679?text=Olá!%20Gostaria%20de%20mais%20informações%20e%20fazer%20um%20orçamento%20para%20um%20site.%20Podemos%20conversar%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex h-9 px-5 items-center rounded-md bg-primary text-primary-foreground text-sm font-medium"
              >
                Fale Conosco
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
