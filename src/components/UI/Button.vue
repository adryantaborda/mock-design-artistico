<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : undefined"
    :type="tag === 'button' ? type : undefined"
    :class="['btn', variant, size, { 'btn-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  tag?: 'button' | 'a'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  tag: 'button',
  type: 'button',
  disabled: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding: 0.875rem 2rem;
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  border: var(--border-width) solid transparent;
  border-radius: var(--border-radius-lg);
  background-color: transparent;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.btn:disabled,
.btn.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Tamanhos */
.btn.sm {
  padding: 0.625rem 1.5rem;
  font-size: var(--font-size-small);
}

.btn.md {
  padding: 0.875rem 2rem;
  font-size: var(--font-size-body);
}

.btn.lg {
  padding: 1.125rem 2.5rem;
  font-size: 1.125rem;
}

/* Variante Primary */
.btn.primary {
  background: var(--gradient-1);
  color: var(--color-text-primary);
  border-color: transparent;
  box-shadow: var(--shadow-sm);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn.primary:active {
  transform: translateY(0);
}

/* Variante Secondary */
.btn.secondary {
  background: var(--gradient-2);
  color: var(--color-text-primary);
  border-color: transparent;
  box-shadow: var(--shadow-sm);
}

.btn.secondary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Variante Outline */
.btn.outline {
  background-color: transparent;
  color: var(--color-accent-1);
  border-color: var(--color-accent-1);
}

.btn.outline:hover {
  background-color: var(--color-accent-1);
  color: var(--color-bg-primary);
}

/* Variante Text */
.btn.text {
  background-color: transparent;
  color: var(--color-accent-1);
  border-color: transparent;
  padding: 0.5rem 1rem;
}

.btn.text:hover {
  background-color: var(--color-bg-tertiary);
  color: var(--color-accent-1-hover);
}
</style>
