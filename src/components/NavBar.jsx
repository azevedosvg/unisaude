import { useState, useEffect } from "react";
import { Heart, Menu, X, ChevronRight } from "lucide-react";

// A NavBar recebe a prop "links" que é um array de objetos { label, href }
export function NavBar({ links }) {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isOpen, setIsOpen] = useState(false);

  // Estado para detectar se o usuário rolou a página
  // Quando scrolled é true, adicionamos fundo branco na navbar
  const [scrolled, setScrolled] = useState(false);

  // useEffect para monitorar o scroll da página
  // O array vazio [] significa que esse efeito roda só uma vez, quando o componente monta
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove o listener quando o componente desmonta
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para navegar suavemente até a seção clicada
  const handleNav = (href) => {
    setIsOpen(false); // Fecha o menu mobile ao clicar
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top transition-all ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
    >
      <div className="container">
        {/* Logo da aplicação */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div
            className="bg-success rounded-2 d-flex align-items-center justify-content-center"
            style={{ width: 32, height: 32 }}
          >
            <Heart size={16} className="text-white fill-white" />
          </div>
          <span className="fw-bold fs-5 text-dark">
            Uni <span className="text-success">Saúde</span>
          </span>
        </a>

        {/* Botão hamburger para mobile */}
        <button
          className="navbar-toggler border-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Links de navegação — colapsa em mobile */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          {/* Links centrais */}
          <ul className="navbar-nav mx-auto gap-1">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <button
                  className="nav-link btn btn-link text-decoration-none text-secondary fw-medium"
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Botões de ação */}
          <div className="d-flex gap-2 mt-2 mt-md-0">
            <button className="btn btn-outline-success btn-sm px-3">
              Entrar
            </button>
            <button
              className="btn btn-success btn-sm px-3 d-flex align-items-center gap-1"
              onClick={() => handleNav("#plans")}
            >
              Começar grátis <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
