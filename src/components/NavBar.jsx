// components/NavBar.jsx
// Componente responsável pela barra de navegação principal
// Recebe os links de navegação via props e renderiza o menu para desktop e mobile

import { useState, useEffect } from "react";
import { Heart, Menu, X, ChevronRight } from "lucide-react";

// Props recebidas:
// - links: array de objetos { label, href } para montar os botões do menu
export function NavBar({ links }) {
  // Controla se o menu mobile está aberto (true) ou fechado (false)
  const [isOpen, setIsOpen] = useState(false);

  // Controla se o usuário já rolou a página para baixo
  // Quando true, adicionamos fundo branco na navbar para melhor legibilidade
  const [scrolled, setScrolled] = useState(false);

  // useEffect roda depois que o componente é montado na tela
  // Aqui adicionamos um "ouvinte" que detecta o scroll da página
  // O array vazio [] no final significa que isso roda apenas uma vez
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove o ouvinte quando o componente sair da tela
    // Isso evita vazamento de memória na aplicação
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função chamada quando o usuário clica em um link do menu
  // Fecha o menu mobile e rola suavemente até a seção clicada
  const handleNav = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ========== NAVBAR DESKTOP ========== */}
      {/* d-none d-md-block = escondida em mobile, visível a partir de tablet */}
      {/* fixed-top = fica fixo no topo mesmo quando o usuário rola a página */}
      {/* O fundo muda dinamicamente: transparente no topo, branco após rolar */}
      <nav
        className={`d-none d-md-block fixed-top ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Logo — ícone de coração verde + nome da empresa */}
            <a
              className="d-flex align-items-center gap-2 text-decoration-none"
              href="#"
            >
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

            {/* Links de navegação — gerados dinamicamente a partir do array de props */}
            {/* Cada objeto { label, href } do array vira um botão de navegação */}
            <div className="d-flex align-items-center gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  className="btn btn-link text-decoration-none text-secondary fw-medium small"
                  onClick={() => handleNav(link.href)}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Botões de ação — Entrar e Começar grátis */}
            <div className="d-flex gap-2 align-items-center">
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

      {/* ========== NAVBAR MOBILE — BARRA SUPERIOR ========== */}
      {/* d-md-none = aparece apenas em telas menores que tablet */}
      {/* Sempre tem fundo branco para garantir legibilidade */}
      <div className="d-md-none fixed-top bg-white shadow-sm">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Logo mobile */}
            <a
              className="d-flex align-items-center gap-2 text-decoration-none"
              href="#"
            >
              <div
                className="bg-success rounded-2 d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32 }}
              >
                <Heart size={16} className="text-white fill-white" />
              </div>
              <span className="fw-bold text-dark">
                Uni <span className="text-success">Saúde</span>
              </span>
            </a>

            {/* Botão hamburguer — alterna entre ícone de menu e X ao clicar */}
            <button
              className="btn btn-link text-dark p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========== MENU MOBILE — DRAWER ========== */}
      {/* Fica escondido acima da tela com translateY(-120%) */}
      {/* Quando isOpen é true, desce suavemente para a posição normal */}
      <div
        className="d-md-none fixed-top bg-white shadow"
        style={{
          top: 64,
          transform: isOpen ? "translateY(0)" : "translateY(-120%)",
          transition: "transform 0.3s ease",
          zIndex: 999,
        }}
      >
        <div className="container py-3 d-flex flex-column gap-2">
          {/* Links do menu mobile — mesma lógica do desktop */}
          {links.map((link) => (
            <button
              key={link.href}
              className="btn btn-link text-decoration-none text-secondary fw-medium text-start px-0"
              onClick={() => handleNav(link.href)}
            >
              {link.label}
            </button>
          ))}

          <hr className="my-2" />

          {/* Botões de ação mobile — ocupam largura total */}
          <button className="btn btn-outline-success w-100">Entrar</button>
          <button
            className="btn btn-success w-100"
            onClick={() => handleNav("#plans")}
          >
            Começar grátis
          </button>
        </div>
      </div>
    </>
  );
}
