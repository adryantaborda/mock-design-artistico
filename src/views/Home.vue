<template>
  <div class="home">
    <Header />
    <main class="main">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Layout/Header.vue'
import Footer from '../components/Layout/Footer.vue'
import HeroSection from '../components/Sections/HeroSection.vue'
import AboutSection from '../components/Sections/AboutSection.vue'
import PortfolioSection from '../components/Sections/PortfolioSection.vue'
import ContactSection from '../components/Sections/ContactSection.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding-top: 80px; /* Altura do header fixo */
}
</style>
