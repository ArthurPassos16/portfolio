export const profile = {
  name: "Arthur Marinho dos Passos",
  location: "São Luís, MA",
  email: "arthurpassosti@gmail.com",
  linkedin: "https://www.linkedin.com/in/arthurmarinhodospassos/",
  github: "https://github.com/ArthurPassos16",
};

// downloads: Google Play + App Store (primeiro download), até 20/10/2026
// status: when set, the store links are hidden and the label is shown instead
export type App = { name: string; series: string; date?: string; downloads: number; play: string; apple?: string; status?: "Em breve" | "Suspenso · período eleitoral" };

export type Lang = "pt" | "en";

const pt = {
  locale: "pt-BR",
  role: "Desenvolvedor Mobile | Flutter e Dart",
  summary:
    "Desenvolvedor Mobile com 4 anos de experiência em Flutter e Dart, com 23 apps publicados e mais de 5.500 downloads na App Store e no Google Play, incluindo apps white-label para o Governo Federal (Ministério da Saúde e Ministério do Turismo). Atualmente desenvolvo um app Flutter com requisitos de segurança de nível bancário (projeto confidencial) — biometria facial, OAuth com Keycloak, App Attest e Play Integrity. Mestre em Ciência da Computação.",
  experience: [
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
  ],
  education: [
    { title: "Mestrado em Ciência da Computação", place: "UFMA (pesquisa em IHC e UX)", year: "2025" },
    { title: "Bacharelado em Ciência da Computação", place: "UFMA", year: "2022" },
  ],
  skills: {
    Mobile: ["Flutter", "Dart", "Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Platform channels", "React Native"],
    "Arquitetura e Estado": ["MVVM", "Provider", "Clean Architecture", "SOLID", "Clean Code", "BLoC/Cubit", "get_it", "go_router", "Flavors", "White-label"],
    "APIs e Segurança": ["REST", "OAuth/Keycloak", "App Attest", "Play Integrity", "AWS Rekognition", "NFC"],
    Firebase: ["Auth", "Firestore", "Functions", "Crashlytics", "Analytics", "Cloud Messaging"],
    "Qualidade e CI/CD": ["Testes unitários e de widget", "Code review", "Git", "Azure DevOps", "Jenkins", "Fastlane", "App Store Connect", "Google Play Console"],
    Idiomas: ["Português (nativo)", "Inglês (C1 EF SET)"],
  } as Record<string, string[]>,
  caseStudies: [
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
      repo: "https://github.com/gruposaite/mtur-games-expo" as string | undefined,
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
      repo: undefined,
      stats: [["631", "downloads"], ["2", "lojas"], ["2022", "lançamento"]],
    },
  ],
  // app series and statuses are stored in Portuguese; these map them to display text
  series: {} as Record<string, string>,
  status: {} as Record<string, string>,
  ui: {
    title: "Arthur Passos | Desenvolvedor Mobile Flutter",
    description: "Portfólio de Arthur Marinho dos Passos, desenvolvedor mobile Flutter e Dart com +5.500 downloads em 23 apps publicados.",
    nav: { apps: "Apps", experience: "Trajetória", skills: "Skills", contact: "Contato" },
    seeApps: "Ver apps",
    resume: "Currículo PDF",
    resumeHref: "/Curriculo_Arthur_Marinho_dos_Passos.pdf",
    stats: ["apps publicados", "downloads", "anos de Flutter"],
    acts: ["Act I", "Act II · Discografia", "Act III · Turnê", "Act IV · Setlist", "Encore"],
    appsTitle: "apps publicados",
    appsIntro: "Bibliotecas digitais em Flutter para UNA-SUS/UFMA, Ministério da Saúde e Ministério do Turismo, publicadas na App Store e no Google Play. Mais baixados primeiro; downloads somados das duas lojas até 20/10/2026.",
    caseStudy: "Estudo de caso",
    repo: "Código no GitHub",
    experienceTitle: "Trajetória",
    skillsTitle: "Habilidades",
    contactTitle: "Vamos conversar?",
    switchLang: { label: "EN", href: "/en", aria: "Read in English" },
    theme: { light: "Tema claro", dark: "Tema escuro" },
    ogTagline: "Desenvolvedor Mobile · Flutter e Dart",
    ogStats: (n: number) => `+5.500 downloads em ${n} apps · App Store + Google Play`,
  },
};

