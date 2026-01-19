<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

let observer: IntersectionObserver | null = null
let checkInterval: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.01,
      rootMargin: '50px 0px -50px 0px'
    }
  )

  // Observar todos os elementos com classes de animação
  const observeAnimatedElements = () => {
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in, .fade-in-left, .fade-in-right, .slide-up, .scale-in'
    )

    animatedElements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        // Verificar se o elemento já está visível na viewport
        const rect = el.getBoundingClientRect()
        const isVisibleInViewport =
          rect.top < window.innerHeight - 50 &&
          rect.bottom > 50 &&
          rect.left < window.innerWidth &&
          rect.right > 0

        if (isVisibleInViewport) {
          // Se já está visível, animar imediatamente
          el.classList.add('is-visible')
        } else {
          // Se não está visível, observar para animar quando entrar
          observer?.observe(el)
        }
      }
    })
  }

  // Inicializar observação após um pequeno delay para garantir que o DOM está pronto
  const initObserver = () => {
    // Para elementos inicialmente visíveis, adicionar delay antes de animar
    // Isso cria uma entrada suave ao invés de "pop"
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in, .fade-in-left, .fade-in-right, .slide-up, .scale-in'
    )

    animatedElements.forEach((el) => {
      if (!el.classList.contains('is-visible')) {
        const rect = el.getBoundingClientRect()
        const isVisibleInViewport =
          rect.top < window.innerHeight - 50 &&
          rect.bottom > 50 &&
          rect.left < window.innerWidth &&
          rect.right > 0

        if (isVisibleInViewport) {
          // Para elementos inicialmente visíveis, animar após um pequeno delay
          // Isso evita o "pop" e cria uma entrada suave
          setTimeout(() => {
            el.classList.add('is-visible')
          }, 100) // Delay pequeno para suavizar a entrada
        }
      }
    })

    // Segunda verificação para elementos que não estavam visíveis inicialmente
    setTimeout(observeAnimatedElements, 400)
  }

  // Aguardar um pouco mais antes de iniciar para garantir que o CSS está aplicado
  setTimeout(initObserver, 100)

  // Reobservar elementos periodicamente (para elementos adicionados dinamicamente)
  checkInterval = setInterval(observeAnimatedElements, 1000)
})

onUnmounted(() => {
  if (checkInterval) {
    clearInterval(checkInterval)
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style>
@import './assets/styles/base.css';
</style>
