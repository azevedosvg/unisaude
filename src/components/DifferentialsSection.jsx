// components/DifferentialsSection.jsx
// Seção de diferenciais e métricas da plataforma
// Exibe os números de impacto e os motivos para escolher a Uni Saúde

import * as LucideIcons from "lucide-react";
import { differentials, metrics } from "../data";

// Componente interno para exibir uma métrica
// Recebe value, label e icon via props
function MetricCard({ value, label, icon }) {
  const Icon = LucideIcons[icon] || LucideIcons.TrendingUp;

  return (
    <div className="col-6 col-lg-3">
      <div
        className="card border-0 shadow-sm rounded-4 p-4 text-center h-100"
        style={{ transition: "transform 0.2s" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-4px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <div
          className="rounded-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10 mx-auto mb-3"
          style={{ width: 48, height: 48 }}
        >
          <Icon size={22} className="text-success" />
        </div>
        <h3 className="fw-bold text-dark mb-1">{value}</h3>
        <small className="text-secondary">{label}</small>
      </div>
    </div>
  );
}

export function DifferentialsSection() {
  return (
    <section id="differentials" className="py-5 bg-white">
      <div className="container py-4">
        {/* Métricas */}
        <div className="row g-4 mb-5">
          {metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              icon={metric.icon}
            />
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3 d-inline-block"
            style={{
              background: "#f0faf4",
              color: "#187c51",
              border: "1px solid #b4e6c9",
            }}
          >
            POR QUE ESCOLHER A UNI SAÚDE
          </span>
          <h2 className="display-6 fw-bold text-dark mb-3">
            Sua saúde merece o{" "}
            <span className="text-success">melhor cuidado</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
            Combinamos tecnologia de ponta com humanização para entregar uma
            experiência de saúde que vai além do óbvio.
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="row g-4 mb-5">
          {differentials.map((item) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Star;
            return (
              <div className="col-12 col-sm-6 col-lg-4" key={item.id}>
                <div
                  className="p-4 rounded-4 border border-light h-100"
                  style={{ transition: "all 0.2s" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#b4e6c9";
                    e.currentTarget.style.background = "#f0faf4";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.background = "";
                  }}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10 mb-3"
                    style={{ width: 40, height: 40 }}
                  >
                    <Icon size={18} className="text-success" />
                  </div>
                  <h6 className="fw-semibold text-dark mb-2">{item.title}</h6>
                  <p className="text-secondary small mb-0">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de especialidades */}
        <div
          className="rounded-4 p-5 text-white text-center"
          style={{ background: "linear-gradient(135deg, #22c55e, #14b8a6)" }}
        >
          <h3 className="fw-bold mb-2">
            Mais de 50 especialidades disponíveis
          </h3>
          <p className="opacity-75 mb-4">
            Cardiologia, pediatria, saúde mental, nutrição e muito mais.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {[
              "Clínica Geral",
              "Cardiologia",
              "Pediatria",
              "Psicologia",
              "Nutrição",
              "Dermatologia",
              "Ginecologia",
              "Ortopedia",
              "+ 42 outras",
            ].map((esp) => (
              <span
                key={esp}
                className="badge rounded-pill px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                }}
              >
                {esp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
