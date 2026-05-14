// App.jsx
// Componente raiz da aplicação
// Importa e organiza todos os componentes da página

import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { navLinks } from "./data";

export default function App() {
  return (
    <div>
      <NavBar links={navLinks} />

      <main>
        <HeroSection
          title="Sua saúde,"
          subtitle="A Uni Saúde conecta você a médicos especialistas, monitora seus dados de saúde e simplifica toda a sua jornada de cuidado — tudo em um só lugar, disponível 24 horas."
          ctaText="Começar gratuitamente"
          ctaSecondary="Ver serviços"
        />
      </main>
    </div>
  );
}
