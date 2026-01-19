<template>
  <section id="processo" class="creative-process">
    <Container>
      <h2 class="section-title fade-in-up">Processo Criativo</h2>
      <p class="section-subtitle fade-in-up animate-delay-100">
        Cada projeto nasce de um diálogo profundo entre intuição e técnica
      </p>
      <div class="process-steps">
        <div
          v-for="(step, index) in processSteps"
          :key="index"
          :class="['process-step', 'fade-in-up', `animate-delay-${(index + 1) * 100}`]"
        >
          <div class="step-number">0{{ index + 1 }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
          <div class="step-connector" v-if="index < processSteps.length - 1"></div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'

interface ProcessStep {
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    title: 'Exploração',
    description:
      'A jornada começa com pesquisa profunda, absorvendo referências visuais e culturais que despertam a criatividade.'
  },
  {
    title: 'Conceituação',
    description:
      'Transformo ideias abstratas em conceitos visuais sólidos, definindo a narrativa e identidade visual do projeto.'
  },
  {
    title: 'Desenvolvimento',
    description:
      'Através de sketches e experimentações, materializo as ideias, refinando cada detalhe com precisão artesanal.'
  },
  {
    title: 'Refinamento',
    description:
      'O toque final que une técnica e sensibilidade, criando uma obra que transcende o visual e toca o emocional.'
  }
]
</script>

<style scoped>
.creative-process {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-secondary);
  position: relative;
}

.creative-process::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--color-accent-1) 0%,
    transparent 60%
  );
  opacity: 0.02;
  pointer-events: none;
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
}

.process-steps {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
  position: relative;
}

.process-step:last-child {
  margin-bottom: 0;
}

.step-number {
  font-family: var(--font-family-heading);
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: var(--font-weight-light);
  color: var(--color-accent-1);
  line-height: 1;
  opacity: 0.3;
  flex-shrink: 0;
  min-width: 80px;
}

.step-content {
  flex: 1;
  padding-top: var(--spacing-sm);
}

.step-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-family-heading);
}

.step-description {
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  max-width: 600px;
}

.step-connector {
  position: absolute;
  left: 40px;
  top: 100px;
  width: 2px;
  height: calc(100% + var(--spacing-3xl));
  background: linear-gradient(
    to bottom,
    var(--color-accent-1),
    transparent 80%
  );
  opacity: 0.2;
}

@media (max-width: 768px) {
  .process-step {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .step-number {
    min-width: auto;
    align-self: flex-start;
  }

  .step-connector {
    display: none;
  }
}
</style>
