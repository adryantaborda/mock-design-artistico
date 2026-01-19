<template>
  <section id="sobre" class="about">
    <Container>
      <div class="about-content">
        <div class="about-image fade-in-left animate-delay-100">
          <div class="image-wrapper">
            <img :src="adryanImage" alt="Adryan Taborda" class="profile-image" />
            <div class="image-overlay"></div>
          </div>
        </div>
        <div class="about-info">
          <div class="info-badge fade-in-up animate-delay-100">Desenvolvedor & Designer</div>
          <h2 class="about-name fade-in-up animate-delay-200">Adryan Taborda</h2>
          <p class="about-specialty fade-in-up animate-delay-300">
            Especialista em Design e Criação de Softwares
          </p>
          <div class="about-location fade-in-up animate-delay-400">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Joinville, Santa Catarina, Brasil</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import Container from '../UI/Container.vue'
import adryanImage from '../../assets/images/adryan-taborda.png'
</script>

<style scoped>
.about {
  padding: var(--spacing-3xl) 0;
  background: var(--color-bg-secondary);
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 50%, var(--color-accent-1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, var(--color-accent-2) 0%, transparent 50%);
  opacity: 0.03;
  pointer-events: none;
}

.about-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.about-image {
  position: relative;
}

.image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-xl);
  background: var(--gradient-1);
  transition: all var(--transition-slow);
}

.image-wrapper:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(20%) contrast(1.1);
  transition: all var(--transition-slow);
}

.image-wrapper:hover .profile-image {
  filter: grayscale(0%) contrast(1.15);
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, transparent 0%, rgba(245, 197, 184, 0.1) 100%);
  pointer-events: none;
}

.about-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.info-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--gradient-1);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-full);
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wide);
  box-shadow: var(--shadow-sm);
}

.about-name {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-text-primary);
  margin: 0;
  letter-spacing: var(--letter-spacing-tight);
}

.about-specialty {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
  font-weight: var(--font-weight-regular);
}

.about-location {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
  color: var(--color-text-tertiary);
  font-size: var(--font-size-body);
}

.about-location svg {
  color: var(--color-accent-1);
  flex-shrink: 0;
}

.about-location span {
  font-weight: var(--font-weight-medium);
}

@media (max-width: 968px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
    text-align: center;
  }

  .about-image {
    max-width: 350px;
    margin: 0 auto;
  }

  .about-info {
    align-items: center;
  }

  .info-badge {
    margin: 0 auto;
  }
}

@media (max-width: 640px) {
  .about {
    padding: var(--spacing-2xl) 0;
  }

  .about-content {
    gap: var(--spacing-xl);
  }

  .about-image {
    max-width: 280px;
  }

  .about-name {
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
}
</style>
