<script setup lang="ts">
import { usePortfolio } from '../composables/usePortfolio'

const { content, linkTo } = usePortfolio()
</script>

<template>
  <header class="pf-hero">
    <img
      class="pf-hero__avatar"
      :src="content.profile.avatar"
      :alt="content.profile.displayName"
      width="112"
      height="112"
    />
    <div class="pf-hero__body">
      <p class="pf-hero__role">{{ content.profile.role }}</p>
      <h1 class="pf-hero__name">{{ content.profile.displayName }}</h1>
      <p class="pf-hero__tagline">{{ content.profile.tagline }}</p>
      <p class="pf-hero__location">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path
            d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          />
        </svg>
        {{ content.contact.location }}
      </p>
      <div class="pf-hero__actions">
        <a class="vp-button brand" :href="linkTo('/curriculum')">
          {{ content.ui.hero.ctaResume }}
        </a>
        <a class="vp-button alt" :href="linkTo('/projects')">
          {{ content.ui.hero.ctaProjects }}
        </a>
        <a class="vp-button alt" :href="linkTo('/contact')">
          {{ content.ui.hero.ctaContact }}
        </a>
      </div>
    </div>
  </header>
</template>
