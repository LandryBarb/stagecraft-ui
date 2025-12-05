<script setup lang="ts">
import { ref } from 'vue'
import ComponentLibrarySidebar from './ComponentLibrarySidebar.vue'
import ComponentGrid from './ComponentGrid.vue'

type ComponentItem = {
  id: string
  title: string
  description: string
}

/* State: which component is selected and whether sidebar is collapsed */
const activeComponent = ref('general')
const collapsed = ref(false)

/* List of components (adapted from your React example) */
const components: ComponentItem[] = [
  { id: 'accordion', title: 'Accordion', description: 'A vertically stacked set of interactive headings.' },
  { id: 'button', title: 'Button', description: 'Interactive button component with multiple variants.' },
  { id: 'tabs', title: 'Tabs', description: 'Organize and allow navigation between groups of content.' },
  { id: 'tooltip', title: 'Tooltip', description: 'A popup that displays information related to an element.' },
  { id: 'dialog', title: 'Dialog', description: 'A window overlaid on the primary content.' },
  { id: 'modal', title: 'Modal', description: 'A dialog that appears on top of the app\'s content.' },
  { id: 'pagination', title: 'Pagination', description: 'Navigate through pages of content.' },
  { id: 'breadcrumb', title: 'Breadcrumb', description: 'Display the current page location within a hierarchy.' },
  { id: 'stepper', title: 'Stepper', description: 'Display progress through numbered steps.' },
  { id: 'radio-group', title: 'Radio Group', description: 'Allow users to select a single option from a set.' },
  { id: 'checkbox-group', title: 'Checkbox Group', description: 'Allow users to select multiple options.' },
  { id: 'combobox', title: 'Combobox', description: 'A searchable dropdown with ARIA support.' },
  { id: 'table', title: 'Table', description: 'Display data in rows and columns.' },
  { id: 'carousel', title: 'Carousel', description: 'Display a collection of items in a scrollable view.' },
  { id: 'toast', title: 'Toast', description: 'Brief notification messages.' },
  { id: 'streaming-hero', title: 'Hero', description: 'Large promotional banner for featured content.' },
  { id: 'streaming-cards', title: 'Cards', description: 'Content cards for movies and shows.' },
  { id: 'streaming-rails', title: 'Rails', description: 'Horizontal scrolling content rows.' },
  { id: 'streaming-previews', title: 'Previews', description: 'Hover preview cards with auto‑play.' },
]

/* When a user selects a component from the sidebar or grid */
function selectComponent(id: string) {
  activeComponent.value = id
}
</script>

<template>
  <div class="flex min-h-screen bg-stage">
    <!-- Sidebar -->
    <ComponentLibrarySidebar
      :activeComponent="activeComponent"
      :collapsed="collapsed"
      @selectComponent="selectComponent"
      @toggleCollapse="() => (collapsed = !collapsed)"
    />

    <!-- Main content area -->
    <main class="main-content flex-1">
      <div class="container p-lg">
        <!-- Grid view: shows when 'general' is selected -->
        <div v-if="activeComponent === 'general'">
          <h1 class="h1 text-white m-sm">Components</h1>
          <p class="text-muted m-md">Explore our collection of reusable and accessible UI components.</p>
          <ComponentGrid
            :components="components"
            @selectComponent="selectComponent"
          />
        </div>

        <!-- Detail view placeholder -->
        <div v-else class="p-xl flex-center">
          <div >
            <h2 class="h2 text-white">Component Details</h2>
            <p class="text-muted">
              Details for <strong>{{ activeComponent }}</strong> coming soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
