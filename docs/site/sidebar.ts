import type { DefaultTheme } from 'vitepress'
import type { LocaleEntry } from '../content/types'
import { localePath } from '../content/registry'

/**
 * Monta a sidebar de um idioma: navegação principal + atalhos sociais.
 * Um único array aplica-se a todas as páginas do idioma.
 */
export function createSidebar(entry: LocaleEntry): DefaultTheme.Sidebar {
  const { content } = entry

  return [
    {
      text: content.ui.sidebar.main,
      items: content.ui.nav.map((item) => ({
        text: item.text,
        link: localePath(entry.routeBase, item.link)
      }))
    },
    {
      text: content.ui.sidebar.connect,
      items: content.contact.socials.map((social) => ({
        text: social.label,
        link: social.url
      }))
    }
  ]
}
