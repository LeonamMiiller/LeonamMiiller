import type { DefaultTheme } from 'vitepress'
import type { LocaleEntry } from '../content/types'
import { createNav } from './nav'
import { createSidebar } from './sidebar'

/** Monta todo o `themeConfig` de um idioma a partir do seu conteúdo. */
export function createThemeConfig(entry: LocaleEntry): DefaultTheme.Config {
  const { content } = entry

  return {
    nav: createNav(entry),
    sidebar: createSidebar(entry),
    socialLinks: content.contact.socials.map((social) => ({
      icon: social.network,
      link: social.url
    })),
    outlineTitle: content.ui.theme.outlineTitle,
    lastUpdatedText: content.ui.theme.lastUpdated,
    docFooter: {
      prev: content.ui.theme.docFooterPrev,
      next: content.ui.theme.docFooterNext
    },
    returnToTopLabel: content.ui.theme.returnToTop,
    sidebarMenuLabel: content.ui.theme.sidebarMenuLabel,
    darkModeSwitchLabel: content.ui.theme.darkModeLabel,
    footer: {
      message: content.ui.footer.message,
      copyright: content.ui.footer.copyright
    }
  }
}
