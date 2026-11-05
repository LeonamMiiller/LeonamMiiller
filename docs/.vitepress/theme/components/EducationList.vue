<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'

const { content } = usePortfolio()
</script>

<template>
  <div class="pf-education">
    <article v-for="item in content.education" :key="item.title" class="pf-card">
      <header class="pf-card__header">
        <h3 class="pf-card__title">{{ item.title }}</h3>
        <span class="pf-badge">{{ item.status }}</span>
      </header>
      <p class="pf-card__meta">
        <strong>{{ item.institution }}</strong>
        <span aria-hidden="true"> · </span>
        <span>{{ item.location }}</span>
      </p>
      <p class="pf-card__text">{{ item.description }}</p>
    </article>
  </div>
</template>
