// main.jsx
// Ponto de entrada da aplicação React
// É aqui que o React é iniciado e conectado ao HTML (div#root do index.html)

// Importa o CSS do Bootstrap — deve vir antes do index.css
// para que nossos estilos personalizados possam sobrescrever os padrões do Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

import { StrictMode }  from "react"
import { createRoot }  from "react-dom/client"
import "./index.css"
import App             from "./App.jsx"

// StrictMode ativa verificações extras durante o desenvolvimento
// Ajuda a encontrar problemas no código antes de ir para produção
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
