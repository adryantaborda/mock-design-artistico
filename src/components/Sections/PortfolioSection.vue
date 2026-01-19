<template>
  <section id="portfolio" class="portfolio">
    <Container>
      <h2 class="section-title fade-in-up">Portfolio</h2>
      <p class="section-subtitle fade-in-up animate-delay-100">
        Explore uma seleção dos meus projetos mais recentes
      </p>
      <div class="portfolio-grid">
        <article
          v-for="(project, index) in projects"
          :key="index"
          :class="[
            'portfolio-item',
            'fade-in-up',
            index === 0 ? 'animate-delay-200' : '',
            index === 1 ? 'animate-delay-300' : '',
            index === 2 ? 'animate-delay-400' : '',
            index === 3 ? 'animate-delay-200' : '',
            index === 4 ? 'animate-delay-300' : '',
            index % 2 === 0 ? 'portfolio-item-large' : ''
          ]"
          @click="handleProjectClick(project)"
        >
          <div class="portfolio-image-wrapper">
            <img :src="project.image" :alt="project.title" class="portfolio-image" />
            <div class="portfolio-overlay">
              <div class="overlay-content">
                <h3 class="overlay-title">{{ project.title }}</h3>
                <p class="overlay-description">{{ project.description }}</p>
                <div class="overlay-tags">
                  <span v-for="tag in project.tags" :key="tag" class="tag">
                    {{ tag }}
                  </span>
                </div>
                <div class="overlay-link">
                  <span>Ver Projeto</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-info">
            <div class="project-number">0{{ index + 1 }}</div>
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-meta">
              <span class="project-category">{{ project.tags[0] }}</span>
              <span class="project-year">2024</span>
            </div>
          </div>
        </article>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '../UI/Container.vue'
import erImage from '../../assets/images/ER.png'
import er1Image from '../../assets/images/ER (1).png'
import er2Image from '../../assets/images/ER (2).png'
import er3Image from '../../assets/images/ER (3).png'
import er4Image from '../../assets/images/ER (4).png'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
}

const projects = ref<Project[]>([
  {
    title: 'Projeto Visual 1',
    description: 'Descrição do projeto artístico e sua proposta criativa.',
    tags: ['Arte Digital', 'Design'],
    image: erImage
  },
  {
    title: 'Projeto Visual 2',
    description: 'Uma exploração visual única combinando técnicas modernas.',
    tags: ['Ilustração', 'Cores'],
    image: er1Image
  },
  {
    title: 'Projeto Visual 3',
    description: 'Projeto conceitual que desafia as fronteiras do design.',
    tags: ['Conceitual', 'Arte'],
    image: er2Image
  },
  {
    title: 'Projeto Visual 4',
    description: 'Série de obras que exploram temas contemporâneos.',
    tags: ['Série', 'Contemporâneo'],
    image: er3Image
  },
  {
    title: 'Projeto Visual 5',
    description: 'Colaboração artística com foco em expressão emocional.',
    tags: ['Colaboração', 'Emoção'],
    image: er4Image
  }
])

const handleProjectClick = (project: Project) => {
  // Aqui você pode implementar navegação para detalhes do projeto
  console.log('Projeto clicado:', project)
}
</script>

<style scoped>
.portfolio {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-primary);
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--spacing-xl);
}

.portfolio-item {
  cursor: pointer;
  background: var(--color-bg-primary);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
}

.portfolio-item:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-accent-1);
}

/* Organized pattern: odd items larger (8 cols), even items smaller (4 cols) */
.portfolio-item:nth-child(odd) {
  grid-column: span 8;
}

.portfolio-item:nth-child(even) {
  grid-column: span 4;
}

/* Override with large class if needed */
.portfolio-item-large {
  grid-column: span 8;
}

.portfolio-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg-secondary);
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition-slow);
}

.portfolio-item:hover .portfolio-image {
  transform: scale(1.08);
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
  opacity: 0;
  transition: opacity var(--transition-base);
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-lg);
}

.portfolio-item:hover .portfolio-overlay {
  opacity: 1;
}

.overlay-content {
  width: 100%;
  color: white;
  transform: translateY(20px);
  transition: transform var(--transition-base);
}

.portfolio-item:hover .overlay-content {
  transform: translateY(0);
}

.overlay-title {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-xs);
  color: white;
}

.overlay-description {
  font-size: var(--font-size-body);
  margin-bottom: var(--spacing-md);
  opacity: 0.95;
  line-height: var(--line-height-relaxed);
}

.overlay-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
}

.overlay-tags .tag {
  padding: 0.375rem 0.875rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius-full);
  font-size: 0.875rem;
  color: white;
  font-weight: var(--font-weight-medium);
}

.overlay-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-body);
  color: white;
}

.overlay-link svg {
  transition: transform var(--transition-base);
}

.portfolio-item:hover .overlay-link svg {
  transform: translateX(4px);
}

.portfolio-info {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  background: var(--color-bg-primary);
}

.project-number {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-accent-1);
  letter-spacing: var(--letter-spacing-wide);
  margin-bottom: var(--spacing-xs);
}

.project-title {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
  line-height: var(--line-height-tight);
}

.project-meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xs);
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

.project-category {
  position: relative;
  padding-left: var(--spacing-md);
}

.project-category::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-accent-1);
}

.project-year {
  color: var(--color-text-light);
}

@media (max-width: 1200px) {
  .portfolio-grid {
    grid-template-columns: repeat(6, 1fr);
  }

  .portfolio-item {
    grid-column: span 6 !important;
  }

  .portfolio-item-large {
    grid-column: span 6 !important;
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .portfolio-item,
  .portfolio-item-large {
    grid-column: span 1 !important;
  }

  .portfolio-overlay {
    opacity: 0.95;
  }

  .overlay-content {
    transform: translateY(0);
  }
}
</style>
