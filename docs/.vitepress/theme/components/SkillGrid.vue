<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolio } from '../composables/usePortfolio'
import type { Skill, SkillCategoryId } from '../../../content/types'

const props = defineProps<{
  /** Limita a quantidade de habilidades (usado na página inicial). */
  limit?: number
}>()

const { content, linkTo } = usePortfolio()

const visibleSkills = computed<Skill[]>(() =>
  props.limit ? content.value.skills.slice(0, props.limit) : content.value.skills
)

const groupedSkills = computed<
  Array<{ id: SkillCategoryId; label: string; items: Skill[] }>
>(() => {
  const groups = new Map<SkillCategoryId, Skill[]>()

  for (const skill of content.value.skills) {
    const bucket = groups.get(skill.category)
    if (bucket) bucket.push(skill)
    else groups.set(skill.category, [skill])
  }

  return [...groups.entries()].map(([id, items]) => ({
    id,
    label: content.value.ui.categories[id],
    items
  }))
})
</script>

<template>
  <div v-if="limit" class="pf-skill-section">
    <div class="pf-skill-grid">
      <figure v-for="skill in visibleSkills" :key="skill.name" class="pf-skill">
        <img :src="skill.icon" :alt="skill.name" width="48" height="48" loading="lazy" />
        <figcaption>{{ skill.name }}</figcaption>
      </figure>
    </div>
    <p class="pf-more">
      <a :href="linkTo('/curriculum')">{{ content.ui.labels.viewAll }} →</a>
    </p>
  </div>

  <div v-else class="pf-skill-groups">
    <section v-for="group in groupedSkills" :key="group.id" class="pf-skill-group">
      <h3>{{ group.label }}</h3>
      <div class="pf-skill-grid">
        <figure v-for="skill in group.items" :key="skill.name" class="pf-skill">
          <img :src="skill.icon" :alt="skill.name" width="48" height="48" loading="lazy" />
          <figcaption>{{ skill.name }}</figcaption>
        </figure>
      </div>
    </section>
  </div>
</template>
