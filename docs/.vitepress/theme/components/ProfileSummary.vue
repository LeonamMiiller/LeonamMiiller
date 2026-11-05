<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'

const { content } = usePortfolio()
</script>

<template>
  <div class="pf-summary">
    <p v-for="(paragraph, index) in content.profile.summary" :key="index">
      {{ paragraph }}
    </p>
  </div>
</template>
