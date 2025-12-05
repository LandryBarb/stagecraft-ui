# Stagecraft UI — Copilot Instructions

## Project Overview
**Stagecraft UI** is a Vue 3 component library focused on accessibility (WCAG 2.2 AAA) and atomic design patterns. Every component must be production-ready with full TypeScript support, ARIA compliance, and comprehensive testing.

## Architecture & Patterns

### Atomic Design Hierarchy
- **Atoms** (`src/components/atoms/`): Independent, unstyled-ready components (UiButton, UiIcon). Zero inter-component dependencies.
- **Molecules** (`src/components/molecules/`): Composed atoms with coordinated behavior (UiAccordian, UiTabs).
- **Organisms** (`src/components/organisms/`): Complex, domain-specific components (UiCombobox, UiDialog).

**Key Rule**: Atoms never import other components; molecules can import atoms; organisms import both.

### Component Structure Pattern
Every component follows this structure (see `src/components/atoms/UiButton.vue`):
```vue
<script setup lang="ts">
// Use `withDefaults` for props with strong typing
// Define union types for variants (e.g., type Variant = 'primary' | 'secondary')
// Use `computed()` for derived state like className lists
</script>
<template>
  <!-- Always include aria-* attributes for accessibility -->
  <!-- Use CSS class naming: sc-[component]--[variant] pattern -->
</template>
<style scoped>
  /* Use CSS variables from tokens.css, never hardcoded colors */
</style>
```

### Design Tokens System
- **Location**: `src/styles/tokens.ts` (TypeScript) and `src/styles/tokens.css` (CSS variables)
- **Pattern**: All colors, spacing, typography use `var(--sc-*)` naming convention
- **Example**: `colors.spotlight` → `var(--sc-color-spotlight)`, `spacing.md` → `var(--sc-space-md)`
- **Never** hardcode colors or spacing—always reference tokens

### Export Strategy
- Atomic exports live in `src/components/[atoms|molecules|organisms]/index.ts`
- Roll up to `src/components/index.ts`
- Final export in `src/index.ts` for library distribution

## Development Workflows

### Build & Preview
```bash
npm run build      # TypeScript compilation + Vite library build
npm run preview    # Preview compiled library locally
npm run dev        # Vite dev server for playground/
```

### Testing
```bash
npm run test       # Vitest in watch mode
npm run test:ui    # Visual test dashboard
```
**Setup**: Tests use `@testing-library/vue` with jsdom environment (see `vitest.config.ts`).
**Accessibility testing**: Infrastructure in place (vitest-axe, axe-core) but not yet activated—uncomment setup in `tests/setup.ts` when ready.

### Linting
```bash
npm run lint       # ESLint with Prettier integration
```

## Testing Conventions

### Component Tests
- **Location**: `tests/components/` mirrors `src/components/`
- **Pattern** (from `UiButton.spec.ts`):
  ```typescript
  import { render } from '@testing-library/vue'
  import UiButton from '@/components/atoms/UiButton.vue'
  
  test('renders button', () => {
    const { getByRole } = render(UiButton, { props: { label: 'Click' } })
    expect(getByRole('button')).toBeTruthy()
  })
  ```
- **Accessibility tests**: Will use `vitest-axe` when enabled
- **Naming**: `[ComponentName].spec.ts`

## Accessibility Requirements

### ARIA Patterns
Every interactive component must have:
- Correct `role` attributes (e.g., `role="button"` or semantic `<button>` tag)
- `aria-label` or semantic text for screen readers
- `aria-disabled`, `aria-busy`, `aria-expanded`, etc. matching component state
- Keyboard navigation support (Tab, Enter, Escape, Arrow keys as appropriate)

**Example** (UiButton):
```vue
<button :disabled="disabled" :aria-disabled="disabled" :aria-busy="loading">
  <span v-if="loading" class="sc-btn__spinner" aria-hidden="true"></span>
  <slot />
</button>
```

### Composable Helpers
- `useFocusTrap.ts`: Modal/dialog focus management (not yet implemented)
- `useArialListNavigation.ts`: Arrow-key navigation for lists
- `useScrollLock.ts`: Prevent background scroll in modals

## Key Files & Boundaries

| File | Purpose |
|------|---------|
| `src/index.ts` | Library entry point—re-export all public components |
| `src/components/{atoms\|molecules\|organisms}/index.ts` | Tier-level exports |
| `src/styles/tokens.{ts\|css}` | Single source of truth for design system |
| `vite.config.ts` | Library mode build (not app mode) |
| `vitest.config.ts` | jsdom environment + setup files |
| `playground/App.vue` | Development sandbox for testing components |

## Common Tasks

### Adding a New Atom Component
1. Create `src/components/atoms/UiNewComponent.vue` with props, ARIA attributes, and token-based styling
2. Add export to `src/components/atoms/index.ts`
3. Create test file `tests/components/UiNewComponent.spec.ts`
4. Document any keyboard behaviors in component comments

### Adding a Molecule
1. Import required atoms at the top of the `.vue` file
2. Coordinate their behavior via props/emits
3. Ensure each atom remains independently accessible
4. Document composition pattern in component header comment

### Modifying Styles
1. Update token values in `src/styles/tokens.css` (CSS vars) AND `src/styles/tokens.ts` (TypeScript mirror)
2. Never hardcode values—always use token references
3. Component scoped styles use token names: `color: var(--sc-color-spotlight)`

## Non-Patterns (Anti-Patterns)
- **No global state** beyond design tokens (use props/emits for component communication)
- **No component-to-component imports** across tiers (atoms ↔ molecules OK, but atoms never import molecules)
- **No hardcoded styling values** (spacing, colors, typography must use tokens)
- **No `aria-hidden` without purpose** (only on decorative elements like spinners)

## Future Considerations
- Accessibility test suite activation (vitest-axe setup exists but not enabled)
- Composable implementations (focus trap, scroll lock, list navigation are stubs)
- Additional atom components (Inputs, Toggles, Badges)
- Storybook integration for documentation
