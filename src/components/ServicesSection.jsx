// components/ServicesSection.jsx
// Seção que exibe todos os cards de serviços da plataforma
// Importa os dados do arquivo central e passa cada serviço como props para o ServiceCard

import { ServiceCard } from "./ServiceCard"
import { services }    from "../data"

export function ServicesSection() {
  return (
    <section id="services" className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container py-4">

        {/* Cabeçalho da seção */}
        <div className="text-center mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-3 d-inline-block badge-brand">
            NOSSOS SERVIÇOS
          </span>
          <h2 className="display-6 fw-bold text-dark mb-3">
            Tudo o que você precisa,{" "}
            <span className="text-success">em um só lugar</span>
          </h2>
          <p className="lead text-secondary mx-auto" style={{ maxWidth: 600 }}>
            Serviços digitais de saúde pensados para simplificar sua vida e
            garantir que você e sua família estejam sempre bem cuidados.
          </p>
        </div>

        {/* Grid responsivo de cards — Bootstrap grid de 12 colunas */}
        {/* col-12: 1 card por linha em mobile */}
        {/* col-sm-6: 2 cards por linha em tablet */}
        {/* col-lg-4: 3 cards por linha em desktop */}
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-lg-4" key={service.id}>

              {/* Cada objeto do array "services" vira um ServiceCard */}
              {/* Os dados são passados individualmente como props */}
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                category={service.category}
                featured={service.featured}
                cta={service.cta}
              />

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
