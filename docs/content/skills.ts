import type { SkillCategoryId } from './types'

/**
 * Implementação única de skills (compartilhada por todos os idiomas).
 *
 * Os nomes exibidos NÃO estão aqui: cada `id` é uma chave de tradução
 * resolvida em `localization/loc_*.json` (campo `skills`).
 * Ícone e categoria são dados neutros em idioma.
 */
export interface SkillDefinition {
  /** Chave de tradução usada em `loc_*.json → skills[id]`. */
  id: string
  /** URL do ícone (ícones usados no README). */
  icon: string
  category: SkillCategoryId
}

export const skills: readonly SkillDefinition[] = [
  { id: 'english', icon: 'https://img.icons8.com/color/64/talk-male.png', category: 'spoken' },
  { id: 'delphi', icon: 'https://img.icons8.com/color/64/delphi-ide.png', category: 'language' },
  { id: 'postgresql', icon: 'https://img.icons8.com/color/64/postgreesql.png', category: 'database' },
  { id: 'flutter', icon: 'https://img.icons8.com/color/64/flutter.png', category: 'framework' },
  { id: 'dart', icon: 'https://img.icons8.com/color/64/dart.png', category: 'language' },
  { id: 'rest-api', icon: 'https://img.icons8.com/color/64/api-settings.png', category: 'web' },
  { id: 'mysql', icon: 'https://img.icons8.com/color/64/mysql.png', category: 'database' },
  { id: 'java', icon: 'https://img.icons8.com/color/64/java-coffee-cup-logo.png', category: 'language' },
  { id: 'angular', icon: 'https://img.icons8.com/color/64/angularjs.png', category: 'framework' },
  { id: 'linux', icon: 'https://img.icons8.com/color/64/linux-client.png', category: 'tool' },
  { id: 'windows', icon: 'https://img.icons8.com/color/64/windows-client.png', category: 'tool' },
  { id: 'docker', icon: 'https://img.icons8.com/color/64/docker.png', category: 'tool' },
  { id: 'csharp', icon: 'https://img.icons8.com/color/64/c-sharp-logo.png', category: 'language' },
  { id: 'mongodb', icon: 'https://img.icons8.com/color/64/mongodb.png', category: 'database' },
  { id: 'visual-foxpro', icon: 'https://img.icons8.com/color/64/fox.png', category: 'language' },
  { id: 'azure', icon: 'https://img.icons8.com/color/64/azure-1.png', category: 'cloud' },
  { id: 'aws', icon: 'https://img.icons8.com/color/64/amazon-web-services.png', category: 'cloud' },
  { id: 'jira', icon: 'https://img.icons8.com/color/64/jira.png', category: 'tool' }
]

export default skills
