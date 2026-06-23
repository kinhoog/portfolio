export type Certificate = {
  id: string;
  title: string;
  issuer?: string;
  category?: string;
  year?: string;
  fileUrl: string;
};

export const certificates: Certificate[] = [
  {
    id: "ambientes-computacionais-e-conectividade",
    title: "Ambientes computacionais e conectividade",
    issuer: "",
    category: "",
    year: "",
    fileUrl: "/certificados/ambientes-computacionais-e-conectividade.pdf",
  },
  {
    id: "modelagem-de-software",
    title: "Modelagem de software",
    issuer: "",
    category: "",
    year: "",
    fileUrl: "/certificados/modelagem-de-software.pdf",
  },
  {
    id: "programacao-de-solucoes-computacionais",
    title: "Programação de soluções computacionais",
    issuer: "",
    category: "",
    year: "",
    fileUrl: "/certificados/programacao-de-solucoes-computacionais.pdf",
  },
];
