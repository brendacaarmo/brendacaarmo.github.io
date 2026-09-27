// ============================================================
// Dicionário de traduções (PT / EN / ES)
// ============================================================
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.skills": "Skills",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.badge": "Disponível para novos desafios",
    "hero.title": "Integro sistemas e construo pipelines de dados confiáveis.",
    "hero.lede": "Analista de Sistemas com foco em APIs, middleware e engenharia de dados — da migração de arquiteturas legadas à automação de pipelines em produção.",
    "hero.ctaProjects": "Ver Projetos",
    "hero.ctaContact": "Entrar em Contato",
    "hero.card1": "APIs migradas (TM Forum)",
    "hero.card2": "anos em integração de sistemas",
    "hero.card3": "idiomas fluentes",
    "about.eyebrow": "Sobre",
    "about.title": "Da integração de legados à engenharia de dados",
    "about.text": "Quatro anos de experiência em TI, com 2,5 anos como Analista de Sistemas migrando APIs legadas para o padrão global TM Forum, automatizando deploys via CI/CD e construindo dashboards executivos em Power BI. Hoje direciono essa base técnica para projetos próprios de engenharia de dados, do desenho à produção.",
    "skills.eyebrow": "Stack",
    "skills.title": "Habilidades técnicas",
    "skills.group1": "Backend & Linguagens",
    "skills.group2": "APIs & Middleware",
    "skills.group3": "Dados & SQL",
    "skills.group4": "DevOps & Cloud",
    "skills.level.advanced": "Uso avançado",
    "skills.level.intermediate": "Uso frequente",
    "skills.level.basic": "Noções",
    "projects.eyebrow": "Projetos",
    "projects.title": "Projetos em destaque",
    "projects.p1.title": "Pipeline Automatizado de Dados Financeiros",
    "projects.p1.desc": "Pipeline ETL que coleta diariamente Dólar, Selic e IPCA via API pública do Banco Central, valida e transforma os dados, e grava via upsert em PostgreSQL na nuvem — execução 100% automatizada por GitHub Actions, sem intervenção manual.",
    "projects.repo": "Repositório",
    "projects.arch": "Arquitetura",
    "projects.p2.title": "Dashboard Power BI — em construção",
    "projects.p2.desc": "Próximo projeto: dashboard consumindo os dados deste pipeline em tempo real.",
    "projects.p3.title": "Novo projeto em breve",
    "projects.p3.desc": "Este espaço vai ganhar um novo repositório em breve.",
    "contact.eyebrow": "Contato",
    "contact.title": "Vamos conversar",
    "contact.text": "Aberta a oportunidades remotas, híbridas ou presenciais em integração de sistemas, automação e dados.",
    "contact.form.name": "Nome",
    "contact.form.email": "E-mail",
    "contact.form.message": "Mensagem",
    "contact.form.send": "Enviar mensagem",
    "footer.credit": "Brenda Julia Carmo Silva — Campinas, Brasil",
    "footer.deploy": "Publicado via GitHub Pages"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Open to new opportunities",
    "hero.title": "I connect systems and build reliable data pipelines.",
    "hero.lede": "Systems Analyst focused on APIs, middleware and data engineering — from legacy architecture migration to production pipeline automation.",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Get in Touch",
    "hero.card1": "APIs migrated (TM Forum)",
    "hero.card2": "years in systems integration",
    "hero.card3": "fluent languages",
    "about.eyebrow": "About",
    "about.title": "From legacy integration to data engineering",
    "about.text": "Four years in IT, including 2.5 years as a Systems Analyst migrating legacy APIs to the global TM Forum standard, automating CI/CD deployments and building executive Power BI dashboards. I now apply that technical foundation to my own data engineering projects, from design to production.",
    "skills.eyebrow": "Stack",
    "skills.title": "Technical skills",
    "skills.group1": "Backend & Languages",
    "skills.group2": "APIs & Middleware",
    "skills.group3": "Data & SQL",
    "skills.group4": "DevOps & Cloud",
    "skills.level.advanced": "Advanced",
    "skills.level.intermediate": "Frequent use",
    "skills.level.basic": "Basics",
    "projects.eyebrow": "Projects",
    "projects.title": "Featured projects",
    "projects.p1.title": "Automated Financial Data Pipeline",
    "projects.p1.desc": "ETL pipeline that daily collects USD/BRL, Selic rate and IPCA from Brazil's Central Bank public API, validates and transforms the data, and writes via upsert to a cloud PostgreSQL — 100% automated via GitHub Actions, no manual intervention.",
    "projects.repo": "Repository",
    "projects.arch": "Architecture",
    "projects.p2.title": "Power BI Dashboard — in progress",
    "projects.p2.desc": "Next project: a dashboard consuming this pipeline's data in real time.",
    "projects.p3.title": "New project coming soon",
    "projects.p3.desc": "This spot will feature a new repository soon.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk",
    "contact.text": "Open to remote, hybrid or on-site opportunities in systems integration, automation and data.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send message",
    "footer.credit": "Brenda Julia Carmo Silva — Campinas, Brazil",
    "footer.deploy": "Deployed via GitHub Pages"
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.badge": "Disponible para nuevos desafíos",
    "hero.title": "Integro sistemas y construyo pipelines de datos confiables.",
    "hero.lede": "Analista de Sistemas enfocada en APIs, middleware e ingeniería de datos — desde la migración de arquitecturas legadas hasta la automatización de pipelines en producción.",
    "hero.ctaProjects": "Ver Proyectos",
    "hero.ctaContact": "Contactar",
    "hero.card1": "APIs migradas (TM Forum)",
    "hero.card2": "años en integración de sistemas",
    "hero.card3": "idiomas fluidos",
    "about.eyebrow": "Sobre mí",
    "about.title": "De la integración de legados a la ingeniería de datos",
    "about.text": "Cuatro años de experiencia en TI, con 2,5 años como Analista de Sistemas migrando APIs legadas al estándar global TM Forum, automatizando despliegues vía CI/CD y construyendo dashboards ejecutivos en Power BI. Hoy dirijo esa base técnica hacia mis propios proyectos de ingeniería de datos, desde el diseño hasta producción.",
    "skills.eyebrow": "Stack",
    "skills.title": "Habilidades técnicas",
    "skills.group1": "Backend y Lenguajes",
    "skills.group2": "APIs y Middleware",
    "skills.group3": "Datos y SQL",
    "skills.group4": "DevOps y Cloud",
    "skills.level.advanced": "Uso avanzado",
    "skills.level.intermediate": "Uso frecuente",
    "skills.level.basic": "Nociones",
    "projects.eyebrow": "Proyectos",
    "projects.title": "Proyectos destacados",
    "projects.p1.title": "Pipeline Automatizado de Datos Financieros",
    "projects.p1.desc": "Pipeline ETL que recolecta diariamente Dólar, Selic e IPCA vía la API pública del Banco Central, valida y transforma los datos, y los graba vía upsert en PostgreSQL en la nube — ejecución 100% automatizada por GitHub Actions, sin intervención manual.",
    "projects.repo": "Repositorio",
    "projects.arch": "Arquitectura",
    "projects.p2.title": "Dashboard Power BI — en construcción",
    "projects.p2.desc": "Próximo proyecto: dashboard que consume los datos de este pipeline en tiempo real.",
    "projects.p3.title": "Nuevo proyecto próximamente",
    "projects.p3.desc": "Este espacio tendrá un nuevo repositorio próximamente.",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos",
    "contact.text": "Abierta a oportunidades remotas, híbridas o presenciales en integración de sistemas, automatización y datos.",
    "contact.form.name": "Nombre",
    "contact.form.email": "Correo electrónico",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar mensaje",
    "footer.credit": "Brenda Julia Carmo Silva — Campinas, Brasil",
    "footer.deploy": "Publicado vía GitHub Pages"
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
