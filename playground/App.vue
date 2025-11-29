<template>
  <div style="padding: 2rem; color: white; font-family: var(--sc-font-sans);">
    <h1>Stagecraft UI Playground</h1>

    <section style="margin-top: 2rem;">
      <h2>Buttons</h2>

      <UiButton variant="primary">Primary</UiButton>
      <UiButton variant="secondary">Secondary</UiButton>
      <UiButton variant="danger">Danger</UiButton>
      <UiButton variant="ghost">Ghost</UiButton>

      <br /><br />

      <UiButton size="small">Small</UiButton>
      <UiButton size="medium">Medium</UiButton>
      <UiButton size="large">Large</UiButton>

      <br /><br />

      <UiButton :loading="true">Loading</UiButton>
      <UiButton :disabled="true">Disabled</UiButton>
    </section>
  </div>
</template>
