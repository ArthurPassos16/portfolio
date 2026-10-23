export const profile = {
  name: "Arthur Marinho dos Passos",
  role: "Desenvolvedor Mobile | Flutter e Dart",
  location: "São Luís, MA",
  email: "arthurpassosti@gmail.com",
  linkedin: "https://linkedin.com/in/arthur-marinho-dos-passos-5018611a3",
  github: "https://github.com/ArthurPassos16",
  resume: "/Curriculo_Arthur_Marinho_dos_Passos.pdf",
  summary:
    "Desenvolvedor Mobile com 4 anos de experiência em Flutter e Dart, com 23 apps publicados e mais de 5.500 downloads na App Store e no Google Play, incluindo apps white-label para o Governo Federal (Ministério da Saúde e Ministério do Turismo). Atualmente desenvolvo um app Flutter com requisitos de segurança de nível bancário (projeto confidencial) — biometria facial, OAuth com Keycloak, App Attest e Play Integrity. Mestre em Ciência da Computação.",
};

export const experience = [
  {
    
    company: "Citiesoft",
    role: "Desenvolvedor Mobile Pleno",
    period: "jan/2026 – Atual",
    bullets: [
      "Desenvolvimento em andamento de um app Flutter com requisitos de segurança de nível bancário (projeto confidencial).",
      "Verificação de identidade com extração de dados de documento e prova de vida facial (AWS Rekognition), via platform channels em Kotlin e Swift.",
      "Autenticação OAuth com Keycloak, App Attest (iOS), Play Integrity (Android) e leitura de cartões NFC.",
      "~98% de sessões sem falhas, monitorado com Firebase Crashlytics (app ainda em homologação).",
      "Pipeline de CI que valida cada PR em ~10 min: formatação, análise estática, testes automatizados e gate de cobertura mínima.",
      "Publicação nas lojas automatizada com Fastlane, evoluindo para deploy contínuo via Jenkins; design system como pacote Git privado.",
      "Desenvolvedor mobile mais sênior do time: revisão de PRs e definição de padrões de arquitetura.",
    ],
  },
  {
    company: "UNASUS/UFMA",
    role: "Desenvolvedor Mobile",
    period: "jan/2022 – Atual",
    bullets: [
      "Apps white-label em Flutter para a universidade e o Governo Federal (Ministério da Saúde e Ministério do Turismo), publicados e mantidos nas duas lojas.",
      "Ciclo completo: requisitos, arquitetura (MVVM com Provider), publicação e manutenção.",
      "Firebase (Auth, Firestore, Functions, Crashlytics, Analytics, Cloud Messaging) para estabilidade, métricas e push.",
      "Testes unitários e de widget, code reviews em times ágeis com Git e CI/CD.",
    ],
  },
  {
    company: "NCA/UFMA",
    role: "Desenvolvedor Full Stack",
    period: "out/2024 – jan/2025",
    bullets: [
      "Serviços REST e visualizações de dados geoespaciais com Next.js e Python.",
      "Otimização de consultas em bancos de alto volume e modelagem de estruturas de dados complexas.",
    ],
  },
];

export const education = [
  { title: "Mestrado em Ciência da Computação", place: "UFMA (pesquisa em IHC e UX)", year: "2025" },
  { title: "Bacharelado em Ciência da Computação", place: "UFMA", year: "2022" },
];

export const skills: Record<string, string[]> = {
  Mobile: ["Flutter", "Dart", "Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Platform channels", "React Native"],
  "Arquitetura e Estado": ["MVVM", "Provider", "Clean Architecture", "SOLID", "Clean Code", "BLoC/Cubit", "get_it", "go_router", "Flavors", "White-label"],
  "APIs e Segurança": ["REST", "OAuth/Keycloak", "App Attest", "Play Integrity", "AWS Rekognition", "NFC"],
  Firebase: ["Auth", "Firestore", "Functions", "Crashlytics", "Analytics", "Cloud Messaging"],
  "Qualidade e CI/CD": ["Testes unitários e de widget", "Code review", "Git", "Azure DevOps", "Jenkins", "Fastlane", "App Store Connect", "Google Play Console"],
  Idiomas: ["Português (nativo)", "Inglês (C1 EF SET)"],
};

// downloads: Google Play + App Store (primeiro download), até 20/10/2026
// status: when set, the store links are hidden and the label is shown instead
export type App = { name: string; date?: string; downloads: number; play: string; apple?: string; status?: "Em breve" | "Suspenso · período eleitoral" };

export const caseStudies = [
  {
    app: "MTUR Games",
    client: "Ministério do Turismo + UFMA",
    problem: "Capacitar profissionais do turismo para atender turistas com deficiência ou mobilidade reduzida, com 10 serious games que simulam situações reais de atendimento.",
    role: [
      "Desenvolvi os 10 jogos do app, com revisão de código em dupla.",
      "Fiquei responsável por finalizar o projeto e publicar na App Store e no Google Play.",
      "Maior desafio: assumir código alheio mal implementado e corrigi-lo até chegar à versão final.",
    ],
    stack: ["React Native", "Expo", "TypeScript"],
    repo: "https://github.com/gruposaite/mtur-games-expo",
    stats: [["10", "jogos"], ["150", "downloads"], ["2", "lojas"]],
  },
  {
    app: "Urgências Odontológicas",
    client: "UNA-SUS/UFMA",
    problem: "Biblioteca digital que ajuda o dentista a planejar a triagem e o tratamento de casos de urgência.",
    role: [
      "Projeto feito de ponta a ponta por mim: levantamento de requisitos, proposta de arquitetura e investigação de soluções.",
      "Desenvolvimento e publicação na App Store e no Google Play.",
    ],
    stack: ["Flutter", "Dart", "MVVM", "Provider"],
    stats: [["631", "downloads"], ["2", "lojas"], ["2022", "lançamento"]],
  },
];

