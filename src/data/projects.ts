export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  description?: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  highlights: string[];
  repoUrl?: string;
  demoUrl?: string;
  coverImage?: ProjectImage;
  galleryImages: ProjectImage[];
};

type MarqueeItem = {
  title: string;
  category: string;
  tags: string[];
  previewImage?: ProjectImage;
};

const sugestoesImages: ProjectImage[] = [
  {
    src: "/assets/projects/sugestoes/sugestoes-01-capa.png",
    alt: "Tela inicial do Sistema de Sugestões Internas",
    caption: "Tela inicial do sistema",
    description:
      "Apresenta a entrada pública do sistema, com foco no registro de gargalos, retrabalhos e oportunidades de automação interna.",
  },
  {
    src: "/assets/projects/sugestoes/sugestoes-02.png",
    alt: "Formulário de nova demanda do Sistema de Sugestões Internas",
    caption: "Formulário em etapas para registro da demanda",
    description:
      "Mostra a primeira etapa do fluxo de abertura, com identificação do solicitante, setor, cargo e navegação lateral do formulário.",
  },
  {
    src: "/assets/projects/sugestoes/sugestoes-03.png",
    alt: "Tela de acompanhamento das demandas cadastradas",
    caption: "Área de acompanhamento do colaborador",
    description:
      "Lista demandas registradas com protocolo, status, data de envio e indicação de resposta disponível quando houver retorno da equipe.",
  },
  {
    src: "/assets/projects/sugestoes/sugestoes-04.png",
    alt: "Dashboard administrativo com indicadores de demandas internas",
    caption: "Dashboard administrativo de demandas",
    description:
      "Exibe cartões de status para acompanhar solicitações novas, em análise, rejeitadas, sem responsável e demais estados do fluxo administrativo.",
  },
  {
    src: "/assets/projects/sugestoes/sugestoes-05.png",
    alt: "Indicadores administrativos por status, prioridade, setor e solicitações recentes",
    caption: "Indicadores por status, prioridade e setor",
    description:
      "Complementa o dashboard com distribuição de solicitações por status, prioridade, setor e lista de demandas recentes para leitura operacional.",
  },
  {
    src: "/assets/projects/sugestoes/sugestoes-06.png",
    alt: "Tabela administrativa de solicitações com filtros e exportação CSV",
    caption: "Lista administrativa de solicitações",
    description:
      "Mostra a tela de consulta com busca, filtros por status, prioridade, setor, responsável e opção de exportação CSV.",
  },
  {
    src: "/assets/projects/sugestoes/sugestoes-07.png",
    alt: "Detalhe administrativo de uma solicitação registrada",
    caption: "Detalhe de solicitação para análise",
    description:
      "Apresenta dados do protocolo, solicitante, setor, responsável, datas e ações administrativas para acompanhamento da demanda.",
  },
];

const esocialIaImages: ProjectImage[] = [
  {
    src: "/assets/projects/esocial-ia/esocial-ia-01.png",
    alt: "Apresentação visual do Kinho IA para gestão eSocial",
    caption: "Apresentação do Kinho IA",
    description:
      "Arte de apresentação do projeto, posicionando o Kinho IA como apoio operacional para centralização de dados, análise e acompanhamento do eSocial.",
  },
  {
    src: "/assets/projects/esocial-ia/esocial-ia-02.png",
    alt: "Interface inicial do chat Kinho IA",
    caption: "Interface inicial do assistente",
    description:
      "Mostra a tela de chat com barra lateral, identidade visual do Kinho IA e campo de pergunta voltado a dúvidas e informações do eSocial.",
  },
  {
    src: "/assets/projects/esocial-ia/esocial-ia-03.png",
    alt: "Conversa do Kinho IA com respostas sobre funcionamento e contexto operacional",
    caption: "Conversa com contexto operacional",
    description:
      "Exibe uma conversa de teste em que o assistente responde perguntas gerais e explica seu papel dentro do sistema eSocial.",
  },
  {
    src: "/assets/projects/esocial-ia/esocial-ia-04.png",
    alt: "Painel administrativo do Kinho IA com filtros de uso",
    caption: "Filtros do painel administrativo",
    description:
      "Mostra filtros por período, usuário, perfil, intenção, status e provider para acompanhamento do uso do assistente.",
  },
  {
    src: "/assets/projects/esocial-ia/esocial-ia-05.png",
    alt: "Métricas de uso do Kinho IA no painel administrativo",
    caption: "Métricas de uso e desempenho",
    description:
      "Apresenta indicadores de perguntas, sucessos, erros, bloqueios por limite, tempo médio, uso com IA local e contexto operacional.",
  },
  {
    src: "/assets/projects/esocial-ia/esocial-ia-06.png",
    alt: "Terminal exibindo logs do backend do Kinho IA",
    caption: "Backend em execução com logs",
    description:
      "Mostra o backend em funcionamento, com registros de intenção, rota, contexto e tempo de resposta durante conversas de teste.",
  },
];

