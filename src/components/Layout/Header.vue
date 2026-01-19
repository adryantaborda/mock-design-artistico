<template>
  <header class="header" :class="{ 'header-scrolled': scrolled }">
    <Container>
      <nav class="nav">
        <div class="logo">
          <a href="#inicio">Portfolio Artístico</a>
        </div>
        <ul class="nav-menu" :class="{ 'nav-menu-open': menuOpen }">
          <li><a href="#inicio" @click="closeMenu">Início</a></li>
          <li><a href="#sobre" @click="closeMenu">Sobre</a></li>
          <li><a href="#portfolio" @click="closeMenu">Portfolio</a></li>
          <li><a href="#contato" @click="closeMenu">Contato</a></li>
        </ul>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </Container>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Container from '../UI/Container.vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-sticky);
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);
}

.header-scrolled {
  box-shadow: var(--shadow-sm);
  border-bottom-color: var(--color-accent-1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  gap: var(--spacing-lg);
}

.logo a {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  letter-spacing: var(--letter-spacing-wide);
  transition: color var(--transition-base);
}

.logo a:hover {
  color: var(--color-accent-1);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
  align-items: center;
}

.nav-menu a {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  padding: var(--spacing-xs) 0;
  position: relative;
  transition: color var(--transition-base);
}

.nav-menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-1);
  transition: width var(--transition-base);
}

.nav-menu a:hover {
  color: var(--color-accent-1);
}

.nav-menu a:hover::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
}

.menu-toggle span {
  width: 25px;
  height: 2px;
  background-color: var(--color-text-primary);
  border-radius: var(--border-radius-full);
  transition: all var(--transition-base);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-bg-primary);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    gap: var(--spacing-md);
    align-items: flex-start;
  }

  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu a {
    width: 100%;
    padding: var(--spacing-sm) 0;
  }
}
</style>
