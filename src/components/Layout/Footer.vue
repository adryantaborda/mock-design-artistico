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
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Redes Sociais</h4>
          <div class="social-links">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Behance">Behance</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
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

const currentYear = computed(() => new Date().getFullYear())
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
  gap: var(--spacing-xs);
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
