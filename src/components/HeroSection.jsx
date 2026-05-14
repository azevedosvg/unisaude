// components/HeroSection.jsx
// Seção principal (banner) da página
// É a primeira coisa que o usuário vê ao abrir o site
// Recebe o conteúdo textual via props para facilitar personalização

import {
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Search,
  Clock,
} from "lucide-react";

// Props recebidas:
// - title: primeira parte do título principal
// - subtitle: texto descritivo abaixo do título
// - ctaText: texto do botão principal (verde)
// - ctaSecondary: texto do botão secundário (outline)
export function HeroSection({ title, subtitle, ctaText, ctaSecondary }) {
  // Horários disponíveis para agendamento — exibidos como botões de seleção
  const horarios = ["09h00", "11h00", "14h00", "15h30", "17h00"];

  return (
    <section className="min-vh-100 d-flex align-items-center pt-5 hero-section">
      <div className="container py-5">
        <div className="row align-items-center g-5">
          {/* ========== COLUNA ESQUERDA — TEXTO ========== */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-4">
            {/* Título principal */}
            <h1 className="display-4 fw-bold lh-sm">
              {title} <span className="text-success">você merece</span>
            </h1>

            {/* Subtítulo */}
            <p className="lead text-secondary">{subtitle}</p>

            {/* Lista de vantagens rápidas */}
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

            {/* Social proof — avatares empilhados + estrelas + contagem */}
            <div className="d-flex align-items-center gap-3">
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
                  <strong>48.000+</strong> pacientes satisfeitos
                </small>
              </div>
            </div>
          </div>

          {/* ========== COLUNA DIREITA — CARD DE AGENDAMENTO ========== */}
          {/* Simula como seria agendar uma consulta no app */}
          {/* O botão de confirmar leva para a seção de planos */}
          <div className="col-12 col-lg-6">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              {/* Header do card com gradiente verde */}
              <div
                className="p-4 text-white"
                style={{
                  background: "linear-gradient(135deg, #22c55e, #14b8a6)",
                }}
              >
                <p className="small opacity-75 mb-1">
                  Plataforma de saúde digital
                </p>
                <h5 className="fw-bold mb-0">Agende sua consulta agora</h5>
              </div>

              <div className="p-4 d-flex flex-column gap-4">
                {/* Campo de busca de especialidade */}
                <div>
                  <label className="form-label small fw-semibold text-dark">
                    Buscar especialidade
                  </label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">
                      <Search size={16} className="text-secondary" />
                    </span>
                    <input
                      type="text"
                      className="form-control border-start-0 ps-0"
                      placeholder="Ex: Cardiologia, Psicologia..."
                      defaultValue="Cardiologia"
                    />
                  </div>
                </div>

                {/* Médica disponível para a especialidade buscada */}
                <div>
                  <label className="form-label small fw-semibold text-dark">
                    Profissional disponível
                  </label>
                  <div
                    className="d-flex align-items-center gap-3 p-3 rounded-3 border border-success"
                    style={{ background: "#f0faf4" }}
                  >
                    {/* Avatar com iniciais da médica */}
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center bg-success text-white fw-bold flex-shrink-0"
                      style={{ width: 48, height: 48 }}
                    >
                      JM
                    </div>
                    <div className="flex-grow-1">
                      <p className="fw-semibold small text-dark mb-0">
                        Dra. Julia Marques
                      </p>
                      <small className="text-secondary">
                        Cardiologista · CRM 54321
                      </small>
                      {/* Avaliação e número de consultas */}
                      <div className="d-flex align-items-center gap-1 mt-1">
                        <Star
                          size={10}
                          fill="#ffc107"
                          className="text-warning"
                        />
                        <small
                          className="text-secondary"
                          style={{ fontSize: 11 }}
                        >
                          4.98 · 312 consultas realizadas
                        </small>
                      </div>
                    </div>
                    {/* Indicador de status online */}
                    <span className="badge rounded-pill bg-success px-2 py-1 small">
                      🟢 Online
                    </span>
                  </div>
                </div>

                {/* Horários disponíveis — o 15h30 vem selecionado por padrão */}
                <div>
                  <label className="form-label small fw-semibold text-dark d-flex align-items-center gap-1">
                    <Clock size={14} className="text-success" /> Horários
                    disponíveis hoje
                  </label>
                  <div className="d-flex flex-wrap gap-2">
                    {horarios.map((horario, i) => (
                      <button
                        key={horario}
                        className={`btn btn-sm rounded-3 ${i === 3 ? "btn-success" : "btn-outline-secondary"}`}
                        style={{ minWidth: 72 }}
                      >
                        {horario}
                      </button>
                    ))}
                  </div>
                  <small className="text-success mt-2 d-block">
                    ✓ Horário selecionado: 15h30
                  </small>
                </div>

                {/* Botão de confirmação — rola para a seção de planos */}
                <button
                  className="btn btn-success w-100 py-3 fw-semibold d-flex align-items-center justify-content-center gap-2"
                  onClick={() =>
                    document
                      .querySelector("#plans")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Confirmar agendamento <ArrowRight size={16} />
                </button>

                {/* Nota informativa — explica que precisa criar conta */}
                <p className="text-center text-secondary small mb-0">
                  Crie sua conta gratuitamente para confirmar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
