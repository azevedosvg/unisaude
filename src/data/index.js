// Arquivo central de dados da aplicação
// Aqui ficam todos os dados estáticos que serão passados como props para os componentes

// Lista de serviços oferecidos pela plataforma
// Cada objeto representa um card na seção de serviços
export const services = [
  {
    id: 1,
    icon: "Video", // Nome do ícone do Lucide React
    title: "Teleconsulta",
    description:
      "Consulte médicos especialistas por videochamada sem sair de casa, com segurança e praticidade.",
    category: "Consultas",
    featured: true, // Se true, o card recebe destaque visual
    cta: "Agendar consulta", // Texto do botão de ação
  },
  {
    id: 2,
    icon: "FileText",
    title: "Prontuário Digital",
    description:
      "Acesse seu histórico médico completo, receitas e laudos em um só lugar, a qualquer momento.",
    category: "Registros",
    featured: false,
    cta: "Ver prontuário",
  },
  {
    id: 3,
    icon: "Activity",
    title: "Monitoramento Contínuo",
    description:
      "Acompanhe seus sinais vitais com integração de wearables e alertas inteligentes.",
    category: "Monitoramento",
    featured: false,
    cta: "Conectar dispositivo",
  },
  {
    id: 4,
    icon: "Pill",
    title: "Gestão de Medicamentos",
    description:
      "Lembretes inteligentes para tomar seus remédios no horário certo.",
    category: "Farmácia",
    featured: false,
    cta: "Configurar alertas",
  },
  {
    id: 5,
    icon: "Brain",
    title: "Saúde Mental",
    description:
      "Sessões de psicologia e psiquiatria online com profissionais certificados.",
    category: "Mental",
    featured: false,
    cta: "Falar com psicólogo",
  },
  {
    id: 6,
    icon: "FlaskConical",
    title: "Exames Laboratoriais",
    description:
      "Solicite exames e receba resultados digitais diretamente no seu perfil.",
    category: "Exames",
    featured: false,
    cta: "Solicitar exame",
  },
];

// Diferenciais competitivos da plataforma
// Usados na seção "Por que escolher a Uni Saúde"
export const differentials = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "Dados 100% seguros",
    description:
      "Conformidade total com a LGPD. Seus dados médicos são criptografados e nunca compartilhados.",
  },
  {
    id: 2,
    icon: "Clock",
    title: "Disponível 24 horas",
    description:
      "Acesso a médicos de plantão a qualquer hora do dia ou da noite, todos os dias do ano.",
  },
  {
    id: 3,
    icon: "Award",
    title: "Médicos certificados",
    description:
      "Todos os nossos profissionais possuem registro ativo no CRM e passam por triagem rigorosa.",
  },
  {
    id: 4,
    icon: "Zap",
    title: "Atendimento imediato",
    description:
      "Tempo médio de espera de menos de 3 minutos para consultas de urgência.",
  },
  {
    id: 5,
    icon: "Smartphone",
    title: "Multiplataforma",
    description:
      "Disponível em iOS, Android e navegador. Sua saúde onde você estiver.",
  },
  {
    id: 6,
    icon: "HeartHandshake",
    title: "Cuidado humanizado",
    description:
      "Tecnologia que aproxima, não substitui. Nossa missão é conectar pessoas a cuidados reais.",
  },
];

// Métricas da plataforma exibidas na seção de diferenciais
export const metrics = [
  { value: "48K+", label: "Pacientes ativos", icon: "Users" },
  { value: "98%", label: "Satisfação dos usuários", icon: "ThumbsUp" },
  { value: "350+", label: "Especialistas parceiros", icon: "Stethoscope" },
  { value: "<3min", label: "Tempo médio de espera", icon: "Timer" },
];

// Planos de assinatura disponíveis
// O plano com featured: true recebe destaque visual na seção de planos
export const plans = [
  {
    id: 1,
    name: "Básico",
    price: "Gratuito",
    period: "",
    description: "Para quem quer experimentar a saúde digital",
    featured: false,
    features: [
      "1 teleconsulta por mês",
      "Prontuário digital básico",
      "Monitoramento simples",
      "Suporte por chat",
    ],
    cta: "Começar grátis",
  },
  {
    id: 2,
    name: "Essencial",
    price: "R$ 49",
    period: "/mês",
    description: "O plano mais popular para cuidados contínuos",
    featured: true,
    features: [
      "Teleconsultas ilimitadas",
      "Prontuário digital completo",
      "Monitoramento contínuo",
      "Gestão de medicamentos",
      "Suporte prioritário 24h",
      "Histórico de exames",
    ],
    cta: "Assinar agora",
  },
  {
    id: 3,
    name: "Família",
    price: "R$ 119",
    period: "/mês",
    description: "Cobertura completa para até 4 pessoas",
    featured: false,
    features: [
      "Tudo do Essencial",
      "Até 4 perfis familiares",
      "Saúde mental inclusa",
      "Desconto em exames",
      "Gerente de saúde dedicado",
      "Relatórios mensais",
    ],
    cta: "Proteger minha família",
  },
];

// Depoimentos de pacientes
export const testimonials = [
  {
    id: 1,
    name: "Ana Paula Ferreira",
    role: "Professora, 42 anos",
    avatar: "AP", // Iniciais do nome para o avatar
    text: "A teleconsulta salvou meu fim de semana. Às 23h, com febre alta, consegui atendimento em menos de 5 minutos!",
    stars: 5,
  },
  {
    id: 2,
    name: "Carlos Eduardo Lima",
    role: "Engenheiro, 35 anos",
    avatar: "CE",
    text: "O monitoramento contínuo integrado com meu smartwatch mudou minha relação com a saúde.",
    stars: 5,
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Empreendedora, 38 anos",
    avatar: "MC",
    text: "Com o plano Família, toda a minha casa tem acesso. Nunca ficamos sem atendimento médico de qualidade.",
    stars: 5,
  },
];

// Links de navegação do menu principal
// O href aponta para o id de cada seção da página (scroll suave)
export const navLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Diferenciais", href: "#differentials" },
  { label: "Planos", href: "#plans" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Contato", href: "#contact" },
];
