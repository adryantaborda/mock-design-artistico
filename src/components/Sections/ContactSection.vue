<template>
  <section id="contato" class="contact">
    <Container>
      <h2 class="section-title fade-in-up">Entre em Contato</h2>
      <p class="section-subtitle fade-in-up">
        Vamos criar algo incrível juntos. Entre em contato para discutir seu
        projeto.
      </p>
      <div class="contact-content">
        <form class="contact-form fade-in-up" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nome</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              required
              placeholder="Seu nome"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              required
              placeholder="seu@email.com"
            />
          </div>
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              required
              rows="6"
              placeholder="Conte-me sobre seu projeto..."
            ></textarea>
          </div>
          <Button type="submit" variant="primary" size="lg" class="submit-btn">
            Enviar Mensagem
          </Button>
        </form>
        <div class="contact-info fade-in">
          <div class="info-item">
            <h3>Email</h3>
            <a href="mailto:contato@artista.com">contato@artista.com</a>
          </div>
          <div class="info-item">
            <h3>Redes Sociais</h3>
            <div class="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Behance</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Container from '../UI/Container.vue'
import Button from '../UI/Button.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Aqui você implementaria a lógica de envio do formulário
  console.log('Form submitted:', form.value)
  alert('Mensagem enviada! (Esta é uma demonstração)')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style scoped>
.contact {
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

.contact-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-3xl);
  max-width: 1000px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-group label {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);
}

.form-group input,
.form-group textarea {
  padding: 1rem;
  border: 1px solid var(--color-accent-1);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  color: var(--color-text-primary);
  background-color: var(--color-bg-secondary);
  transition: all var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent-1-hover);
  box-shadow: 0 0 0 3px rgba(245, 197, 184, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--color-text-light);
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-btn {
  align-self: flex-start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  padding: var(--spacing-lg);
  background: var(--color-bg-soft);
  border-radius: var(--border-radius-xl);
  height: fit-content;
}

.info-item h3 {
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.info-item a {
  color: var(--color-text-secondary);
  transition: color var(--transition-base);
}

.info-item a:hover {
  color: var(--color-accent-1);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: -1;
  }
}
</style>
