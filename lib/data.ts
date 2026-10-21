export const profile = {
  name: "Arthur Marinho dos Passos",
  role: "Desenvolvedor Mobile | Flutter e Dart",
  location: "São Luís, MA",
  email: "arthurpassosti@gmail.com",
  linkedin: "https://linkedin.com/in/arthur-marinho-dos-passos-5018611a3",
  summary:
    "Desenvolvedor Mobile com 4 anos de experiência em Flutter e Dart, com apps em produção na App Store e no Google Play, incluindo apps white-label para o Governo Federal (Ministério da Saúde e Ministério do Turismo). Atualmente desenvolvo um app white-label com requisitos de segurança de nível bancário — biometria facial, OAuth com Keycloak, App Attest e Play Integrity. Mestre em Ciência da Computação.",
};

export const experience = [
  {
    company: "Citiesoft",
    role: "Desenvolvedor Mobile Pleno",
    period: "jan/2026 – Atual",
    bullets: [
      "Desenvolvimento em andamento de um app Flutter white-label com requisitos de segurança de nível bancário, uma única base adaptada para cada cliente via flavors (projeto confidencial).",
      "Verificação de identidade com extração de dados de documento e prova de vida facial (AWS Rekognition), via platform channels em Kotlin e Swift.",
      "Autenticação OAuth com Keycloak, App Attest (iOS), Play Integrity (Android) e leitura de cartões NFC.",
      "Pipelines de build, assinatura e publicação com Azure DevOps e Jenkins; design system como pacote Git privado.",
      "Desenvolvedor mobile mais sênior do time: revisão de PRs e definição de padrões de arquitetura.",
    ],
  },
  {
    company: "UNASUS/UFMA",
    role: "Desenvolvedor Mobile",
    period: "jan/2022 – Atual",
    bullets: [
      "Apps white-label em Flutter para a universidade e o Governo Federal (Ministério da Saúde e Ministério do Turismo), publicados e mantidos nas duas lojas.",
      "Ciclo completo: requisitos, arquitetura (Clean Architecture, SOLID, BLoC/Cubit), publicação e manutenção.",
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
  Mobile: ["Flutter", "Dart", "Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Platform channels"],
  "Arquitetura e Estado": ["Clean Architecture", "SOLID", "Clean Code", "BLoC/Cubit", "get_it", "go_router", "Flavors", "White-label"],
  "APIs e Segurança": ["REST", "OAuth/Keycloak", "App Attest", "Play Integrity", "AWS Rekognition", "NFC"],
  Firebase: ["Auth", "Firestore", "Functions", "Crashlytics", "Analytics", "Cloud Messaging"],
  "Qualidade e CI/CD": ["Testes unitários e de widget", "Code review", "Git", "Azure DevOps", "Jenkins", "App Store Connect", "Google Play Console"],
  Idiomas: ["Português (nativo)", "Inglês (C1 EF SET)"],
};

export type App = { name: string; date?: string; play: string; apple?: string };

export const apps: App[] = [
  { name: "Urgências Odontológicas", date: "07/01/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_urg_odontologicas", apple: "https://apps.apple.com/br/app/bd-urg%C3%AAncias-odontol%C3%B3gicas/id6444193889" },
  { name: "Saúde Bucal da PcD", date: "25/01/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_bucal_pcd", apple: "https://apps.apple.com/br/app/bd-sa%C3%BAde-bucal-pcd/id1663923499" },
  { name: "Saúde Bucal: Doenças Infecciosas", date: "28/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_doencas_infecciosas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-infecciosas/id1663395093" },
  { name: "Saúde Bucal da Gestante", date: "31/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.biblioteca_saude_bucal_gestante", apple: "https://apps.apple.com/br/app/bd-sa%C3%BAde-bucal-da-gestante/id6446296935" },
  { name: "Doenças Cardiovasculares", date: "28/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_cardiovasculares", apple: "https://apps.apple.com/br/app/doen%C3%A7as-cardiovasculares/id1666670746" },
  { name: "Doenças Respiratórias Crônicas", date: "09/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_resp_cronicas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-respirat%C3%B3rias-cr%C3%B4nicas/id1666672922" },
  { name: "Saúde Bucal", date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_bucal_geral", apple: "https://apps.apple.com/br/app/sa%C3%BAde-bucal/id6446409536" },
  { name: "DRC, Hipertensão e Diabetes", date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_drc_diabetes", apple: "https://apps.apple.com/br/app/drc-hipertens%C3%A3o-e-diabetes/id1672362853" },
  { name: "DCNT e Odontologia: Câncer", date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_dcnt_odontologia_cancer", apple: "https://apps.apple.com/br/app/dcnt-e-odontologia-c%C3%A2ncer/id6468838230" },
  { name: "Queixas Comuns na APS", date: "17/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_queixas" },
  { name: "Comunicação Efetiva", date: "26/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_comunicacao_efetiva" },
  { name: "Odontologia e Doenças Crônicas", date: "18/09/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_doencas_cronicas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-cr%C3%B4nicas/id6464072117" },
  { name: "Pessoa com Deficiência 1", date: "11/10/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_i", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-1/id6453638690" },
  { name: "Pessoa com Deficiência 2", date: "09/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_ii", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-ii/id6470542989" },
  { name: "Pessoa com Deficiência 3", date: "13/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_iii", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-iii/id6471030370" },
  { name: "Pessoa com Deficiência 4", date: "28/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_iv", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-4/id6472811711" },
  { name: "Pessoa com Deficiência 5", date: "19/12/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_v", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-5/id6473919367" },
  {
    name: "Saúde Digital Usuários do SUS",
    date: "27/08/2025",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_digital",
    apple: "https://apps.apple.com/us/app/saúde-digital-usuários-do-sus/id6743623152",
  },
  {
    name: "Saúde Digital Profissionais I",
    date: "25/11/2025",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_digital_profissionais1",
    apple: "https://apps.apple.com/us/app/saúde-digital-profissionais-i/id6755150612",
  },
  {
    name: "Políticas em Saúde Bucal",
    date: "29/04/2026",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo",
    apple: "https://apps.apple.com/us/app/políticas-em-saúde-bucal/id6749771361",
  },
  {
    name: "Gestão em Saúde Bucal I",
    date: "23/03/2026",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo2",
    apple: "https://apps.apple.com/us/app/gestão-em-saúde-bucal-i/id6752677407",
  },
  {
    name: "Gestão em Saúde Bucal II",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo3",
    apple: "https://apps.apple.com/us/app/gestão-em-saúde-bucal-ii/id6759197234",
  },
  {
    name: "Gerência de CEO SESB",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo4",
    apple: "https://apps.apple.com/us/app/ger%C3%AAncia-de-ceo-sesb/id6759197281",
  },
  {
    name: "BD MTUR",
    play: "https://play.google.com/store/apps/details?id=br.unasus.ufma.bibliotecaDigitalMTUR",
    apple: "https://apps.apple.com/br/app/bd-mtur/id6447318776",
  },
  {
    name: "MTUR Games",
    play: "https://play.google.com/store/apps/details?id=br.gov.turismo.gamesmtur",
    apple: "https://apps.apple.com/br/app/mtur-games/id6448304900",
  },
];
