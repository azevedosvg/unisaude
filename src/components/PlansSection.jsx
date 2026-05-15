import { CheckCircle2 } from "lucide-react"
import { plans }        from "../data"

export function PlansSection() {
  return (
    <section id="plans" className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container py-4">
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

        <div className="row g-4 justify-content-center align-items-start">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`col-12 col-md-4 ${plan.featured ? "mt-md-n3" : ""}`}
            >
              <div
                className={`card border-0 shadow-sm rounded-4 h-100 overflow-hidden
                  ${plan.featured ? "border border-success border-2 shadow-lg" : ""}`}
              >
                {plan.featured && (
                  <div className="bg-success text-white text-center py-2 small fw-bold">
                    ✦ Mais popular
                  </div>
                )}

                <div className="card-body p-4 p-md-5 d-flex flex-column gap-3">
                  <div>
                    <h5 className="fw-bold text-dark mb-1">{plan.name}</h5>
                    <p className="text-secondary small mb-3">{plan.description}</p>

                    <div className="d-flex align-items-end gap-1">
                      <span className={`display-6 fw-bold ${plan.featured ? "text-success" : "text-dark"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-secondary mb-1">{plan.period}</span>
                      )}
                    </div>
                  </div>

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

        <p className="text-center text-secondary small mt-4">
          Todos os planos incluem período de teste de 14 dias. Sem necessidade de cartão de crédito.
        </p>
      </div>
    </section>
  )
}
