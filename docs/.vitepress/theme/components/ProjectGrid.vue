<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'

const props = defineProps<{
  /** Limita a quantidade de projetos (usado na página inicial). */
  limit?: number
}>()

const { content } = usePortfolio()

const visibleProjects = computed(() =>
  props.limit ? content.value.projects.slice(0, props.limit) : content.value.projects
)
</script>

<template>
  <div class="pf-project-grid">
    <a
      v-for="project in visibleProjects"
      :key="project.name"
      class="pf-project"
      :href="project.url"
      target="_blank"
      rel="noopener"
    >
      <header class="pf-project__header">
        <h3 class="pf-project__name">{{ project.name }}</h3>
        <span
          v-if="project.stars > 0"
          class="pf-project__stars"
          :aria-label="`${project.stars} ${content.ui.labels.stars}`"
        >
          ★ {{ project.stars }}
        </span>
      </header>
      <p class="pf-project__description">{{ project.description }}</p>
      <footer class="pf-project__footer">
        <span v-if="project.language" class="pf-tag">{{ project.language }}</span>
        <span v-for="topic in project.topics" :key="topic" class="pf-tag">{{ topic }}</span>
        <span class="pf-project__cta">{{ content.ui.labels.viewProject }} →</span>
      </footer>
    </a>
  </div>
</template>
