<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ComponentCard from './ComponentCard.vue'

const props = defineProps({
  components: {
    type: Array as () => { id: string; title: string; description: string }[],
    required: true
  }
})
const emits = defineEmits(['selectComponent'])

function handleClick(id: string) {
  emits('selectComponent', id)
}
</script>

<template>
  <div class="grid grid-3 grid-md-2 grid-sm-1">
    <ComponentCard
      v-for="c in components"
      :key="c.id"
      :title="c.title"
      :description="c.description"
      @click="handleClick(c.id)"
    >
      <!-- You could provide per‑component previews here using a slot, if desired -->
    </ComponentCard>
  </div>
</template>
