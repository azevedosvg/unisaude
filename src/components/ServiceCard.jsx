// components/ServiceCard.jsx
// Card individual de serviço
// Componente reutilizável que recebe todos os dados via props
// É usado pela ServicesSection para renderizar cada serviço do array

import * as LucideIcons from "lucide-react"
import { ArrowRight }   from "lucide-react"

// Props recebidas:
// - title:       nome do serviço
// - description: descrição curta do serviço
// - icon:        nome do ícone como string (ex: "Video", "Brain")
// - category:    categoria do serviço (ex: "Consultas", "Mental")
// - featured:    boolean — se true, o card recebe borda e badge de destaque
// - cta:         texto do link de ação no rodapé do card
export function ServiceCard({ title, description, icon, category, featured, cta }) {

  // Carrega o ícone dinamicamente a partir do nome recebido via props
  // LucideIcons["Video"] retorna o componente <Video />
  // Se o ícone não existir, usa <Circle /> como fallback para não quebrar
  const Icon = LucideIcons[icon] || LucideIcons.Circle

  return (
    // card h-100 garante que todos os cards tenham a mesma altura na grid
    // Se featured for true, adiciona borda verde de destaque
    <div
      className={`card h-100 border-0 shadow-sm rounded-4 ${featured ? "border border-success border-2" : ""}`}
      style={{ transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
      onMouseEnter={(e) => {
        // Ao passar o mouse, eleva o card e aumenta a sombra
        e.currentTarget.style.transform = "translateY(-4px)"
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"
      }}
      onMouseLeave={(e) => {
        // Ao sair, volta ao estado normal
        e.currentTarget.style.transform = "translateY(0)"
        e.currentTarget.style.boxShadow = ""
      }}
    >

      {/* Badge "Popular" — só aparece quando featured é true */}
      {featured && (
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-success rounded-pill">⭐ Popular</span>
        </div>
      )}

      <div className="card-body p-4 d-flex flex-column gap-3">

        {/* Ícone do serviço dentro de um círculo verde claro */}
        <div
          className="rounded-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10"
          style={{ width: 48, height: 48 }}
        >
          <Icon size={22} className="text-success" />
        </div>

        {/* Badge de categoria — estilo personalizado via classe badge-brand do index.css */}
        <span
          className="badge rounded-pill px-3 py-1 align-self-start badge-brand"
          style={{ fontSize: "11px" }}
        >
          {category}
        </span>

        {/* Título do serviço */}
        <h5 className="card-title fw-semibold text-dark mb-0">{title}</h5>

        {/* Descrição — flex-grow-1 faz ela ocupar o espaço disponível */}
        {/* Isso garante que o botão fique sempre no rodapé do card */}
        <p className="card-text text-secondary small flex-grow-1">{description}</p>

        {/* Link de ação no rodapé do card */}
        <button className="btn btn-link text-success text-decoration-none p-0 d-flex align-items-center gap-1 fw-semibold small align-self-start">
          {cta} <ArrowRight size={14} />
        </button>

      </div>
    </div>
  )
}
