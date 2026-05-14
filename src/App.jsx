// App.jsx
// Componente raiz da aplicação
// É aqui que todos os componentes são importados e organizados na ordem da página

import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { DifferentialsSection } from "./components/DifferentialsSection";
import { PlansSection } from "./components/PlansSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { navLinks } from "./data";

export default function App() {
  return (
    <div>
      {/* NavBar recebe os links de navegação via props */}
      <NavBar links={navLinks} />

      {/* Conteúdo principal da página — cada seção é um componente separado */}
      <main>
        {/* Banner principal — recebe título, subtítulo e textos dos botões via props */}
        <HeroSection
          title="Sua saúde,"
          subtitle="A Uni Saúde conecta você a médicos especialistas, monitora seus dados de saúde e simplifica toda a sua jornada de cuidado — tudo em um só lugar, disponível 24 horas."
          ctaText="Começar gratuitamente"
          ctaSecondary="Ver serviços"
        />

        {/* Seção de serviços — exibe os 6 cards de serviços */}
        <ServicesSection />

        {/* Seção de diferenciais — exibe métricas e vantagens da plataforma */}
        <DifferentialsSection />

        {/* Seção de planos — exibe os 3 planos de assinatura */}
        <PlansSection />

        {/* Seção de depoimentos — exibe avaliações de pacientes */}
        <TestimonialsSection />

        {/* Seção de contato — exibe formulário e informações de contato */}
        <ContactSection />
      </main>

      {/* Rodapé com links, redes sociais e copyright */}
      <Footer />
    </div>
  );
}
