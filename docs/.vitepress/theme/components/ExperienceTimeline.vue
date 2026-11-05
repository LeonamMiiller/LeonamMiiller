<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'

const { content } = usePortfolio()
</script>

<template>
  <ol class="pf-timeline">
    <li v-for="job in content.experience" :key="`${job.company}-${job.period}`" class="pf-timeline__item">
      <p class="pf-timeline__period">{{ job.period }}</p>
      <h3 class="pf-timeline__role">{{ job.role }}</h3>
      <p class="pf-timeline__company">
        <strong>{{ job.company }}</strong>
        <span aria-hidden="true"> · </span>
        <span>{{ job.location }}</span>
      </p>
      <ul class="pf-timeline__highlights">
        <li v-for="(highlight, index) in job.highlights" :key="index">{{ highlight }}</li>
      </ul>
    </li>
  </ol>
</template>