export const publishedApps = () => apps.filter((a) => a.status !== "Em breve");

export const apps: App[] = [
  { name: "Urgências Odontológicas", downloads: 631, date: "16/12/2022", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_urg_odontologicas", apple: "https://apps.apple.com/br/app/bd-urg%C3%AAncias-odontol%C3%B3gicas/id6444193889" },
  { name: "Saúde Bucal da PcD", downloads: 337, date: "25/01/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_bucal_pcd", apple: "https://apps.apple.com/br/app/bd-sa%C3%BAde-bucal-pcd/id1663923499" },
  { name: "Saúde Bucal: Doenças Infecciosas", downloads: 541, date: "28/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_doencas_infecciosas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-infecciosas/id1663395093" },
  { name: "Saúde Bucal da Gestante", downloads: 68, date: "31/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.biblioteca_saude_bucal_gestante", apple: "https://apps.apple.com/br/app/bd-sa%C3%BAde-bucal-da-gestante/id6446296935" },
  { name: "Doenças Cardiovasculares", downloads: 297, date: "28/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_cardiovasculares", apple: "https://apps.apple.com/br/app/doen%C3%A7as-cardiovasculares/id1666670746" },
  { name: "Doenças Respiratórias Crônicas", downloads: 243, date: "09/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_resp_cronicas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-respirat%C3%B3rias-cr%C3%B4nicas/id1666672922" },
  { name: "Saúde Bucal", downloads: 489, date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_bucal_geral", apple: "https://apps.apple.com/br/app/sa%C3%BAde-bucal/id6446409536" },
  { name: "DRC, Hipertensão e Diabetes", downloads: 149, date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_drc_diabetes", apple: "https://apps.apple.com/br/app/drc-hipertens%C3%A3o-e-diabetes/id1672362853" },
  { name: "DCNT e Odontologia: Câncer", downloads: 27, date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_dcnt_odontologia_cancer", apple: "https://apps.apple.com/br/app/dcnt-e-odontologia-c%C3%A2ncer/id6468838230" },
  { name: "Queixas Comuns na APS", downloads: 328, date: "17/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_queixas" },
  { name: "Comunicação Efetiva", downloads: 194, date: "26/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_comunicacao_efetiva" },
  { name: "Odontologia e Doenças Crônicas", downloads: 30, date: "18/09/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_doencas_cronicas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-cr%C3%B4nicas/id6464072117" },
  { name: "Pessoa com Deficiência 1", downloads: 415, date: "11/10/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_i", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-1/id6453638690" },
  { name: "Pessoa com Deficiência 2", downloads: 43, date: "09/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_ii", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-ii/id6470542989" },
  { name: "Pessoa com Deficiência 3", downloads: 23, date: "13/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_iii", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-iii/id6471030370" },
  { name: "Pessoa com Deficiência 4", downloads: 45, date: "28/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_iv", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-4/id6472811711" },
  { name: "Pessoa com Deficiência 5", downloads: 47, date: "19/12/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_v", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-5/id6473919367" },
  {
    name: "Saúde Digital Usuários do SUS", downloads: 1097, status: "Suspenso · período eleitoral",
    date: "27/08/2025",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_digital",
    apple: "https://apps.apple.com/us/app/saúde-digital-usuários-do-sus/id6743623152",
  },
  {
    name: "Saúde Digital Profissionais I", status: "Suspenso · período eleitoral", downloads: 152,
    date: "25/11/2025",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_digital_profissionais1",
    apple: "https://apps.apple.com/us/app/saúde-digital-profissionais-i/id6755150612",
  },
  {
    name: "Políticas em Saúde Bucal", status: "Suspenso · período eleitoral", downloads: 9,
    date: "29/04/2026",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo",
    apple: "https://apps.apple.com/us/app/políticas-em-saúde-bucal/id6749771361",
  },
  {
    name: "Gestão em Saúde Bucal I", status: "Suspenso · período eleitoral", downloads: 13,
    date: "23/03/2026",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo2",
    apple: "https://apps.apple.com/us/app/gestão-em-saúde-bucal-i/id6752677407",
  },
  {
    name: "Gestão em Saúde Bucal II", downloads: 3, status: "Em breve",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo3",
    apple: "https://apps.apple.com/us/app/gestão-em-saúde-bucal-ii/id6759197234",
  },
  {
    name: "Gerência de CEO SESB", downloads: 1, status: "Em breve",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo4",
    apple: "https://apps.apple.com/us/app/ger%C3%AAncia-de-ceo-sesb/id6759197281",
  },
  {
    name: "BD MTUR", downloads: 223,
    date: "16/05/2025",
    play: "https://play.google.com/store/apps/details?id=br.unasus.ufma.bibliotecaDigitalMTUR",
    apple: "https://apps.apple.com/br/app/bd-mtur/id6447318776",
  },
  {
    name: "MTUR Games", downloads: 150,
    date: "24/03/2025",
    play: "https://play.google.com/store/apps/details?id=br.gov.turismo.gamesmtur",
    apple: "https://apps.apple.com/br/app/mtur-games/id6448304900",
  },
];
