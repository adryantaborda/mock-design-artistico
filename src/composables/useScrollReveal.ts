import { onMounted, onUnmounted, type Ref } from 'vue'

export function useScrollReveal() {
  let observer: IntersectionObserver | null = null

  const initReveal = (elements: Element[] | Ref<Element[]>) => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    const targetElements = Array.isArray(elements) ? elements : elements.value

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    targetElements.forEach((el) => {
      if (el) {
        observer?.observe(el)
      }
    })
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initReveal
  }
}
