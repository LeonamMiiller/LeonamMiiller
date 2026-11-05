import type { Localization, LocaleEntry, PortfolioContent } from './types'
import { skills } from './skills'
import ptBRTexts from '../localization/loc_pt-BRA.json'
import enTexts from '../localization/loc_en_ENG.json'
import esTexts from '../localization/loc_es_ESP.json'

/**
 * Registro central de idiomas (ponto de composição da camada de conteúdo).
 *
 * Fonte dos textos: `localization/loc_*.json`.
 * Fonte das skills: `content/skills.ts` (arquivo único), com o nome
 * traduzido resolvido pelo mapa `skills` do JSON do idioma.
 *
 * Para adicionar um novo idioma (Open/Closed):
 *   1. crie `localization/loc_<código>.json` com os textos;
 *   2. registre-o em `localeEntries` abaixo.
 * Nenhum outro arquivo do projeto precisa ser alterado.
 */

/**
 * Compõe o conteúdo final de um idioma: textos localizados + lista de
 * skills (do arquivo único) traduzida pelo mapa do JSON.
 */
function createContent(lang: string, texts: Localization): PortfolioContent {
  return {
    ...texts,
    lang,
    skills: skills.map(({ id, icon, category }) => ({
      name: texts.skills[id],
      icon,
      category
    }))
  }
}

export const localeEntries: readonly LocaleEntry[] = [
  // `as Localization` apenas afrouxa os literais de string que o JSON
  // infere (ex.: socials.network) para os tipos literais do domínio.
  { vitepressKey: 'root', routeBase: '', content: createContent('pt-BR', ptBRTexts as Localization) },
  { vitepressKey: 'en', routeBase: '/en', content: createContent('en', enTexts as Localization) },
  { vitepressKey: 'es', routeBase: '/es', content: createContent('es', esTexts as Localization) }
]

const entriesByLang = new Map<string, LocaleEntry>(
  localeEntries.map((entry) => [entry.content.lang, entry])
)

const defaultEntry = localeEntries[0]

/** Resolve o conteúdo de um idioma com fallback para o idioma principal. */
export function getLocaleEntry(lang: string): LocaleEntry {
  return entriesByLang.get(lang) ?? defaultEntry
}

/**
 * Monta um caminho interno respeitando o prefixo do idioma.
 * Ex.: localePath('/en', '/curriculum') → '/en/curriculum'
 */
export function localePath(routeBase: string, slug: string): string {
  if (slug === '/') return routeBase === '' ? '/' : `${routeBase}/`
  return `${routeBase}${slug}`
}
