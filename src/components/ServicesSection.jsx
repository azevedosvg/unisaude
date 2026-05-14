// components/ServicesSection.jsx
// Seção que exibe todos os cards de serviços
// Importa os dados do arquivo de dados e renderiza um ServiceCard para cada serviço

import { ServiceCard } from "./ServiceCard";
import { services } from "../data";

export function ServicesSection() {
  return (
    <section id="services" className="py-5" style={{ background: "#f8fafc" }}>
      <div className="container py-4">
        {/* Header da seção */}
        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3 d-inline-block"
            style={{
              background: "#f0faf4",
              color: "#187c51",
              border: "1px solid #b4e6c9",
            }}
          >
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

        {/* Grid de cards — Bootstrap grid responsivo */}
        {/* col-12 em mobile, col-6 em tablet, col-4 em desktop */}
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-lg-4" key={service.id}>
              {/* Cada serviço do array vira um ServiceCard com seus dados via props */}
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
  );
}
