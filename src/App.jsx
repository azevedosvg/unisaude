// App.jsx
// Componente raiz da aplicação
// Importa e organiza todos os componentes da página

import { NavBar } from "./components/NavBar";
import { navLinks } from "./data";

export default function App() {
  return (
    <div>
      <NavBar links={navLinks} />

      {/* Conteúdo temporário para testar a navbar */}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-success">Uni Saúde</h1>
      </div>
    </div>
  );
}
