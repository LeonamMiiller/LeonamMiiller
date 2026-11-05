import type { UserConfig } from 'vitepress'
import { localeEntries } from '../content/registry'
import { createThemeConfig } from './themeConfig'

type SiteLocales = NonNullable<UserConfig['locales']>

/**
 * Registra os idiomas no VitePress. O idioma principal usa a chave "root"
 * (servido na raiz do site); os demais recebem o prefixo da sua rota.
 */
export function createLocales(): SiteLocales {
  const locales: SiteLocales = {}

  for (const entry of localeEntries) {
    locales[entry.vitepressKey] = {
      label: entry.content.ui.localeLabel,
      lang: entry.content.lang,
      link: entry.routeBase === '' ? '/' : `${entry.routeBase}/`,
      title: entry.content.profile.displayName,
      description: entry.content.description,
      themeConfig: createThemeConfig(entry)
    }
  }

  return locales
}
