<template>
  <section id="exposicoes" class="exhibitions">
    <Container>
      <h2 class="section-title fade-in-up">Exposições & Conquistas</h2>
      <p class="section-subtitle fade-in-up animate-delay-100">
        Momentos marcantes da jornada artística
      </p>
      <div class="exhibitions-timeline">
        <div
          v-for="(event, index) in exhibitions"
          :key="index"
          :class="['timeline-item', 'fade-in-up', `animate-delay-${(index + 1) * 200}`, index % 2 === 0 ? 'timeline-left' : 'timeline-right']"
        >
          <div class="timeline-content">
            <div class="timeline-year">{{ event.year }}</div>
            <h3 class="timeline-title">{{ event.title }}</h3>
            <p class="timeline-description">{{ event.description }}</p>
            <div class="timeline-location">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{{ event.location }}</span>
            </div>
          </div>
          <div class="timeline-marker"></div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'

interface Exhibition {
  year: string
  title: string
  description: string
  location: string
}

const exhibitions: Exhibition[] = [
  {
    year: '2024',
    title: 'Exposição Coletiva "Formas Contemporâneas"',
    description: 'Participação em mostra coletiva com obras que exploram a interseção entre arte digital e tradição.',
    location: 'Galeria de Arte Moderna, Joinville'
  },
  {
    year: '2023',
    title: 'Prêmio Jovem Artista Regional',
    description: 'Reconhecimento pelo conjunto da obra e contribuição para a cena artística local.',
    location: 'Santa Catarina, Brasil'
  },
  {
    year: '2022',
    title: 'Série "Resiliência Visual"',
    description: 'Lançamento de série artística que retrata resiliência através de composições abstratas.',
    location: 'Exposição Online Internacional'
  },
  {
    year: '2021',
    title: 'Primeira Exposição Individual',
    description: 'Debut solo apresentando trabalhos que marcaram o início da carreira artística profissional.',
    location: 'Centro Cultural, Joinville'
  }
]
</script>

<style scoped>
.exhibitions {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-secondary);
  position: relative;
}

.section-title {
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacing-md);
  text-align: center;
  color: var(--color-text-primary);
}

.section-subtitle {
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-3xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.exhibitions-timeline {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: var(--spacing-xl) 0;
}

.exhibitions-timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-accent-1),
    var(--color-accent-2),
    transparent
  );
  opacity: 0.3;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-3xl);
  width: 50%;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-left {
  left: 0;
  padding-right: var(--spacing-2xl);
  text-align: right;
}

.timeline-right {
  left: 50%;
  padding-left: var(--spacing-2xl);
  text-align: left;
}

.timeline-marker {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--gradient-1);
  border: 3px solid var(--color-bg-secondary);
  top: 0;
  z-index: 1;
}

.timeline-left .timeline-marker {
  right: -8px;
}

.timeline-right .timeline-marker {
  left: -8px;
}

.timeline-content {
  background: var(--color-bg-primary);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-accent-1);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.timeline-item:hover .timeline-content {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent-1-hover);
}

.timeline-year {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent-1);
  margin-bottom: var(--spacing-xs);
}

.timeline-title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-family-heading);
}

.timeline-description {
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.timeline-location {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

.timeline-location svg {
  color: var(--color-accent-1);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .exhibitions-timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    left: 0 !important;
    padding-left: var(--spacing-2xl) !important;
    padding-right: 0 !important;
    text-align: left !important;
  }

  .timeline-marker {
    left: 12px !important;
    right: auto !important;
  }
}
</style>
