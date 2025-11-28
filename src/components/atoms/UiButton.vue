<script setup lang="ts">
defineProps<{
  label?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
}>()
</script>

<template>
  <button
    class="sc-btn"
    :class="`sc-btn--${variant ?? 'primary'}`"
    :disabled="disabled"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.sc-btn {
  padding: var(--sc-space-sm) var(--sc-space-md);
  border-radius: var(--sc-radius-md);
  font-family: var(--sc-font-sans);
  background: var(--sc-color-rig-gray);
  color: var(--sc-color-ghost-white);
  border: 1px solid var(--sc-color-cable-steel);
}

/* Variants */
.sc-btn--primary {
  background: var(--sc-color-spotlight);
  color: var(--sc-color-stage-black);
}

.sc-btn--secondary {
  background: var(--sc-color-cable-steel);
}

.sc-btn--ghost {
  background: transparent;
  border-color: var(--sc-color-cable-steel);
}
</style>
