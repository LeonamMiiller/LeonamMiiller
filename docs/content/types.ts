/**
 * Camada de DOMÍNIO do portfólio.
 *
 * Este módulo define os contratos (abstrações) compartilhados por todos os
 * idiomas. Nenhum dado concreto vive aqui: apenas tipos.
 *
 * Princípios SOLID aplicados:
 * - ISP: interfaces pequenas e específicas (Skill, Experience, Project...)
 *        em vez de um único objeto monolítico.
 * - LSP: qualquer idioma que implemente `PortfolioContent` é substituível
 *        por outro em qualquer página ou componente.
 */

/** Categorias de habilidades. O rótulo exibido fica em `ui.categories`. */
export type SkillCategoryId =
  | 'spoken'
  | 'language'
  | 'framework'
  | 'web'
  | 'database'
  | 'cloud'
  | 'tool'

export interface Skill {
  name: string
  /** URL do ícone (ícones usados no README). */
  icon: string
  category: SkillCategoryId
}

export interface Experience {
  role: string
  company: string
  location: string
  /** Período já formatado, ex.: "08/2024 – 02/2026". */
  period: string
  /** Destaques / responsabilidades do cargo. */
  highlights: string[]
}

export interface Education {
  title: string
  /** Situação já traduzida no conteúdo, ex.: "Em progresso". */
  status: string
  institution: string
  location: string
  description: string
}

export interface Project {
  name: string
  description: string
  /** URL do repositório no GitHub. */
  url: string
  /** Linguagem principal, ex.: "Delphi", "C#". */
  language?: string
  stars: number
  /** Tags temáticas, ex.: "Reverse Engineering". */
  topics: string[]
}

export interface Reference {
  name: string
  role: string
  github?: string
  linkedin?: string
}

export interface SocialLink {
  network: 'github' | 'linkedin'
  label: string
  url: string
}

export interface ContactInfo {
  phone: string
  email: string
  location: string
  socials: SocialLink[]
}

export interface PersonalData {
  nationality: string
  birthDate: string
  maritalStatus: string
}

export interface Profile {
  fullName: string
  /** Nome curto exibido em títulos e navegação. */
  displayName: string
  role: string
  /** Frase de efeito abaixo do cargo. */
  tagline: string
  avatar: string
  /** Parágrafos da seção "Sobre". */
  summary: string[]
}

/** Item de navegação. `link` é um slug SEM prefixo de idioma, ex.: "/curriculum". */
export interface NavItem {
  text: string
  link: string
}

/** Textos de interface (UI) do idioma — rótulos usados pelos componentes. */
export interface UiTexts {
  /** Rótulo do idioma no seletor do VitePress, ex.: "Português". */
  localeLabel: string
  nav: NavItem[]
  sidebar: {
    main: string
    connect: string
  }
  hero: {
    ctaResume: string
    ctaProjects: string
    ctaContact: string
  }
  labels: {
    skills: string
    experience: string
    education: string
    projects: string
    references: string
    personalData: string
    objective: string
    period: string
    company: string
    location: string
    email: string
    phone: string
    nationality: string
    birthDate: string
    maritalStatus: string
    stars: string
    viewAll: string
    viewProject: string
  }
  categories: Record<SkillCategoryId, string>
  footer: {
    message: string
    copyright: string
  }
  theme: {
    outlineTitle: string
    lastUpdated: string
    docFooterPrev: string
    docFooterNext: string
    returnToTop: string
    sidebarMenuLabel: string
    darkModeLabel: string
  }
}

/** Contrato de um idioma do portfólio (LSP). */
export interface PortfolioContent {
  /** BCP-47, ex.: "pt-BR", "en", "es". */
  lang: string
  title: string
  description: string
  profile: Profile
  personal: PersonalData
  skills: Skill[]
  experience: Experience[]
  education: Education[]
  projects: Project[]
  references: Reference[]
  contact: ContactInfo
  ui: UiTexts
}

/**
 * Textos localizados — formato exato dos arquivos
 * `localization/loc_*.json` (tudo que é traduzível vive lá).
 *
 * A única diferença para `PortfolioContent` são as skills: no JSON elas
 * são um mapa `id → nome` (traduzido por idioma), enquanto no conteúdo
 * final elas são a lista resolvida vinda de `content/skills.ts`.
 */
export interface Localization {
  title: string
  description: string
  profile: Profile
  personal: PersonalData
  /** skillId → nome do skill neste idioma, ex.: { "english": "Inglês" }. */
  skills: Record<string, string>
  experience: Experience[]
  education: Education[]
  projects: Project[]
  references: Reference[]
  contact: ContactInfo
  ui: UiTexts
}

/** Entrada de idioma usada pelo restante do site. */
export interface LocaleEntry {
  /** Chave de rota do VitePress: "root" para o idioma principal. */
  vitepressKey: string
  /** Prefixo de rota SEM barra final: "" | "/en" | "/es". */
  routeBase: string
  content: PortfolioContent
}
