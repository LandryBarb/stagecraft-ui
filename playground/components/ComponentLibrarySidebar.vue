<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  activeComponent: { type: String, required: true },
  collapsed: { type: Boolean, default: false }
})
const emits = defineEmits(['selectComponent', 'toggleCollapse'])

/* List of components with categories */
const components = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'button', label: 'Button' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'tooltip', label: 'Tooltip' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'modal', label: 'Modal' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'breadcrumb', label: 'Breadcrumb' },
  { id: 'stepper', label: 'Stepper' },
  { id: 'radio-group', label: 'Radio Group' },
  { id: 'checkbox-group', label: 'Checkbox Group' },
  { id: 'combobox', label: 'Combobox' },
  { id: 'table', label: 'Table' },
  { id: 'carousel', label: 'Carousel' },
  { id: 'toast', label: 'Toast' },
  { id: 'streaming-hero', label: 'Hero' },
  { id: 'streaming-cards', label: 'Cards' },
  { id: 'streaming-rails', label: 'Rails' },
  { id: 'streaming-previews', label: 'Previews' },
]

function handleSelect(id: string) {
  emits('selectComponent', id)
}
</script>

<template>
  <aside
    :class="[
      'sc-sidebar',
      collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'
    ]"
  >

    <!-- Header -->
    <div class="p-md border">
      <div class="flex items-center m-sm">
        <div class="rounded-md bg-spotlight flex-center" style="width: 40px; height: 40px;">
          <span>🎬</span>
        </div>
        <div v-if="!collapsed" class="m-sm">
          <h2 class="h3 text-white">Component Library</h2>
          <p class="text-muted small">Design System</p>
        </div>
      </div>

      <div v-if="!collapsed">
        <input
          class="p-sm bg-cable rounded-md text-white"
          placeholder="Search components..."
        />
      </div>
    </div>

    <!-- Navigation List -->
    <nav class="p-md flex-col">
      <!-- General -->
      <button
        class="p-sm rounded-md text-white transition"
        :class="props.activeComponent === 'general' ? 'bg-spotlight' : 'bg-cable'"
        @click="emits('selectComponent', 'general')"
      >
        General
      </button>

      <div class="m-sm"></div>

      <!-- Component Links -->
      <button
        v-for="c in components"
        :key="c.id"
        class="text-muted p-sm rounded-md transition"
        :class="props.activeComponent === c.id ? 'bg-spotlight text-white' : 'bg-cable text-muted'"
        @click="emits('selectComponent', c.id)"
      >
        {{ c.label }}
      </button>
    </nav>

    <!-- Collapse Button -->
    <button class="p-sm bg-cable text-muted rounded-md transition" @click="emits('toggleCollapse')">
      {{ collapsed ? '→' : '←' }}
    </button>

  </aside>
</template>


<style scoped>
.sc-sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: var(--sc-color-rig-gray);
  border-right: 1px solid var(--sc-color-cable-steel);
  box-shadow: var(--sc-shadow-md);
  width: 16rem;
  min-width: 16rem;
  transition:
    width 0.25s ease,
    min-width 0.25s ease,
    transform 0.25s ease;
  z-index: 20;
}

.sc-sidebar--collapsed {
  width: 4.5rem;
  min-width: 4.5rem;
}

/* Toggle pill */
.sc-sidebar__toggle {
  position: absolute;
  top: 4.5rem;
  right: -0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  border: 1px solid var(--sc-color-cable-steel);
  background: var(--sc-color-rig-gray);
  color: var(--sc-color-ghost-white);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--sc-shadow-sm);
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.sc-sidebar__toggle:hover {
  background: var(--sc-color-spotlight);
  border-color: var(--sc-color-spotlight);
  color: var(--sc-color-stage-black);
}

.sc-sidebar__toggle-icon span {
  display: inline-block;
  transition: transform 0.2s ease;
}

.sc-sidebar__toggle-icon span.is-collapsed {
  transform: rotate(180deg);
}

