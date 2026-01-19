<template>
  <div class="container" :class="variant">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'narrow' | 'wide' | 'full'
}

withDefaults(defineProps<Props>(), {
  variant: 'default'
})
</script>

<style scoped>
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.container.narrow {
  max-width: 900px;
}

.container.wide {
  max-width: 1400px;
}

.container.full {
  max-width: 100%;
  padding: 0 var(--spacing-md);
}
</style>
