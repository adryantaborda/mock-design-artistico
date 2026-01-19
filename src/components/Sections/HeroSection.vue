<template>
  <section id="inicio" class="hero">
    <Container>
      <div class="hero-wrapper">
        <div class="hero-content">
          <h1 class="hero-title fade-in-up animate-delay-100">
            Arte que <span class="text-gradient">transforma</span> e
            <span class="text-gradient">inspira</span>
          </h1>
          <p class="hero-subtitle fade-in-up animate-delay-200">
            Bem-vindo ao meu universo criativo. Descubra projetos visuais únicos
            que contam histórias através da arte e do design.
          </p>
          <div class="hero-actions fade-in-up animate-delay-300">
            <Button variant="primary" size="lg" @click="scrollToSection('portfolio')">
              Ver Portfolio
            </Button>
            <Button variant="outline" size="lg" @click="scrollToSection('contato')">
              Entre em Contato
            </Button>
          </div>
        </div>
        <div class="hero-image fade-in-right animate-delay-200">
          <div class="image-wrapper">
            <img
              :src="tangoImage"
              alt="Dançarinos de tango"
              class="tango-image"
            />
          </div>
        </div>
      </div>
    </Container>
    <div class="hero-decoration">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'
import Button from '../UI/Button.vue'
import tangoImage from '../../assets/images/tango-dancers.png'
import { useSmoothScroll } from '../../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
  overflow: hidden;
  background: var(--color-bg-soft);
}

.hero-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  width: 100%;
  max-width: 1400px;
  z-index: 1;
}

.hero-content {
  text-align: left;
  max-width: 600px;
  z-index: 1;
}

.hero-title {
  font-size: var(--font-size-hero);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
}

.hero-title .text-gradient {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: flex-start;
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  background: var(--color-bg-primary);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle, var(--color-accent-1) 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0;
  opacity: 0.1;
  pointer-events: none;
  z-index: 0;
}

.tango-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.85) contrast(1.1);
  transition: all var(--transition-slow);
  z-index: 1;
}

.hero:hover .tango-image {
  filter: grayscale(70%) opacity(1) contrast(1.2);
  transform: scale(1.03);
}

.image-wrapper:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
  transition: all var(--transition-base);
}

.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: var(--gradient-1);
  opacity: 0.1;
  filter: blur(60px);
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
}

.circle-2 {
  width: 300px;
  height: 300px;
  bottom: 100px;
  left: -50px;
  background: var(--gradient-2);
}

.circle-3 {
  width: 250px;
  height: 250px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--gradient-3);
}

@media (max-width: 968px) {
  .hero-wrapper {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }

  .hero-content {
    text-align: center;
    max-width: 100%;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image {
    order: -1;
    max-width: 400px;
    margin: 0 auto;
  }

  .image-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 90vh;
    padding: var(--spacing-2xl) 0;
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-image {
    max-width: 300px;
  }
}
</style>