const dashboardEsocialImages: ProjectImage[] = [
  {
    src: "/assets/projects/dashboard-esocial/dashboard-esocial-01.png",
    alt: "Tela de login do sistema de gestão de processos eSocial",
    caption: "Tela de login do sistema",
    description:
      "Apresenta o portal de acesso do sistema interno, com campos de e-mail e senha, status da API e contexto de competência.",
  },
  {
    src: "/assets/projects/dashboard-esocial/dashboard-esocial-02.png",
    alt: "Dashboard operacional eSocial com indicadores de eventos S-2220 e S-2240",
    caption: "Dashboard operacional por competência",
    description:
      "Mostra indicadores de registros concluídos, erros, percentuais por evento e controles de competência e exportação.",
  },
  {
    src: "/assets/projects/dashboard-esocial/dashboard-esocial-03.png",
    alt: "Ranking de empresas com mais erros e mapa de calor de tipos de erro",
    caption: "Ranking e mapa de calor de erros",
    description:
      "Exibe empresas com maior volume de erros por evento e categorias de problemas para apoiar priorização operacional.",
  },
  {
    src: "/assets/projects/dashboard-esocial/dashboard-esocial-04.png",
    alt: "Relatório executivo eSocial com resumo e indicadores gerais",
    caption: "Relatório executivo com indicadores gerais",
    description:
      "Mostra filtros de relatório, resumo executivo e cartões com total de registros, concluídos, erros e principais pontos de atenção.",
  },
  {
    src: "/assets/projects/dashboard-esocial/dashboard-esocial-05.png",
    alt: "Tabelas de indicadores por evento e empresas críticas",
    caption: "Indicadores por evento e empresas críticas",
    description:
      "Apresenta tabelas de eventos, conclusão, erros, status e empresas críticas para análise gerencial do período.",
  },
  {
    src: "/assets/projects/dashboard-esocial/dashboard-esocial-06.png",
    alt: "Categorias de erro e evolução mensal no relatório executivo eSocial",
    caption: "Categorias de erro e evolução mensal",
    description:
      "Mostra distribuição de erros por categoria, participação por evento e evolução mensal de totais, concluídos e erros.",
  },
];

export const projects: Project[] = [
  {
    id: "sugestoes",
    number: "01",
    title: "sistema de sugestões internas",
    category: "sistema interno",
    description:
      "mvp funcional para registro de demandas de automação interna, com login corporativo, protocolo automático, painel administrativo, workflow, resposta ao colaborador, minhas demandas e exportação csv.",
    techStack: [
      "react",
      "typescript",
      "vite",
      "tailwindcss",
      "firebase auth",
      "cloud firestore",
      "firestore security rules",
      "github actions",
      "github pages",
    ],
    highlights: [
      "autenticação corporativa",
      "painel administrativo",
      "workflow administrativo",
      "histórico",
      "coleção pública separada para colaborador",
      "resposta pública separada de observação interna",
      "exportação csv",
      "controle por allowlist",
    ],
    repoUrl: "https://github.com/kinhoog/sugestoes",
    demoUrl: "https://kinhoog.github.io/sugestoes/",
    coverImage: sugestoesImages[0],
    galleryImages: sugestoesImages,
  },
  {
    id: "esocial-ia",
    number: "02",
    title: "gestão esocial com ia local aplicada",
    category: "ia aplicada / operação esocial",
    description:
      "estrutura interna voltada para apoio em rotinas do esocial, dúvidas operacionais, análise contextual e uso de modelo local de linguagem para ganho de produtividade e padronização operacional.",
    techStack: [
      "python",
      "modelos locais",
      "llama.cpp",
      "qwen/gemma",
      "processamento de dados",
      "frontend interno",
      "automação operacional",
    ],
    highlights: [
      "ia local aplicada",
      "apoio a dúvidas operacionais",
      "privacidade e controle local",
      "base de conhecimento contextual",
      "modelo local de linguagem aplicado à operação",
    ],
    coverImage: esocialIaImages[0],
    galleryImages: esocialIaImages,
  },
  {
    id: "dashboard-esocial",
    number: "03",
    title: "dashboard operacional esocial",
    category: "dashboard / gestão operacional",
    description:
      "dashboard interno para acompanhar status de eventos esocial, erros, pendências, procurações, xmls e indicadores por competência.",
    techStack: [
      "html",
      "css",
      "javascript",
      "chart.js",
      "dados operacionais",
      "visualização gerencial",
    ],
    highlights: [
      "indicadores por evento",
      "visão por empresa",
      "filtros operacionais",
      "apoio gerencial",
      "acompanhamento de erros e pendências",
    ],
    coverImage: dashboardEsocialImages[0],
    galleryImages: dashboardEsocialImages,
  },
];

export const marqueeItems: MarqueeItem[] = [
  {
    title: "gestão esocial com ia local",
    category: "ia aplicada",
    tags: ["modelo local", "operação", "conhecimento"],
    previewImage: esocialIaImages[0],
  },
  {
    title: "sistema de sugestões internas",
    category: "sistema interno",
    tags: ["workflow", "firestore", "admin"],
    previewImage: sugestoesImages[3],
  },
  {
    title: "dashboard operacional esocial",
    category: "dashboard",
    tags: ["indicadores", "filtros", "status"],
    previewImage: dashboardEsocialImages[1],
  },
  {
    title: "kinho ia",
    category: "assistente interno",
    tags: ["prompts", "rotinas", "triagem"],
    previewImage: esocialIaImages[2],
  },
  {
    title: "sistemas internos",
    category: "produto operacional",
    tags: ["cadastros", "regras", "gestão"],
    previewImage: sugestoesImages[5],
  },
  {
    title: "automação de processos",
    category: "melhoria contínua",
    tags: ["fluxos", "redução de retrabalho", "escala"],
    previewImage: sugestoesImages[1],
  },
  {
    title: "ia aplicada",
    category: "apoio operacional",
    tags: ["contexto", "análise", "decisão"],
    previewImage: esocialIaImages[4],
  },
  {
    title: "melhoria de processos",
    category: "operação real",
    tags: ["organização", "visibilidade", "padrão"],
    previewImage: dashboardEsocialImages[3],
  },
];
