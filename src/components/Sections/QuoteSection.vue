<template>
  <section class="quote-section">
    <Container>
      <div class="quote-content fade-in-up">
        <div class="quote-mark quote-mark-start">"</div>
        <blockquote class="quote-text">
          A arte é a expressão mais pura que existe para a humanidade. É onde
          a forma encontra o sentimento, onde a técnica se funde com a alma, e
          onde cada pincelada, cada linha, cada pixel carrega uma história que
          transcende o tempo e conecta almas.
        </blockquote>
        <div class="quote-mark quote-mark-end">"</div>
        <div class="quote-signature">
          <div class="signature-line"></div>
          <p class="signature-name">Adryan Taborda</p>
          <p class="signature-title">Artista Visual & Designer</p>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'
</script>

<style scoped>
.quote-section {
  padding: var(--spacing-3xl) 0;
  background: linear-gradient(135deg, var(--color-bg-soft) 0%, var(--color-bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.quote-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: var(--gradient-1);
  opacity: 0.1;
  filter: blur(80px);
}

.quote-section::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -15%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--gradient-2);
  opacity: 0.1;
  filter: blur(80px);
}

.quote-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.quote-mark {
  font-family: var(--font-family-heading);
  font-size: clamp(5rem, 12vw, 8rem);
  font-weight: var(--font-weight-light);
  color: var(--color-accent-1);
  opacity: 0.2;
  line-height: 1;
  position: absolute;
}

.quote-mark-start {
  top: -40px;
  left: -60px;
}

.quote-mark-end {
  bottom: -60px;
  right: -40px;
  transform: rotate(180deg);
}

.quote-text {
  font-family: var(--font-family-heading);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-light);
  font-style: italic;
  line-height: var(--line-height-relaxed);
  color: var(--color-text-primary);
  margin: var(--spacing-2xl) 0;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
}

.quote-signature {
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-xl);
  position: relative;
}

.signature-line {
  width: 100px;
  height: 2px;
  background: var(--gradient-1);
  margin: 0 auto var(--spacing-md);
  border-radius: var(--border-radius-full);
}

.signature-name {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.signature-title {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
}

@media (max-width: 768px) {
  .quote-mark {
    font-size: 4rem;
  }

  .quote-mark-start {
    top: -20px;
    left: -20px;
  }

  .quote-mark-end {
    bottom: -40px;
    right: -20px;
  }

  .quote-text {
    padding: 0 var(--spacing-md);
  }
}
</style>
