// components/ServiceCard.jsx
// Card individual de serviço
// Recebe todos os dados do serviço via props e renderiza um card estilizado

import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";

// Props recebidas:
// - title: nome do serviço
// - description: descrição do serviço
// - icon: nome do ícone do Lucide (string)
// - category: categoria do serviço (ex: "Consultas")
// - featured: boolean que define se o card recebe destaque
// - cta: texto do botão de ação
export function ServiceCard({
  title,
  description,
  icon,
  category,
  featured,
  cta,
}) {
  // Carrega o ícone dinamicamente pelo nome recebido via props
  // Se o ícone não existir, usa um círculo como fallback
  const Icon = LucideIcons[icon] || LucideIcons.Circle;

  return (
    <div
      className={`card h-100 border-0 shadow-sm rounded-4 ${featured ? "border-success border-2" : ""}`}
      style={{
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      {/* Badge de destaque — só aparece se featured for true */}
      {featured && (
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-success rounded-pill">⭐ Popular</span>
        </div>
      )}

      <div className="card-body p-4 d-flex flex-column gap-3">
        {/* Ícone do serviço */}
        <div
          className="rounded-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10"
          style={{ width: 48, height: 48 }}
        >
          <Icon size={22} className="text-success" />
        </div>

        {/* Badge de categoria */}
        <span
          className="badge rounded-pill px-3 py-1 align-self-start"
          style={{
            background: "#f0faf4",
            color: "#187c51",
            border: "1px solid #b4e6c9",
            fontSize: "11px",
          }}
        >
          {category}
        </span>

        {/* Título */}
        <h5 className="card-title fw-semibold text-dark mb-0">{title}</h5>

        {/* Descrição */}
        <p className="card-text text-secondary small flex-grow-1">
          {description}
        </p>

        {/* Botão de ação */}
        <button className="btn btn-link text-success text-decoration-none p-0 d-flex align-items-center gap-1 fw-semibold small align-self-start">
          {cta} <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
