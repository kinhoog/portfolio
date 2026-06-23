export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
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
  galleryImages?: ProjectImage[];
  accent: "cyan" | "violet" | "steel";
};

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
    coverImage: {
      src: "/assets/projects/sugestoes/sugestoes-capa.png",
      alt: "Tela inicial do Sistema de Sugestões Internas",
      caption: "Tela inicial do sistema",
    },
    galleryImages: [
      {
        src: "/assets/projects/sugestoes/sugestoes-capa.png",
        alt: "Tela inicial do Sistema de Sugestões Internas",
        caption: "Tela inicial do sistema",
      },
    ],
    accent: "cyan",
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
      "ia local",
      "apoio a dúvidas operacionais",
      "privacidade e controle local",
      "base de conhecimento contextual",
      "redução de tempo em consultas repetitivas",
    ],
    galleryImages: [],
    accent: "violet",
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
    galleryImages: [],
    accent: "steel",
  },
];

export const marqueeItems = [
  {
    title: "gestão esocial com ia local",
    category: "ia aplicada",
    tags: ["modelo local", "operação", "conhecimento"],
  },
  {
    title: "sistema de sugestões internas",
    category: "sistema interno",
    tags: ["workflow", "firestore", "admin"],
  },
  {
    title: "dashboard operacional esocial",
    category: "dashboard",
    tags: ["indicadores", "filtros", "status"],
  },
  {
    title: "kinho ia",
    category: "assistente interno",
    tags: ["prompts", "rotinas", "triagem"],
  },
  {
    title: "sistemas internos",
    category: "produto operacional",
    tags: ["cadastros", "regras", "gestão"],
  },
  {
    title: "automação de processos",
    category: "melhoria contínua",
    tags: ["fluxos", "redução de retrabalho", "escala"],
  },
  {
    title: "ia aplicada",
    category: "apoio operacional",
    tags: ["contexto", "análise", "decisão"],
  },
  {
    title: "melhoria de processos",
    category: "operação real",
    tags: ["organização", "visibilidade", "padrão"],
  },
];