/* Header */
.sc-sidebar__header {
  padding: var(--sc-space-md);
  border-bottom: 1px solid var(--sc-color-cable-steel);
  background: linear-gradient(
    135deg,
    rgba(66, 165, 245, 0.14),
    rgba(11, 15, 22, 0.95)
  );
}

.sc-sidebar__brand {
  display: flex;
  align-items: center;
  gap: var(--sc-space-sm);
  margin-bottom: var(--sc-space-sm);
}

.sc-sidebar__logo {
  width: 40px;
  height: 40px;
  border-radius: var(--sc-radius-md);
  background: var(--sc-color-spotlight);
  color: var(--sc-color-stage-black);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--sc-shadow-sm);
}

.sc-sidebar__brand-text {
  overflow: hidden;
}

.sc-sidebar__title {
  font-size: var(--sc-text-md);
  font-weight: 600;
  color: var(--sc-color-ghost-white);
}

.sc-sidebar__subtitle {
  font-size: var(--sc-text-xs);
  color: rgba(245, 245, 245, 0.7);
}

/* Search */
.sc-sidebar__search {
  margin-top: var(--sc-space-sm);
  position: relative;
}

.sc-sidebar__search-icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  color: rgba(245, 245, 245, 0.6);
}

.sc-sidebar__search-input {
  width: 100%;
  padding: 0.45rem 0.75rem 0.45rem 2rem;
  border-radius: var(--sc-radius-md);
  border: 1px solid var(--sc-color-cable-steel);
  background: rgba(12, 15, 22, 0.85);
  color: var(--sc-color-ghost-white);
  font-size: var(--sc-text-sm);
}

.sc-sidebar__search-input::placeholder {
  color: rgba(245, 245, 245, 0.45);
}

.sc-sidebar__search-input:focus-visible {
  outline: 2px solid var(--sc-color-spotlight);
  outline-offset: 2px;
}

/* Nav */
.sc-sidebar__nav {
  flex: 1;
  padding: var(--sc-space-sm) var(--sc-space-xs);
  overflow-y: auto;
}

.sc-sidebar__section-label {
  margin: var(--sc-space-sm) var(--sc-space-sm) var(--sc-space-xs);
  font-size: var(--sc-text-xs);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(245, 245, 245, 0.55);
}

/* Item */
.sc-sidebar__item {
  position: relative;
  width: 100%;
  padding: 0.45rem 0.9rem;
  margin-bottom: 0.1rem;
  border: none;
  background: transparent;
  color: rgba(245, 245, 245, 0.7);
  font-size: var(--sc-text-sm);
  text-align: left;
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.1s ease;
}

.sc-sidebar__item:hover {
  background: rgba(44, 49, 61, 0.9);
  color: var(--sc-color-ghost-white);
}

.sc-sidebar__item--active {
  background: rgba(66, 165, 245, 0.1);
  color: var(--sc-color-ghost-white);
}

.sc-sidebar__item--active::before {
  content: '';
  position: absolute;
  left: 0.35rem;
  top: 0.35rem;
  bottom: 0.35rem;
  width: 3px;
  border-radius: 999px;
  background: var(--sc-color-spotlight);
}

.sc-sidebar__item-label {
  margin-left: 0.4rem;
}

/* Collapsed dot */
.sc-sidebar__dot {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(245, 245, 245, 0.7);
}

/* Footer */
.sc-sidebar__footer {
  padding: var(--sc-space-sm);
  border-top: 1px solid var(--sc-color-cable-steel);
  display: flex;
  gap: var(--sc-space-xs);
}

.sc-sidebar__footer-btn {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.35rem 0.5rem;
  font-size: var(--sc-text-xs);
  border-radius: var(--sc-radius-md);
  border: 1px solid transparent;
  background: rgba(12, 15, 22, 0.85);
  color: rgba(245, 245, 245, 0.7);
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.sc-sidebar__footer-btn:hover {
  background: rgba(44, 49, 61, 0.9);
  border-color: var(--sc-color-cable-steel);
  color: var(--sc-color-ghost-white);
}
</style>