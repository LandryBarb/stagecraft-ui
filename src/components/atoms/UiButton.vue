<script setup lang="ts">
/**
 * Stagecraft UI — UiButton
 * Token-driven, AAA-ready, accessible button component.
 */

import { computed, withDefaults, defineProps } from 'vue'

type Variant = 'primary' | 'secondary' | 'danger' | 'ghost'
type Size = 'small' | 'medium' | 'large'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    disabled?: boolean
    loading?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'medium',
    type: 'button',
    disabled: false,
    loading: false,
  }
)

const classes = computed(() => {
  return [
    'sc-btn',
    `sc-btn--${props.variant}`,
    `sc-btn--${props.size}`,
    props.disabled ? 'sc-btn--disabled' : '',
    props.loading ? 'sc-btn--loading' : '',
  ]
})
</script>

<template>
  <button
    :type="props.type"
    :class="classes"
    :disabled="props.disabled || props.loading"
    :aria-disabled="props.disabled || props.loading"
    :aria-busy="props.loading"
  >
    <span v-if="props.loading" class="sc-btn__spinner" aria-hidden="true"></span>
    <span class="sc-btn__content">
      <slot />
    </span>
  </button>
</template>

<style scoped>
/* --------------------------------------------------
   Base Button Style
-------------------------------------------------- */

.sc-btn {
  font-family: var(--sc-font-sans);
  font-weight: 600;
  text-transform: uppercase;

  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--sc-space-sm);

  /* Sizing */
  padding: var(--sc-space-sm) var(--sc-space-md);
  border-radius: var(--sc-radius-md);

  /* Borders */
  border: var(--sc-border-width) solid transparent;

  /* Transitions */
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    filter 0.2s ease;

  cursor: pointer;
  line-height: 1;
}

.sc-btn:hover:not(.sc-btn--disabled):not(.sc-btn--loading) {
  filter: brightness(90%);
}

/* Focus-visible — AAA requirement */
.sc-btn:focus-visible {
  outline: 3px solid var(--sc-color-ghost-white);
  outline-offset: 6px;
}

/* Disabled */
.sc-btn--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* --------------------------------------------------
   Variants (Token-driven)
-------------------------------------------------- */

.sc-btn--primary {
  background: var(--sc-color-spotlight);
  color: var(--sc-color-stage-black);
}

.sc-btn--secondary {
  background: var(--sc-color-scene-amber);
  color: var(--sc-color-stage-black);
}

.sc-btn--danger {
  background: var(--sc-color-caution-red);
  color: var(--sc-color-ghost-white);
}

.sc-btn--ghost {
  background: transparent;
  color: var(--sc-color-spotlight);
  border-color: var(--sc-color-spotlight);
}

/* --------------------------------------------------
   Sizes
-------------------------------------------------- */

.sc-btn--small {
  padding: var(--sc-space-xs) var(--sc-space-sm);
  font-size: var(--sc-text-sm);
}

.sc-btn--medium {
  padding: var(--sc-space-sm) var(--sc-space-md);
  font-size: var(--sc-text-md);
}

.sc-btn--large {
  padding: var(--sc-space-md) var(--sc-space-lg);
  font-size: var(--sc-text-lg);
}

/* --------------------------------------------------
   Loading Spinner
-------------------------------------------------- */

.sc-btn__spinner {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 2px solid var(--sc-color-ghost-white);
  border-top-color: transparent;
  animation: sc-btn-spin 0.6s linear infinite;
}

@keyframes sc-btn-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
