<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'

const { content } = usePortfolio()
</script>

<template>
  <div class="pf-reference-grid">
    <article v-for="reference in content.references" :key="reference.name" class="pf-card">
      <h3 class="pf-card__title">{{ reference.name }}</h3>
      <p class="pf-card__meta">{{ reference.role }}</p>
      <p class="pf-reference__links">
        <a v-if="reference.github" :href="reference.github" target="_blank" rel="noopener">
          GitHub
        </a>
        <a v-if="reference.linkedin" :href="reference.linkedin" target="_blank" rel="noopener">
          LinkedIn
        </a>
      </p>
    </article>
  </div>
</template>
