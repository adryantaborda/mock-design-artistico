<template>
  <section id="portfolio" class="portfolio">
    <Container>
      <h2 class="section-title fade-in-up">Portfolio</h2>
      <p class="section-subtitle fade-in-up">
        Explore uma seleção dos meus projetos mais recentes
      </p>
      <div class="portfolio-grid">
        <Card
          v-for="(project, index) in projects"
          :key="index"
          class="portfolio-item fade-in-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
          clickable
        >
          <div class="portfolio-image">
            <div class="image-placeholder">
              <span>Projeto {{ index + 1 }}</span>
            </div>
          </div>
          <div class="portfolio-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="portfolio-tags">
              <span v-for="tag in project.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </Card>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '../UI/Container.vue'
import Card from '../UI/Card.vue'

interface Project {
  title: string
  description: string
  tags: string[]
}

const projects = ref<Project[]>([
  {
    title: 'Projeto Visual 1',
    description: 'Descrição do projeto artístico e sua proposta criativa.',
    tags: ['Arte Digital', 'Design']
  },
  {
    title: 'Projeto Visual 2',
    description: 'Uma exploração visual única combinando técnicas modernas.',
    tags: ['Ilustração', 'Cores']
  },
  {
    title: 'Projeto Visual 3',
    description: 'Projeto conceitual que desafia as fronteiras do design.',
    tags: ['Conceitual', 'Arte']
  },
  {
    title: 'Projeto Visual 4',
    description: 'Série de obras que exploram temas contemporâneos.',
    tags: ['Série', 'Contemporâneo']
  },
  {
    title: 'Projeto Visual 5',
    description: 'Colaboração artística com foco em expressão emocional.',
    tags: ['Colaboração', 'Emoção']
  },
  {
    title: 'Projeto Visual 6',
    description: 'Exploração de texturas e formas em nova perspectiva.',
    tags: ['Textura', 'Formas']
  }
])
</script>

<style scoped>
.portfolio {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-secondary);
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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-xl);
}

.portfolio-item {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.portfolio-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--gradient-2);
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-1);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-body);
}

.portfolio-info {
  padding: var(--spacing-lg);
}

.portfolio-info h3 {
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
}

.portfolio-info p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-small);
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.tag {
  padding: 0.25rem 0.75rem;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-accent-1);
  border-radius: var(--border-radius-full);
  font-size: 0.75rem;
  color: var(--color-accent-1);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}
</style>
