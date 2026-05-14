// components/PlansSection.jsx
// Seção de planos de assinatura
// Renderiza os 3 planos do array "plans" do data/index.js
// O plano com featured: true recebe destaque visual automático

import { CheckCircle2 } from "lucide-react"
import { plans }        from "../data"

export function PlansSection() {
  return (
    <section id="plans" className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container py-4">

        {/* Cabeçalho da seção */}
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-block badge-brand">
            PLANOS E PREÇOS
          </span>
          <h2 className="display-6 fw-bold text-dark mb-3">
            Escolha o plano{" "}
            <span className="text-success">ideal para você</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
            Sem taxas escondidas. Cancele quando quiser.
            Todos os planos incluem suporte 24 horas.
          </p>
        </div>

        {/* Grid de planos */}
        {/* justify-content-center centraliza os cards */}
        {/* align-items-start evita que os cards se esticam verticalmente */}
        <div className="row g-4 justify-content-center align-items-start">
          {plans.map((plan) => (

            // mt-md-n3 sobe levemente o card em destaque para criar efeito visual
            <div
              key={plan.id}
              className={`col-12 col-md-4 ${plan.featured ? "mt-md-n3" : ""}`}
            >
              <div
                className={`card border-0 shadow-sm rounded-4 h-100 overflow-hidden
                  ${plan.featured ? "border border-success border-2 shadow-lg" : ""}`}
              >

                {/* Banner "Mais popular" — aparece apenas no plano em destaque */}
                {plan.featured && (
                  <div className="bg-success text-white text-center py-2 small fw-bold">
                    ✦ Mais popular
                  </div>
                )}

                <div className="card-body p-4 p-md-5 d-flex flex-column gap-3">

                  {/* Nome, descrição e preço do plano */}
                  <div>
                    <h5 className="fw-bold text-dark mb-1">{plan.name}</h5>
                    <p className="text-secondary small mb-3">{plan.description}</p>

                    {/* Preço — o plano em destaque usa verde */}
                    <div className="d-flex align-items-end gap-1">
                      <span className={`display-6 fw-bold ${plan.featured ? "text-success" : "text-dark"}`}>
                        {plan.price}
                      </span>
                      {/* Período só aparece se existir (plano gratuito não tem período) */}
                      {plan.period && (
                        <span className="text-secondary mb-1">{plan.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Lista de recursos incluídos no plano */}
                  {/* flex-grow-1 faz a lista ocupar o espaço disponível */}
                  {/* Isso empurra o botão sempre para o rodapé do card */}
                  <ul className="list-unstyled d-flex flex-column gap-2 flex-grow-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="d-flex align-items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className={`mt-1 flex-shrink-0 ${plan.featured ? "text-success" : "text-secondary"}`}
                        />
                        <span className="small text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botão de ação — sólido para o plano em destaque, outline para os outros */}
                  <button
                    className={`btn w-100 rounded-3 ${plan.featured ? "btn-success" : "btn-outline-success"}`}
                  >
                    {plan.cta}
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de rodapé */}
        <p className="text-center text-secondary small mt-4">
          Todos os planos incluem período de teste de 14 dias. Sem necessidade de cartão de crédito.
        </p>

      </div>
    </section>
  )
}
