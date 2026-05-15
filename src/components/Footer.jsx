import { Heart, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  Plataforma: ["Serviços", "Planos", "Para empresas", "API para clínicas"],
  Saúde: ["Teleconsulta", "Exames", "Prontuário", "Monitoramento"],
  Suporte: ["Central de ajuda", "Fale conosco", "Status", "Documentação"],
  Empresa: ["Sobre nós", "Blog", "Carreiras", "Imprensa"],
};

const scrollTo = (id) =>
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

export function Footer() {
  return (
    <footer className="bg-dark text-secondary">
      <div className="border-bottom border-secondary border-opacity-25">
        <div className="container py-5 text-center">
          <h2 className="fw-bold text-white mb-3">
            Comece a cuidar da sua saúde hoje
          </h2>
          <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: 480 }}>
            Junte-se a mais de 48 mil pessoas que já confiam na Uni Saúde.
          </p>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button
              onClick={() => scrollTo("#plans")}
              className="btn btn-success px-4 py-2 rounded-3"
            >
              Criar conta gratuita
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
            >
              Ver serviços
            </button>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-12 col-md-3">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="bg-success rounded-2 d-flex align-items-center justify-content-center"
                style={{ width: 28, height: 28 }}
              >
                <Heart size={14} className="text-white fill-white" />
              </div>
              <span className="fw-bold text-white">
                Uni <span className="text-success">Saúde</span>
              </span>
            </div>
            <p className="small text-secondary mb-4">
              Plataforma de saúde digital que conecta pessoas a cuidados de
              qualidade.
            </p>
            <div className="d-flex gap-2">
              <a
                href="#"
                className="btn btn-sm rounded-2 d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32, background: "#1e293b" }}
              >
                <Mail size={14} className="text-secondary" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div className="col-6 col-md-2" key={group}>
              <p className="text-white fw-semibold small mb-3">{group}</p>
              <ul className="list-unstyled d-flex flex-column gap-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-secondary text-decoration-none small"
                      style={{ transition: "color 0.2s" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#22c55e")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-top border-secondary border-opacity-25 pt-4 d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
          <p className="small text-secondary mb-0">
            Uni Saúde · Desenvolvido por Gabriel de Azevedo Silva e Paulo Victor
            Rodrigues Moraes
          </p>
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="small text-secondary text-decoration-none">
              Privacidade
            </a>
            <a href="#" className="small text-secondary text-decoration-none">
              Termos de uso
            </a>
            <a href="#" className="small text-secondary text-decoration-none">
              Cookies
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="btn btn-sm rounded-2 d-flex align-items-center justify-content-center"
              style={{ width: 32, height: 32, background: "#1e293b" }}
            >
              <ArrowUp size={14} className="text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
