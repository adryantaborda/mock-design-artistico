<template>
  <section id="inicio" class="hero">
    <Container>
      <div class="hero-content fade-in-up">
        <h1 class="hero-title">
          Arte que <span class="text-gradient">transforma</span> e
          <span class="text-gradient">inspira</span>
        </h1>
        <p class="hero-subtitle">
          Bem-vindo ao meu universo criativo. Descubra projetos visuais únicos
          que contam histórias através da arte e do design.
        </p>
        <div class="hero-actions">
          <Button variant="primary" size="lg" @click="scrollToSection('portfolio')">
            Ver Portfolio
          </Button>
          <Button variant="outline" size="lg" @click="scrollToSection('contato')">
            Entre em Contato
          </Button>
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

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
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

.hero-content {
  text-align: center;
  max-width: 800px;
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
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
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
}
</style>
