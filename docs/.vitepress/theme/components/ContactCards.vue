<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'

const { content } = usePortfolio()

const telHref = computed(
  () => `tel:${content.value.contact.phone.replace(/[^\d+]/g, '')}`
)
</script>

<template>
  <ul class="pf-contact-list">
    <li class="pf-card pf-contact">
      <span class="pf-contact__label">{{ content.ui.labels.email }}</span>
      <a class="pf-contact__value" :href="`mailto:${content.contact.email}`">
        {{ content.contact.email }}
      </a>
    </li>
    <li class="pf-card pf-contact">
      <span class="pf-contact__label">{{ content.ui.labels.phone }}</span>
      <a class="pf-contact__value" :href="telHref">{{ content.contact.phone }}</a>
    </li>
    <li class="pf-card pf-contact">
      <span class="pf-contact__label">{{ content.ui.labels.location }}</span>
      <span class="pf-contact__value">{{ content.contact.location }}</span>
    </li>
  </ul>

  <div class="pf-socials">
    <a
      v-for="social in content.contact.socials"
      :key="social.network"
      class="vp-button alt"
      :href="social.url"
      target="_blank"
      rel="noopener"
    >
      {{ social.label }}
    </a>
  </div>
</template>
