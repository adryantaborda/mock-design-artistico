<template>
  <div class="card" :class="{ 'card-hover': hover, 'card-clickable': clickable }" @click="handleClick">
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hover?: boolean
  clickable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hover: true,
  clickable: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<style scoped>
.card {
  background-color: var(--color-bg-primary);
  border: var(--border-width) solid var(--color-accent-1);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-1);
  opacity: 0;
  transition: opacity var(--transition-base);
  z-index: -1;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent-1-hover);
}

.card-hover:hover::before {
  opacity: 0.05;
}

.card-clickable {
  cursor: pointer;
}

.card-clickable:active {
  transform: translateY(-2px);
}
</style>
