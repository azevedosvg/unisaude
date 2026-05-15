import { useState }                                    from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

const contactInfo = [
  { Icon: Mail,   label: "E-mail",   value: "contato@unisaude.com.br"    },
  { Icon: Phone,  label: "Telefone", value: "0800 000 0000 (gratuito)"   },
  { Icon: MapPin, label: "Endereço", value: "Belo Horizonte, MG, Brasil" },
]

const horarios = [
  { label: "Teleconsultas", value: "24h / 7 dias" },
  { label: "Suporte Chat",  value: "24h / 7 dias" },
  { label: "Suporte Tel.",  value: "08h – 22h"    },
]

export function ContactSection() {
  const [form, setForm]           = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container py-4">
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-block badge-brand">
            FALE CONOSCO
          </span>
          <h2 className="display-6 fw-bold text-dark mb-3">
            Tem alguma dúvida?{" "}
            <span className="text-success">Estamos aqui</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
            Nossa equipe está disponível 24 horas para responder suas perguntas.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-4 d-flex flex-column gap-3">
            {contactInfo.map(({ Icon, label, value }) => (
              <div key={label} className="card border-0 shadow-sm rounded-4 p-4 d-flex flex-row align-items-center gap-3">
                <div
                  className="rounded-3 d-flex align-items-center justify-content-center bg-success bg-opacity-10 flex-shrink-0"
                  style={{ width: 40, height: 40 }}
                >
                  <Icon size={18} className="text-success" />
                </div>
                <div>
                  <small className="text-secondary text-uppercase fw-semibold">{label}</small>
                  <p className="fw-medium text-dark small mb-0">{value}</p>
                </div>
              </div>
            ))}

            <div className="card border-0 shadow-sm rounded-4 p-4">
              <small className="text-secondary text-uppercase fw-semibold mb-3 d-block">
                Atendimento
              </small>
              <div className="d-flex flex-column gap-2">
                {horarios.map(({ label, value }) => (
                  <div key={label} className="d-flex justify-content-between small">
                    <span className="text-secondary">{label}</span>
                    <span className="fw-medium text-dark">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 h-100">
              {submitted ? (
                <div className="text-center py-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center bg-success bg-opacity-10 mx-auto mb-4"
                    style={{ width: 64, height: 64 }}
                  >
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                  <h5 className="fw-bold text-dark mb-2">Mensagem enviada!</h5>
                  <p className="text-secondary">Nossa equipe responderá em até 2 horas.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-link text-success text-decoration-none small fw-medium mt-2"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-medium text-dark">Nome</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        className="form-control rounded-3"
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <label className="form-label small fw-medium text-dark">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="form-control rounded-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-medium text-dark">Assunto</label>
                    <select className="form-select rounded-3">
                      <option>Dúvida sobre planos</option>
                      <option>Suporte técnico</option>
                      <option>Parceria comercial</option>
                      <option>Outro assunto</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label small fw-medium text-dark">Mensagem</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Descreva sua dúvida ou mensagem..."
                      required
                      className="form-control rounded-3"
                      style={{ resize: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success d-flex align-items-center gap-2 align-self-end px-4"
                  >
                    Enviar mensagem <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
