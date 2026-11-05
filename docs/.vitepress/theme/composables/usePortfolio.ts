import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { getLocaleEntry, localePath } from '../../../content/registry'
import type { LocaleEntry, PortfolioContent } from '../../../content/types'

/**
 * Expõe o conteúdo do idioma atual para os componentes do tema.
 *
 * Os componentes dependem da abstração `PortfolioContent`, nunca de um
 * arquivo concreto de idioma (Dependência de Inversão — DIP).
 */
export function usePortfolio() {
  const { lang } = useData()

  const entry = computed<LocaleEntry>(() => getLocaleEntry(lang.value))
  const content = computed<PortfolioContent>(() => entry.value.content)

  /** URL interna completa: prefixo do idioma + base do site. */
  const linkTo = (slug: string): string =>
    withBase(localePath(entry.value.routeBase, slug))

  return { entry, content, linkTo }
}
