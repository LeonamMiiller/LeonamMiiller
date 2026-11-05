import type { DefaultTheme } from 'vitepress'
import type { LocaleEntry } from '../content/types'
import { localePath } from '../content/registry'

/**
 * Monta a barra de navegação superior de um idioma.
 * O `base` do site é aplicado automaticamente pelo tema padrão (VPLink).
 */
export function createNav(entry: LocaleEntry): DefaultTheme.NavItem[] {
  return entry.content.ui.nav.map((item) => ({
    text: item.text,
    link: localePath(entry.routeBase, item.link)
  }))
}
