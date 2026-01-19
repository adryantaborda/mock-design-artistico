<template>
  <header class="header" :class="{ 'header-scrolled': scrolled }">
    <Container>
      <nav class="nav">
        <div class="logo-section">
          <a href="#" @click.prevent="handleNavClick($event, 'inicio')" class="logo-link">
            <div class="logo-icon">
              <div class="icon-circle"></div>
              <div class="icon-stroke"></div>
            </div>
            <div class="logo-text">
              <span class="logo-name">Adryan Taborda</span>
              <span class="logo-subtitle">Artista Visual</span>
            </div>
          </a>
        </div>

        <ul class="nav-menu" :class="{ 'nav-menu-open': menuOpen }">
          <li>
            <a href="#" @click="handleNavClick($event, 'inicio')" class="nav-link">Início</a>
          </li>
          <li>
            <a href="#" @click="handleNavClick($event, 'sobre')" class="nav-link">Sobre</a>
          </li>
          <li>
            <a href="#" @click="handleNavClick($event, 'processo')" class="nav-link">Processo</a>
          </li>
          <li>
            <a href="#" @click="handleNavClick($event, 'portfolio')" class="nav-link">Portfolio</a>
          </li>
          <li>
            <a href="#" @click="handleNavClick($event, 'inspiracao')" class="nav-link">Inspiração</a>
          </li>
          <li>
            <a href="#" @click="handleNavClick($event, 'exposicoes')" class="nav-link">Exposições</a>
          </li>
          <li>
            <a href="#" @click="handleNavClick($event, 'contato')" class="nav-link nav-link-cta">Contato</a>
          </li>
        </ul>

        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu" :class="{ 'menu-open': menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </Container>
    <div class="header-decoration" v-if="scrolled"></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Container from '../UI/Container.vue'
import { useSmoothScroll } from '../../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()

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

const handleNavClick = (e: Event, sectionId: string) => {
  e.preventDefault()
  scrollToSection(sectionId)
  closeMenu()
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
  background-color: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: all var(--transition-base);
}

.header-scrolled {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  border-bottom-color: rgba(245, 197, 184, 0.2);
}

.header-decoration {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-accent-1),
    var(--color-accent-2),
    transparent
  );
  opacity: 0.3;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) 0;
  gap: var(--spacing-xl);
}

.logo-section {
  flex-shrink: 0;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  text-decoration: none;
  transition: transform var(--transition-base);
}

.logo-link:hover {
  transform: translateX(2px);
}

.logo-icon {
  position: relative;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
}

.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--gradient-1);
  opacity: 0.8;
  position: absolute;
  transition: all var(--transition-base);
}

.logo-link:hover .icon-circle {
  opacity: 1;
  transform: scale(1.05);
}

.icon-stroke {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border: 2px solid var(--color-bg-primary);
  border-radius: 50%;
}

.logo-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-name {
  font-family: var(--font-family-heading);
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  letter-spacing: var(--letter-spacing-tight);
  line-height: 1.2;
}

.logo-subtitle {
  font-size: 0.75rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  line-height: 1;
}

.logo-link:hover .logo-name {
  color: var(--color-accent-1);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-md);
  align-items: center;
  padding: 0;
  margin: 0;
}

.nav-link {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  position: relative;
  text-decoration: none;
  transition: all var(--transition-base);
  border-radius: var(--border-radius-md);
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 4px;
  left: var(--spacing-sm);
  right: var(--spacing-sm);
  height: 2px;
  background: var(--gradient-1);
  transform: scaleX(0);
  transition: transform var(--transition-base);
  border-radius: var(--border-radius-full);
}

.nav-link:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-tertiary);
}

.nav-link:hover::before {
  transform: scaleX(1);
}

.nav-link-cta {
  background: var(--gradient-1);
  color: var(--color-text-primary) !important;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-full);
  box-shadow: var(--shadow-sm);
}

.nav-link-cta::before {
  display: none;
}

.nav-link-cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  background: var(--gradient-2);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background-color: var(--color-text-primary);
  border-radius: var(--border-radius-full);
  transition: all var(--transition-base);
  position: absolute;
}

.menu-toggle span:nth-child(1) {
  top: 10px;
}

.menu-toggle span:nth-child(2) {
  top: 15px;
}

.menu-toggle span:nth-child(3) {
  top: 20px;
}

.menu-toggle.menu-open span:nth-child(1) {
  top: 15px;
  transform: rotate(45deg);
}

.menu-toggle.menu-open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.menu-open span:nth-child(3) {
  top: 15px;
  transform: rotate(-45deg);
}

@media (max-width: 968px) {
  .nav-menu {
    gap: var(--spacing-sm);
  }

  .nav-link {
    font-size: 0.875rem;
    padding: var(--spacing-xs);
  }

  .logo-name {
    font-size: 1.125rem;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background: var(--color-bg-primary);
    padding: calc(80px + var(--spacing-xl)) var(--spacing-xl) var(--spacing-xl);
    box-shadow: var(--shadow-xl);
    justify-content: flex-start;
    align-items: stretch;
    gap: 0;
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    overflow-y: auto;
  }

  .nav-menu-open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-menu li {
    width: 100%;
    border-bottom: 1px solid var(--color-bg-tertiary);
  }

  .nav-menu li:last-child {
    border-bottom: none;
    margin-top: var(--spacing-md);
  }

  .nav-link {
    display: block;
    width: 100%;
    padding: var(--spacing-md) var(--spacing-sm);
    font-size: 1.125rem;
    border-radius: 0;
  }

  .nav-link::before {
    left: 0;
    right: 0;
  }

  .nav-link-cta {
    text-align: center;
    margin-top: var(--spacing-md);
  }

  .logo-subtitle {
    display: none;
  }
}
</style>