const en: typeof pt = {
  locale: "en-US",
  role: "Mobile Developer | Flutter & Dart",
  summary:
    "Mobile Developer with 4 years of experience in Flutter and Dart, with 23 published apps and over 5,500 downloads on the App Store and Google Play, including white-label apps for Brazil's Federal Government (Ministry of Health and Ministry of Tourism). Currently building a Flutter app with bank-grade security requirements (confidential project): facial biometrics, OAuth with Keycloak, App Attest and Play Integrity. M.Sc. in Computer Science.",
  experience: [
    {
      company: "Citiesoft",
      role: "Mid-level Mobile Developer",
      period: "Jan 2026 – Present",
      bullets: [
        "Ongoing development of a Flutter app with bank-grade security requirements (confidential project).",
        "Identity verification with document data extraction and facial liveness detection (AWS Rekognition), via platform channels in Kotlin and Swift.",
        "OAuth authentication with Keycloak, App Attest (iOS), Play Integrity (Android) and NFC card reading.",
        "~98% crash-free sessions, monitored with Firebase Crashlytics (app still in acceptance testing).",
        "CI pipeline that validates every PR in ~10 min: formatting, static analysis, automated tests and a minimum coverage gate.",
        "Store releases automated with Fastlane, moving toward continuous deployment via Jenkins; design system shipped as a private Git package.",
        "Most senior mobile developer on the team: PR reviews and architecture standards.",
      ],
    },
    {
      company: "UNASUS/UFMA",
      role: "Mobile Developer",
      period: "Jan 2022 – Present",
      bullets: [
        "White-label Flutter apps for the university and Brazil's Federal Government (Ministry of Health and Ministry of Tourism), published and maintained on both stores.",
        "Full cycle: requirements, architecture (MVVM with Provider), release and maintenance.",
        "Firebase (Auth, Firestore, Functions, Crashlytics, Analytics, Cloud Messaging) for stability, metrics and push notifications.",
        "Unit and widget tests, code reviews in agile teams with Git and CI/CD.",
      ],
    },
    {
      company: "NCA/UFMA",
      role: "Full Stack Developer",
      period: "Oct 2024 – Jan 2025",
      bullets: [
        "REST services and geospatial data visualizations with Next.js and Python.",
        "Query optimization on high-volume databases and modeling of complex data structures.",
      ],
    },
  ],
  education: [
    { title: "M.Sc. in Computer Science", place: "UFMA (research in HCI and UX)", year: "2025" },
    { title: "B.Sc. in Computer Science", place: "UFMA", year: "2022" },
  ],
  skills: {
    Mobile: ["Flutter", "Dart", "Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "Platform channels", "React Native"],
    "Architecture & State": ["MVVM", "Provider", "Clean Architecture", "SOLID", "Clean Code", "BLoC/Cubit", "get_it", "go_router", "Flavors", "White-label"],
    "APIs & Security": ["REST", "OAuth/Keycloak", "App Attest", "Play Integrity", "AWS Rekognition", "NFC"],
    Firebase: ["Auth", "Firestore", "Functions", "Crashlytics", "Analytics", "Cloud Messaging"],
    "Quality & CI/CD": ["Unit and widget tests", "Code review", "Git", "Azure DevOps", "Jenkins", "Fastlane", "App Store Connect", "Google Play Console"],
    Languages: ["Portuguese (native)", "English (C1 EF SET)"],
  },
  caseStudies: [
    {
      app: "MTUR Games",
      client: "Ministry of Tourism + UFMA",
      problem: "Train tourism professionals to serve tourists with disabilities or reduced mobility, through 10 serious games that simulate real service situations.",
      role: [
        "Built the app's 10 games, with pair code review.",
        "Owned finishing the project and publishing it on the App Store and Google Play.",
        "Biggest challenge: taking over poorly implemented code from others and fixing it all the way to the final release.",
      ],
      stack: ["React Native", "Expo", "TypeScript"],
      repo: "https://github.com/gruposaite/mtur-games-expo",
      stats: [["10", "games"], ["150", "downloads"], ["2", "stores"]],
    },
    {
      app: "Urgências Odontológicas (Dental Emergencies)",
      client: "UNA-SUS/UFMA",
      problem: "Digital library that helps dentists plan triage and treatment of urgent cases.",
      role: [
        "Built end to end by me: requirements gathering, architecture proposal and solution research.",
        "Development and publishing on the App Store and Google Play.",
      ],
      stack: ["Flutter", "Dart", "MVVM", "Provider"],
      repo: undefined,
      stats: [["631", "downloads"], ["2", "stores"], ["2022", "launch"]],
    },
  ],
  series: {
    "Saúde Bucal": "Oral Health",
    "Atenção Primária": "Primary Care",
    "Pessoa com Deficiência": "People with Disabilities",
    "Saúde Digital": "Digital Health",
    "Gestão em Saúde Bucal": "Oral Health Management",
    Turismo: "Tourism",
  },
  status: {
    "Em breve": "Coming soon",
    "Suspenso · período eleitoral": "Paused · election period",
  },
  ui: {
    title: "Arthur Passos | Flutter Mobile Developer",
    description: "Portfolio of Arthur Marinho dos Passos, Flutter and Dart mobile developer with 5,500+ downloads across 23 published apps.",
    nav: { apps: "Apps", experience: "Journey", skills: "Skills", contact: "Contact" },
    seeApps: "See apps",
    resume: "Résumé PDF",
    resumeHref: "/Resume_Arthur_Marinho_dos_Passos.pdf",
    stats: ["published apps", "downloads", "years of Flutter"],
    acts: ["Act I", "Act II · Discography", "Act III · Tour", "Act IV · Setlist", "Encore"],
    appsTitle: "published apps",
    appsIntro: "Flutter digital libraries for UNA-SUS/UFMA, Brazil's Ministry of Health and Ministry of Tourism, published on the App Store and Google Play. App names are in Portuguese, as in the stores. Most downloaded first; downloads summed across both stores up to Oct 20, 2026.",
    caseStudy: "Case study",
    repo: "Code on GitHub",
    experienceTitle: "Journey",
    skillsTitle: "Skills",
    contactTitle: "Let's talk",
    switchLang: { label: "PT", href: "/", aria: "Ler em português" },
    theme: { light: "Light theme", dark: "Dark theme" },
    ogTagline: "Mobile Developer · Flutter & Dart",
    ogStats: (n: number) => `5,500+ downloads across ${n} apps · App Store + Google Play`,
  },
};

export const content = { pt, en };

// route params of app/[[...lang]]: "/" is pt, "/en" is en
export type Params = Promise<{ lang?: string[] }>;
export const getLang = async (params: Params): Promise<Lang> => ((await params).lang?.[0] === "en" ? "en" : "pt");

export const publishedApps = () => apps.filter((a) => a.status !== "Em breve");

export const apps: App[] = [
  { name: "Urgências Odontológicas", series: "Saúde Bucal", downloads: 631, date: "16/12/2022", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_urg_odontologicas", apple: "https://apps.apple.com/br/app/bd-urg%C3%AAncias-odontol%C3%B3gicas/id6444193889" },
  { name: "Saúde Bucal da PcD", series: "Saúde Bucal", downloads: 337, date: "25/01/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_bucal_pcd", apple: "https://apps.apple.com/br/app/bd-sa%C3%BAde-bucal-pcd/id1663923499" },
  { name: "Saúde Bucal: Doenças Infecciosas", series: "Saúde Bucal", downloads: 541, date: "28/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_doencas_infecciosas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-infecciosas/id1663395093" },
  { name: "Saúde Bucal da Gestante", series: "Saúde Bucal", downloads: 68, date: "31/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.biblioteca_saude_bucal_gestante", apple: "https://apps.apple.com/br/app/bd-sa%C3%BAde-bucal-da-gestante/id6446296935" },
  { name: "Doenças Cardiovasculares", series: "Atenção Primária", downloads: 297, date: "28/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_cardiovasculares", apple: "https://apps.apple.com/br/app/doen%C3%A7as-cardiovasculares/id1666670746" },
  { name: "Doenças Respiratórias Crônicas", series: "Atenção Primária", downloads: 243, date: "09/02/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_resp_cronicas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-respirat%C3%B3rias-cr%C3%B4nicas/id1666672922" },
  { name: "Saúde Bucal", series: "Saúde Bucal", downloads: 489, date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_bucal_geral", apple: "https://apps.apple.com/br/app/sa%C3%BAde-bucal/id6446409536" },
  { name: "DRC, Hipertensão e Diabetes", series: "Atenção Primária", downloads: 149, date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_drc_diabetes", apple: "https://apps.apple.com/br/app/drc-hipertens%C3%A3o-e-diabetes/id1672362853" },
  { name: "DCNT e Odontologia: Câncer", series: "Saúde Bucal", downloads: 27, date: "12/04/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_dcnt_odontologia_cancer", apple: "https://apps.apple.com/br/app/dcnt-e-odontologia-c%C3%A2ncer/id6468838230" },
  { name: "Queixas Comuns na APS", series: "Atenção Primária", downloads: 328, date: "17/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_queixas" },
  { name: "Comunicação Efetiva", series: "Atenção Primária", downloads: 194, date: "26/05/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_comunicacao_efetiva" },
  { name: "Odontologia e Doenças Crônicas", series: "Saúde Bucal", downloads: 30, date: "18/09/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_doencas_cronicas", apple: "https://apps.apple.com/br/app/doen%C3%A7as-cr%C3%B4nicas/id6464072117" },
  { name: "Pessoa com Deficiência 1", series: "Pessoa com Deficiência", downloads: 415, date: "11/10/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_i", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-1/id6453638690" },
  { name: "Pessoa com Deficiência 2", series: "Pessoa com Deficiência", downloads: 43, date: "09/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_ii", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-ii/id6470542989" },
  { name: "Pessoa com Deficiência 3", series: "Pessoa com Deficiência", downloads: 23, date: "13/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_iii", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-iii/id6471030370" },
  { name: "Pessoa com Deficiência 4", series: "Pessoa com Deficiência", downloads: 45, date: "28/11/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_iv", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-4/id6472811711" },
  { name: "Pessoa com Deficiência 5", series: "Pessoa com Deficiência", downloads: 47, date: "19/12/2023", play: "https://play.google.com/store/apps/details?id=br.ufma.bd_pcd_v", apple: "https://apps.apple.com/br/app/pessoa-com-defici%C3%AAncia-5/id6473919367" },
  {
    name: "Saúde Digital Usuários do SUS", series: "Saúde Digital", downloads: 1097, status: "Suspenso · período eleitoral",
    date: "27/08/2025",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_digital",
    apple: "https://apps.apple.com/us/app/saúde-digital-usuários-do-sus/id6743623152",
  },
  {
    name: "Saúde Digital Profissionais I", series: "Saúde Digital", status: "Suspenso · período eleitoral", downloads: 152,
    date: "25/11/2025",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_saude_digital_profissionais1",
    apple: "https://apps.apple.com/us/app/saúde-digital-profissionais-i/id6755150612",
  },
  {
    name: "Políticas em Saúde Bucal", series: "Gestão em Saúde Bucal", status: "Suspenso · período eleitoral", downloads: 9,
    date: "29/04/2026",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo",
    apple: "https://apps.apple.com/us/app/políticas-em-saúde-bucal/id6749771361",
  },
  {
    name: "Gestão em Saúde Bucal I", series: "Gestão em Saúde Bucal", status: "Suspenso · período eleitoral", downloads: 13,
    date: "23/03/2026",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo2",
    apple: "https://apps.apple.com/us/app/gestão-em-saúde-bucal-i/id6752677407",
  },
  {
    name: "Gestão em Saúde Bucal II", series: "Gestão em Saúde Bucal", downloads: 3, status: "Em breve",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo3",
    apple: "https://apps.apple.com/us/app/gestão-em-saúde-bucal-ii/id6759197234",
  },
  {
    name: "Gerência de CEO SESB", series: "Gestão em Saúde Bucal", downloads: 1, status: "Em breve",
    play: "https://play.google.com/store/apps/details?id=br.ufma.bd_ceo4",
    apple: "https://apps.apple.com/us/app/ger%C3%AAncia-de-ceo-sesb/id6759197281",
  },
  {
    name: "BD MTUR", series: "Turismo", downloads: 223,
    date: "16/05/2025",
    play: "https://play.google.com/store/apps/details?id=br.unasus.ufma.bibliotecaDigitalMTUR",
    apple: "https://apps.apple.com/br/app/bd-mtur/id6447318776",
  },
  {
    name: "MTUR Games", series: "Turismo", downloads: 150,
    date: "24/03/2025",
    play: "https://play.google.com/store/apps/details?id=br.gov.turismo.gamesmtur",
    apple: "https://apps.apple.com/br/app/mtur-games/id6448304900",
  },
];
