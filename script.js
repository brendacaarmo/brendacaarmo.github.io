// ============================================================
// Dicionário de traduções (PT / EN / ES)
// ============================================================
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.badge": "Disponível para novos desafios",
    "hero.title": "Dados, APIs e IA: transformo integrações em sistemas inteligentes.",
    "hero.lede": "Analista de Sistemas com foco em dados, integração de APIs e inteligência artificial.",
    "hero.ctaProjects": "Ver Projetos",
    "hero.ctaContact": "Entrar em Contato",
    "hero.card1": "hard skills",
    "hero.card2": "anos em integração de sistemas",
    "hero.card3": "idiomas fluentes",
    "about.eyebrow": "Sobre",
    "about.title": "Da integração à engenharia de dados",
    "about.text": "Quatro anos de experiência em TI, com +2 anos como Analista de Sistemas migrando APIs legadas para o padrão global TM Forum, construindo dashboards executivos em Power BI e trabalhando com IA conversacional.",
    "exp.eyebrow": "Trajetória",
    "exp.title": "Experiência",
    "exp.job1.date": "Jan 2024 – Mai 2026",
    "exp.job1.role": "Analista de Sistemas Jr",
    "exp.job1.desc1": "Migrou 70+ APIs REST para o padrão global TM Forum, em Java, com IBM AppConnect e API Connect.",
    "exp.job1.desc2": "Conduziu o ciclo completo de entrega, mapeamento, testes, CI/CD em OpenShift, como ponto técnico direto do cliente, e desenvolveu dashboards em Power BI para a liderança executiva.",
    "exp.job2.date": "Jan 2023 – Dez 2023",
    "exp.job2.role": "Estagiária de Desenvolvimento Full Stack",
    "exp.job2.desc1": "Sustentou o assistente de IA conversacional (Watson Assistant) de uma companhia aérea brasileira, 24/7 para milhões de usuários, diagnosticando erros de integração via AWS Lambda.",
    "exp.job3.date": "Mai 2022 – Dez 2022",
    "exp.job3.role": "Estagiária de Suporte de TI",
    "exp.job3.desc1": "Suporte N1 com monitoramento de CPU, memória e links de rede, tratando alertas antes que impactassem clientes.",
    "exp.languages.title": "Idiomas",
    "exp.languages.pt": "Português",
    "exp.languages.en": "Inglês",
    "exp.languages.es": "Espanhol",
    "exp.languages.native": "Nativo",
    "exp.languages.fluent": "Fluente",
    "skills.eyebrow": "Stack",
    "skills.title": "Habilidades técnicas",
    "skills.group1": "Backend & Linguagens",
    "skills.group2": "APIs & Middleware",
    "skills.group3": "Dados & SQL",
    "skills.group4": "DevOps & Cloud",
    "skills.level.advanced": "Avançado",
    "skills.level.intermediate": "Intermediário",
    "skills.level.basic": "Noções",
    "projects.eyebrow": "Projetos",
    "projects.title": "Projetos em destaque",
    "projects.p1.title": "Pipeline Automatizado de Dados Financeiros",
    "projects.p1.desc": "Pipeline ETL que coleta diariamente Dólar, Selic e IPCA via API pública do Banco Central, valida e transforma os dados, e grava via upsert em PostgreSQL na nuvem, execução 100% automatizada por GitHub Actions, sem intervenção manual.",
    "projects.repo": "Repositório",
    "projects.arch": "Arquitetura",
    "projects.p2.title": "Dashboard de Indicadores BCB",
    "projects.p2.desc": "Dashboard web que consome os dados do pipeline em tempo real, direto da API REST do Supabase, com gráficos interativos e filtro de período.",
    "projects.viewDashboard": "Ver Dashboard",
    "projects.p3.title": "Novo projeto em breve",
    "projects.p3.desc": "Este espaço vai ganhar um novo repositório em breve.",
    "contact.eyebrow": "Contato",
    "contact.title": "Vamos conversar",
    "contact.text": "Aberta a oportunidades remotas, híbridas ou presenciais em integração de sistemas, automação, dados e IA.",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar mensagem",
    "footer.credit": "Brenda Julia Carmo Silva — Campinas, Brasil"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Open to new opportunities",
    "hero.title": "Data, APIs and AI: I turn integrations into intelligent systems.",
    "hero.lede": "Systems Analyst focused on data, API integration and artificial intelligence.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Get in Touch",
    "hero.card1": "hard skills",
    "hero.card2": "years in systems integration",
    "hero.card3": "fluent languages",
    "about.eyebrow": "About",
    "about.title": "From integration to data engineering",
    "about.text": "Four years in IT, including 2+ years as a Systems Analyst migrating legacy APIs to the global TM Forum standard, building executive Power BI dashboards and working with conversational AI.",
    "exp.eyebrow": "Career",
    "exp.title": "Experience",
    "exp.job1.date": "Jan 2024 – May 2026",
    "exp.job1.role": "Jr Systems Analyst",
    "exp.job1.desc1": "Migrated 70+ REST APIs to the global TM Forum standard, in Java, using IBM AppConnect and API Connect.",
    "exp.job1.desc2": "Owned the full delivery cycle, mapping, testing, CI/CD on OpenShift, as the client's direct technical point of contact, and built Power BI dashboards for executive leadership.",
    "exp.job2.date": "Jan 2023 – Dec 2023",
    "exp.job2.role": "Full Stack Development Intern",
    "exp.job2.desc1": "Maintained the conversational AI assistant (Watson Assistant) of a Brazilian airline, 24/7 for millions of users, troubleshooting integration errors via AWS Lambda.",
    "exp.job3.date": "May 2022 – Dec 2022",
    "exp.job3.role": "IT Support Intern",
    "exp.job3.desc1": "L1 support monitoring CPU, memory and network links, handling alerts before they impacted clients.",
    "exp.languages.title": "Languages",
    "exp.languages.pt": "Portuguese",
    "exp.languages.en": "English",
    "exp.languages.es": "Spanish",
    "exp.languages.native": "Native",
    "exp.languages.fluent": "Fluent",
    "skills.eyebrow": "Stack",
    "skills.title": "Technical skills",
    "skills.group1": "Backend & Languages",
    "skills.group2": "APIs & Middleware",
    "skills.group3": "Data & SQL",
    "skills.group4": "DevOps & Cloud",
    "skills.level.advanced": "Advanced",
    "skills.level.intermediate": "Intermediate",
    "skills.level.basic": "Basics",
    "projects.eyebrow": "Projects",
    "projects.title": "Featured projects",
    "projects.p1.title": "Automated Financial Data Pipeline",
    "projects.p1.desc": "ETL pipeline that daily collects USD/BRL, Selic rate and IPCA from Brazil's Central Bank public API, validates and transforms the data, and writes via upsert to a cloud PostgreSQL, 100% automated via GitHub Actions, no manual intervention.",
    "projects.repo": "Repository",
    "projects.arch": "Architecture",
    "projects.p2.title": "BCB Indicators Dashboard",
    "projects.p2.desc": "Web dashboard consuming the pipeline's data in real time, straight from the Supabase REST API, with interactive charts and period filtering.",
    "projects.viewDashboard": "View Dashboard",
    "projects.p3.title": "New project coming soon",
    "projects.p3.desc": "This spot will feature a new repository soon.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.text": "Open to remote, hybrid or on-site opportunities in systems integration, automation, data and AI.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "footer.credit": "Brenda Julia Carmo Silva — Campinas, Brazil"
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para nuevos desafíos",
    "hero.title": "Datos, APIs e IA: transformo integraciones en sistemas inteligentes.",
    "hero.lede": "Analista de Sistemas enfocada en datos, integración de APIs e inteligencia artificial.",
    "hero.ctaProjects": "Ver Proyectos",
    "hero.ctaContact": "Contactar",
    "hero.card1": "habilidades técnicas",
    "hero.card2": "años en integración de sistemas",
    "hero.card3": "idiomas fluidos",
    "about.eyebrow": "Sobre mí",
    "about.title": "De la integración a la ingeniería de datos",
    "about.text": "Cuatro años de experiencia en TI, con más de 2 años como Analista de Sistemas migrando APIs legadas al estándar global TM Forum, construyendo dashboards ejecutivos en Power BI y trabajando con IA conversacional.",
    "exp.eyebrow": "Trayectoria",
    "exp.title": "Experiencia",
    "exp.job1.date": "Ene 2024 – May 2026",
    "exp.job1.role": "Analista de Sistemas Jr",
    "exp.job1.desc1": "Migró más de 70 APIs REST al estándar global TM Forum, en Java, con IBM AppConnect y API Connect.",
    "exp.job1.desc2": "Condujo el ciclo completo de entrega, mapeo, pruebas, CI/CD en OpenShift, como punto técnico directo del cliente, y desarrolló dashboards en Power BI para la dirección ejecutiva.",
    "exp.job2.date": "Ene 2023 – Dic 2023",
    "exp.job2.role": "Pasante de Desarrollo Full Stack",
    "exp.job2.desc1": "Mantuvo el asistente de IA conversacional (Watson Assistant) de una aerolínea brasileña, 24/7 para millones de usuarios, diagnosticando errores de integración vía AWS Lambda.",
    "exp.job3.date": "May 2022 – Dic 2022",
    "exp.job3.role": "Pasante de Soporte de TI",
    "exp.job3.desc1": "Soporte N1 con monitoreo de CPU, memoria y enlaces de red, atendiendo alertas antes de que impactaran a los clientes.",
    "exp.languages.title": "Idiomas",
    "exp.languages.pt": "Portugués",
    "exp.languages.en": "Inglés",
    "exp.languages.es": "Español",
    "exp.languages.native": "Nativo",
    "exp.languages.fluent": "Fluido",
    "skills.eyebrow": "Stack",
    "skills.title": "Habilidades técnicas",
    "skills.group1": "Backend y Lenguajes",
    "skills.group2": "APIs y Middleware",
    "skills.group3": "Datos y SQL",
    "skills.group4": "DevOps y Cloud",
    "skills.level.advanced": "Avanzado",
    "skills.level.intermediate": "Intermedio",
    "skills.level.basic": "Nociones",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Proyectos destacados",
    "projects.p1.title": "Pipeline Automatizado de Datos Financieros",
    "projects.p1.desc": "Pipeline ETL que recolecta diariamente Dólar, Selic e IPCA vía la API pública del Banco Central, valida y transforma los datos, y los graba vía upsert en PostgreSQL en la nube, ejecución 100% automatizada por GitHub Actions, sin intervención manual.",
    "projects.repo": "Repositorio",
    "projects.arch": "Arquitectura",
    "projects.p2.title": "Dashboard de Indicadores BCB",
    "projects.p2.desc": "Dashboard web que consume los datos del pipeline en tiempo real, directo de la API REST de Supabase, con gráficos interactivos y filtro de período.",
    "projects.viewDashboard": "Ver Dashboard",
    "projects.p3.title": "Nuevo proyecto próximamente",
    "projects.p3.desc": "Este espacio tendrá un nuevo repositorio próximamente.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos",
    "contact.text": "Abierta a oportunidades remotas, híbridas o presenciales en integración de sistemas, automatización, datos e IA.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo electrónico",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar mensaje",
    "footer.credit": "Brenda Julia Carmo Silva — Campinas, Brasil"
  }
};

// ============================================================
// Troca de idioma
// ============================================================
function applyLanguage(lang) {
  const dict = translations[lang] || translations.pt;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";

  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch (e) {
    // localStorage pode falhar em navegadores com cookies bloqueados; segue sem persistir
  }
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

// Carrega idioma salvo, ou usa o idioma do navegador como sugestão inicial
(function initLanguage() {
  let initial = "pt";
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved && translations[saved]) {
      initial = saved;
    } else {
      const browserLang = (navigator.language || "pt").slice(0, 2);
      if (translations[browserLang]) initial = browserLang;
    }
  } catch (e) {
    // segue com "pt" como padrão
  }
  applyLanguage(initial);
})();

// ============================================================
// Menu mobile (hambúrguer)
// ============================================================
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

if (burgerBtn && navLinks) {
  burgerBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    burgerBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      burgerBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ============================================================
// Envio do formulário de contato (Formspree)
// ============================================================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitBtn = contactForm.querySelector("button[type='submit']");
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        submitBtn.textContent = "✓";
        contactForm.reset();
      } else {
        submitBtn.textContent = "Erro — tente de novo";
      }
    } catch (error) {
      submitBtn.textContent = "Erro — tente de novo";
    } finally {
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 2500);
    }
  });
}