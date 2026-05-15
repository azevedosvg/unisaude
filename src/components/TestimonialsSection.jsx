import { Star, Quote, Lock, Building2, ShieldCheck, BadgeCheck } from "lucide-react"
import { testimonials } from "../data"

const trustBadges = [
  { label: "LGPD Compliance", Icon: Lock        },
  { label: "CFM Parceiro",    Icon: Building2   },
  { label: "ISO 27001",       Icon: ShieldCheck },
  { label: "HIPAA Ready",     Icon: BadgeCheck  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-5 bg-white">
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-block badge-brand">
            DEPOIMENTOS
          </span>
          <h2 className="display-6 fw-bold text-dark mb-3">
            O que nossos pacientes{" "}
            <span className="text-success">falam sobre nós</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
            Mais de 48 mil pessoas já transformaram sua relação com a saúde
            usando a Uni Saúde.
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div className="col-12 col-md-4" key={testimonial.id}>
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4 d-flex flex-column gap-3">
                <Quote size={28} className="text-success opacity-25" />

                <p className="text-secondary fst-italic flex-grow-1">
                  "{testimonial.text}"
                </p>

                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center bg-success bg-opacity-10 text-success fw-bold small"
                      style={{ width: 40, height: 40 }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="fw-semibold small text-dark mb-0">{testimonial.name}</p>
                      <small className="text-secondary">{testimonial.role}</small>
                    </div>
                  </div>

                  <div className="d-flex gap-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={12} fill="#ffc107" className="text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
          {trustBadges.map(({ label, Icon }) => (
            <div key={label} className="d-flex align-items-center gap-2 text-secondary small fw-medium">
              <div
                className="rounded-2 d-flex align-items-center justify-content-center bg-success bg-opacity-10"
                style={{ width: 28, height: 28 }}
              >
                <Icon size={14} className="text-success" />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
