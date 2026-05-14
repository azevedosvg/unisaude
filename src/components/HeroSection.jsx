// components/HeroSection.jsx
// Seção principal (banner) da página
// Recebe título, subtítulo e textos dos botões via props

import { ArrowRight, Play, CheckCircle2, Star, Users, Zap } from "lucide-react";

// Props recebidas:
// - title: título principal do banner
// - subtitle: texto descritivo
// - ctaText: texto do botão principal
// - ctaSecondary: texto do botão secundário
export function HeroSection({ title, subtitle, ctaText, ctaSecondary }) {
  return (
    <section
      className="min-vh-100 d-flex align-items-center pt-5"
      style={{
        background:
          "linear-gradient(135deg, #f0faf4 0%, #ffffff 50%, #f0fdfa 100%)",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* Coluna esquerda — texto */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-4">
            {/* Badge de novidade */}
            <div>
              <span
                className="badge rounded-pill d-inline-flex align-items-center gap-1 px-3 py-2"
                style={{
                  background: "#f0faf4",
                  color: "#187c51",
                  border: "1px solid #b4e6c9",
                }}
              >
                <Zap size={12} /> Novo · Monitoramento com IA disponível
              </span>
            </div>

            {/* Título principal */}
            <h1 className="display-4 fw-bold text-dark lh-sm">
              {title} <span className="text-success">você merece</span>
            </h1>

            {/* Subtítulo */}
            <p className="lead text-secondary">{subtitle}</p>

            {/* Checklist */}
            <ul className="list-unstyled d-flex flex-column gap-2">
              {[
                "Consultas em menos de 3 minutos",
                "Dados protegidos pela LGPD",
                "Cancelamento sem multa",
              ].map((item) => (
                <li
                  key={item}
                  className="d-flex align-items-center gap-2 text-secondary"
                >
                  <CheckCircle2
                    size={16}
                    className="text-success flex-shrink-0"
                  />
                  <span className="small">{item}</span>
                </li>
              ))}
            </ul>

            {/* Botões de ação */}
            <div className="d-flex flex-wrap gap-3">
              <button
                className="btn btn-success btn-lg d-flex align-items-center gap-2"
                onClick={() =>
                  document
                    .querySelector("#plans")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {ctaText} <ArrowRight size={18} />
              </button>
              <button
                className="btn btn-outline-success btn-lg d-flex align-items-center gap-2"
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Play size={16} /> {ctaSecondary}
              </button>
            </div>

            {/* Social proof */}
            <div className="d-flex align-items-center gap-3">
              {/* Avatares empilhados */}
              <div className="d-flex">
                {["A", "C", "M", "R", "L"].map((initial, i) => (
                  <div
                    key={i}
                    className={`rounded-circle border border-2 border-white d-flex align-items-center justify-content-center text-white small fw-bold ${i % 2 === 0 ? "bg-success" : "bg-info"}`}
                    style={{
                      width: 32,
                      height: 32,
                      marginLeft: i === 0 ? 0 : -8,
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div>
                {/* Estrelas */}
                <div className="d-flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="text-warning"
                      fill="#ffc107"
                    />
                  ))}
                </div>
                <small className="text-secondary">
                  <strong className="text-dark">48.000+</strong> pacientes
                  satisfeitos
                </small>
              </div>
            </div>
          </div>

          {/* Coluna direita — card visual */}
          <div className="col-12 col-lg-6 position-relative">
            <div
              className="rounded-4 p-4 text-white position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #22c55e, #14b8a6)",
              }}
            >
              {/* Header do card */}
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <small className="opacity-75">Próxima consulta</small>
                  <p className="fw-bold fs-5 mb-0">Hoje, 15h30</p>
                </div>
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center bg-white bg-opacity-25"
                  style={{ width: 48, height: 48 }}
                >
                  <Users size={24} className="text-white" />
                </div>
              </div>

              {/* Médico */}
              <div className="rounded-3 p-3 mb-3 bg-white bg-opacity-25">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center bg-white bg-opacity-25 fw-bold small"
                    style={{ width: 40, height: 40 }}
                  >
                    DS
                  </div>
                  <div className="flex-grow-1">
                    <p className="fw-semibold small mb-0">Dra. Sofia Mendes</p>
                    <small className="opacity-75">
                      Cardiologista · CRM 54321
                    </small>
                  </div>
                  <span
                    className="badge rounded-pill"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  >
                    Online
                  </span>
                </div>
              </div>

              {/* Sinais vitais */}
              <div className="row g-2">
                {[
                  { label: "Pressão", value: "120/80", icon: "♥" },
                  { label: "Glicemia", value: "95 mg/dL", icon: "⚡" },
                  { label: "SpO₂", value: "98%", icon: "💧" },
                ].map((item) => (
                  <div key={item.label} className="col-4">
                    <div className="rounded-3 p-2 text-center bg-white bg-opacity-10">
                      <div>{item.icon}</div>
                      <p className="fw-bold small mb-0">{item.value}</p>
                      <small className="opacity-75">{item.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badge flutuante */}
            <div
              className="position-absolute bg-white rounded-3 shadow p-2 d-flex align-items-center gap-2"
              style={{ top: -16, right: -8 }}
            >
              <div
                className="rounded-2 d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32, background: "#fef3c7" }}
              >
                <Star size={14} fill="#f59e0b" className="text-warning" />
              </div>
              <div>
                <p className="fw-bold small mb-0">4.98/5.0</p>
                <small className="text-secondary">Avaliação</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
