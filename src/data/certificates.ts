export type Certificate = {
  id: string;
  title: string;
  institution: string;
  workload: string;
  year: string;
  description: string;
  fileUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: "ambientes-computacionais-e-conectividade",
    title: "Ambientes Computacionais e Conectividade",
    institution: "Unicuritiba",
    workload: "160h",
    year: "2024",
    description:
      "Base em infraestrutura, conectividade, redes, ambientes computacionais e fundamentos técnicos aplicados à tecnologia da informação.",
    fileUrl: "/certificados/ambientes-computacionais-e-conectividade.pdf",
  },
  {
    id: "modelagem-de-software",
    title: "Modelagem de Software",
    institution: "Unicuritiba",
    workload: "160h",
    year: "2024",
    description:
      "Formação complementar em requisitos, UML, análise e projeto de software, modelagem de dados e estruturação de soluções.",
    fileUrl: "/certificados/modelagem-de-software.pdf",
  },
  {
    id: "programacao-de-solucoes-computacionais",
    title: "Programação de Soluções Computacionais",
    institution: "Unicuritiba",
    workload: "160h",
    year: "2024",
    description:
      "Formação complementar em algoritmos, desenvolvimento de software, interfaces, conexão com banco de dados e soluções computacionais aplicadas.",
    fileUrl: "/certificados/programacao-de-solucoes-computacionais.pdf",
  },
];
