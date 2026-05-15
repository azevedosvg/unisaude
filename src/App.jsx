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
    <>
      <NavBar links={navLinks} />

      <main>
        <HeroSection
          title="Sua saúde,"
          subtitle="A Uni Saúde conecta você a médicos especialistas, monitora seus dados de saúde e simplifica toda a sua jornada de cuidado — tudo em um só lugar, disponível 24 horas."
          ctaText="Começar gratuitamente"
          ctaSecondary="Ver serviços"
        />
        <ServicesSection />
        <DifferentialsSection />
        <PlansSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
