<template>
  <section id="sobre" class="about">
    <Container>
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title fade-in-up">Sobre o Artista</h2>
          <p class="fade-in-up">
            Sou um artista visual apaixonado por criar experiências visuais
            únicas que conectam pessoas através da arte. Cada projeto é uma
            jornada de descoberta e expressão.
          </p>
          <p class="fade-in-up">
            Com anos de experiência em diversas técnicas e estilos, busco
            sempre inovar e surpreender, transformando ideias em realidade
            através de uma visão artística única e autêntica.
          </p>
          <div class="about-stats fade-in-up">
            <div class="stat-item">
              <div class="stat-number">50+</div>
              <div class="stat-label">Projetos</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Anos de Experiência</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">30+</div>
              <div class="stat-label">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
        <div class="about-image fade-in">
          <div class="image-placeholder">
            <div class="placeholder-content">
              <span>Imagem do Artista</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'
</script>

<style scoped>
.about {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-primary);
}

.section-title {
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  color: var(--color-text-primary);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.about-text p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-secondary);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-accent-1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: var(--font-family-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent-1);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

.about-image {
  position: relative;
}

.image-placeholder {
  aspect-ratio: 3 / 4;
  background: var(--gradient-1);
  border-radius: var(--border-radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.placeholder-content {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-body);
  text-align: center;
  padding: var(--spacing-lg);
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .about-image {
    order: -1;
  }

  .about-stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .about-stats {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}
</style>
