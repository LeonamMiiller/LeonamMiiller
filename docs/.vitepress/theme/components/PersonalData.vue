<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'

const { content } = usePortfolio()

const telHref = computed(
  () => `tel:${content.value.contact.phone.replace(/[^\d+]/g, '')}`
)
</script>

<template>
  <dl class="pf-data">
    <div class="pf-data__row">
      <dt>{{ content.ui.labels.phone }}</dt>
      <dd><a :href="telHref">{{ content.contact.phone }}</a></dd>
    </div>
    <div class="pf-data__row">
      <dt>{{ content.ui.labels.email }}</dt>
      <dd><a :href="`mailto:${content.contact.email}`">{{ content.contact.email }}</a></dd>
    </div>
    <div class="pf-data__row">
      <dt>{{ content.ui.labels.location }}</dt>
      <dd>{{ content.contact.location }}</dd>
    </div>
    <div class="pf-data__row">
      <dt>{{ content.ui.labels.nationality }}</dt>
      <dd>{{ content.personal.nationality }}</dd>
    </div>
    <div class="pf-data__row">
      <dt>{{ content.ui.labels.birthDate }}</dt>
      <dd>{{ content.personal.birthDate }}</dd>
    </div>
    <div class="pf-data__row">
      <dt>{{ content.ui.labels.maritalStatus }}</dt>
      <dd>{{ content.personal.maritalStatus }}</dd>
    </div>
  </dl>
</template>
