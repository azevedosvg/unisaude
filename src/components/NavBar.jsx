import { useState, useEffect } from "react";
import { Heart, Menu, X, ChevronRight } from "lucide-react";

function Logo({ large }) {
  return (
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
      <span className={`fw-bold text-dark ${large ? "fs-5" : ""}`}>
        Uni <span className="text-success">Saúde</span>
      </span>
    </a>
  );
}

export function NavBar({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`d-none d-md-block fixed-top ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
        style={{ transition: "all 0.3s ease" }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <Logo large />

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

      <div className="d-md-none fixed-top bg-white shadow-sm">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <Logo />
            <button
              className="btn btn-link text-dark p-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

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
