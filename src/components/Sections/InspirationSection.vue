<template>
  <section id="inspiracao" class="inspiration">
    <Container>
      <div class="inspiration-content">
        <div class="inspiration-text fade-in-left">
          <h2 class="section-title">Inspirações & Influências</h2>
          <p class="inspiration-quote">
            "A arte não reproduz o visível, torna visível."
          </p>
          <p class="quote-author">— Paul Klee</p>
          <p class="inspiration-description">
            Minha prática artística é alimentada por diversas correntes e
            movimentos que moldam minha visão criativa. Das formas orgânicas da
            natureza aos grafismos urbanos contemporâneos, cada referência
            enriquece meu processo de criação.
          </p>
          <div class="influences-list">
            <div
              v-for="(influence, index) in influences"
              :key="index"
              class="influence-item"
            >
              <span class="influence-name">{{ influence }}</span>
            </div>
          </div>
        </div>
        <div class="inspiration-visual fade-in-right">
          <div class="visual-grid">
            <div
              v-for="(item, index) in visualElements"
              :key="index"
              :class="['visual-item', `visual-item-${index + 1}`]"
            >
              <div class="visual-shape"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'

const influences = [
  'Arte Moderna',
  'Design Minimalista',
  'Cultura Brasileira',
  'Arte Digital',
  'Ilustração Contemporânea',
  'Abstração Geométrica'
]

const visualElements = [1, 2, 3, 4, 5, 6]
</script>

<style scoped>
.inspiration {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-primary);
}

.inspiration-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.inspiration-text {
  max-width: 600px;
}

.section-title {
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacing-xl);
  color: var(--color-text-primary);
  font-family: var(--font-family-heading);
}

.inspiration-quote {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-light);
  font-style: italic;
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-sm);
  padding-left: var(--spacing-lg);
  border-left: 3px solid var(--color-accent-1);
}

.quote-author {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-xl);
  padding-left: var(--spacing-lg);
  font-style: italic;
}

.inspiration-description {
  font-size: var(--font-size-body);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.influences-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.influence-item {
  padding: 0.5rem 1rem;
  background: var(--color-bg-soft);
  border: 1px solid var(--color-accent-1);
  border-radius: var(--border-radius-full);
  transition: all var(--transition-base);
}

.influence-item:hover {
  background: var(--gradient-1);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.influence-name {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

.influence-item:hover .influence-name {
  color: var(--color-text-primary);
}

.inspiration-visual {
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-grid {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.visual-item {
  position: relative;
  overflow: hidden;
}

.visual-shape {
  width: 100%;
  height: 100%;
  background: var(--gradient-1);
  border-radius: var(--border-radius-xl);
  opacity: 0.3;
  transition: all var(--transition-slow);
  transform: scale(0.9);
}

.visual-item:hover .visual-shape {
  opacity: 0.5;
  transform: scale(1);
}

.visual-item-1 .visual-shape {
  background: var(--gradient-1);
  border-radius: 50%;
}

.visual-item-2 .visual-shape {
  background: var(--gradient-2);
  border-radius: var(--border-radius-xl);
}

.visual-item-3 .visual-shape {
  background: var(--gradient-3);
  border-radius: 50% 20% 50% 20%;
}

.visual-item-4 .visual-shape {
  background: var(--gradient-2);
  border-radius: 20% 50% 20% 50%;
}

.visual-item-5 .visual-shape {
  background: var(--gradient-1);
  border-radius: var(--border-radius-xl);
}

.visual-item-6 .visual-shape {
  background: var(--gradient-3);
  border-radius: 50%;
}

@media (max-width: 968px) {
  .inspiration-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .inspiration-visual {
    order: -1;
    height: 300px;
  }

  .inspiration-text {
    max-width: 100%;
  }
}
</style>
