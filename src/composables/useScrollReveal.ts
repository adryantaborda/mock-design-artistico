import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  const observeElements = () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Opcional: parar de observar após animar
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    // Observar todos os elementos com classes de animação
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in, .fade-in-left, .fade-in-right, .slide-up, .scale-in'
    )

    animatedElements.forEach((el) => {
      observer?.observe(el)
    })
  }

  onMounted(() => {
    // Aguardar o próximo tick para garantir que os elementos estejam no DOM
    const initObserver = () => {
      observeElements()
      // Reobservar elementos que podem ser adicionados dinamicamente
      setTimeout(observeElements, 500)
    }
    initObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    observeElements
  }
}
