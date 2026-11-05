import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

import Hero from './components/Hero.vue'
import ProfileSummary from './components/ProfileSummary.vue'
import SkillGrid from './components/SkillGrid.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import EducationList from './components/EducationList.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import PersonalData from './components/PersonalData.vue'
import ReferenceList from './components/ReferenceList.vue'
import ContactCards from './components/ContactCards.vue'

import './styles/tokens.css'
import './styles/components.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Componentes disponíveis em todos os idiomas via páginas Markdown.
    app.component('Hero', Hero)
    app.component('ProfileSummary', ProfileSummary)
    app.component('SkillGrid', SkillGrid)
    app.component('ExperienceTimeline', ExperienceTimeline)
    app.component('EducationList', EducationList)
    app.component('ProjectGrid', ProjectGrid)
    app.component('PersonalData', PersonalData)
    app.component('ReferenceList', ReferenceList)
    app.component('ContactCards', ContactCards)
  }
} satisfies Theme
