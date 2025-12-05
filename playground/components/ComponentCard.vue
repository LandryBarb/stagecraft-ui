<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true }
})
const emits = defineEmits(['click'])
</script>

<template>
  <div
    class="bg-rig border rounded-lg transition shadow-md"
    @click="emits('click')"
  >
    <!-- Preview area: currently a gradient placeholder -->
    <div class="aspect-video bg-cable rounded-md">
      <slot name="preview">
        <div class="w-full h-full bg-gradient-to-br from-rig-gray to-cable-steel rounded"></div>
      </slot>
      <div class="absolute inset-0 bg-gradient-to-t from-spotlight-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>

    <!-- Text content -->
    <div class="p-md">
      <h3 class="h3 text-white">{{ title }}</h3>
      <p class="text-muted small">{{ description }}</p>
      <button class="text-spotlight small transition m-sm">
        View Details
      </button>
    </div>
  </div>
</template>
