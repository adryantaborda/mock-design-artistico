<template>
  <footer class="footer">
    <Container>
      <div class="footer-content">
        <div class="footer-section">
          <h3>Portfolio Artístico</h3>
          <p>Arte que inspira e conecta</p>
        </div>
        <div class="footer-section">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#" @click="handleNavClick($event, 'inicio')">Início</a></li>
            <li><a href="#" @click="handleNavClick($event, 'sobre')">Sobre</a></li>
            <li><a href="#" @click="handleNavClick($event, 'portfolio')">Portfolio</a></li>
            <li><a href="#" @click="handleNavClick($event, 'contato')">Contato</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Redes Sociais</h4>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <SocialIcon platform="instagram" :size="20" />
              <span>Instagram</span>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <SocialIcon platform="linkedin" :size="20" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Portfolio Artístico. Todos os direitos reservados.</p>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Container from '../UI/Container.vue'
import SocialIcon from '../UI/SocialIcon.vue'
import { useSmoothScroll } from '../../composables/useSmoothScroll'

const { scrollToSection } = useSmoothScroll()
const currentYear = computed(() => new Date().getFullYear())

const handleNavClick = (e: Event, sectionId: string) => {
  e.preventDefault()
  scrollToSection(sectionId)
}
</script>

<style scoped>
.footer {
  background: var(--color-bg-tertiary);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
  margin-top: var(--spacing-3xl);
  border-top: 1px solid var(--color-accent-1);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.footer-section h3,
.footer-section h4 {
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.footer-section p {
  color: var(--color-text-tertiary);
  margin-bottom: 0;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: var(--spacing-xs);
}

.footer-section a {
  color: var(--color-text-tertiary);
  transition: color var(--transition-base);
}

.footer-section a:hover {
  color: var(--color-accent-1);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) 0;
  color: var(--color-text-tertiary);
  transition: all var(--transition-base);
  text-decoration: none;
}

.social-link:hover {
  color: var(--color-accent-1);
  transform: translateX(4px);
}

.social-link:hover .social-icon-instagram {
  color: #e1306c;
  transform: translateY(-2px);
}

.social-link:hover .social-icon-linkedin {
  color: #0077b5;
  transform: translateY(-2px);
}

.social-link span {
  font-size: var(--font-size-body);
}

.footer-bottom {
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-accent-1);
  text-align: center;
}

.footer-bottom p {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  margin: 0;
}
</style>
