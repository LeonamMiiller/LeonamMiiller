import type { UserConfig } from 'vitepress'
import { localeEntries } from '../content/registry'
import { createLocales } from './locales'

/**
 * Fábrica da configuração do VitePress (ponto de composição do site).
 *
 * A configuração depende das abstrações da camada de conteúdo
 * (LocaleEntry / PortfolioContent), não de detalhes concretos de um
 * idioma — Dependência de Inversão de Controle (DIP).
 */
export function createSiteConfig(): UserConfig {
  const defaultContent = localeEntries[0].content

  return {
    // Repositório `LeonamMiiller/LeonamMiiller` publicado como GitHub Pages
    // de projeto: https://leonammiller.github.io/LeonamMiiller/
    base: '/LeonamMiiller/',
    title: defaultContent.profile.displayName,
    description: defaultContent.description,
    lastUpdated: true,
    cleanUrls: true,
    locales: createLocales(),
    head: [
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          href: defaultContent.profile.avatar
        }
      ],
      ['meta', { name: 'theme-color', content: '#2563eb' }]
    ]
  }
}
