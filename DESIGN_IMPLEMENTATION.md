# 🛠️ Guia de Implementação do Design

## Estrutura de Arquivos Recomendada

```
src/
├── assets/
│   ├── styles/
│   │   ├── variables.css       # Variáveis CSS (cores, tipografia, etc)
│   │   ├── base.css            # Reset e estilos base
│   │   ├── components.css      # Estilos de componentes
│   │   └── utilities.css       # Classes utilitárias
│   ├── fonts/                  # Fontes customizadas
│   └── images/                 # Imagens e assets
├── components/
│   ├── Layout/
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── Container.vue
│   ├── Sections/
│   │   ├── HeroSection.vue
│   │   ├── AboutSection.vue
│   │   ├── PortfolioSection.vue
│   │   └── ContactSection.vue
│   ├── Portfolio/
│   │   ├── ProjectCard.vue
│   │   ├── ProjectGrid.vue
│   │   └── ProjectModal.vue
│   └── UI/
│       ├── Button.vue
│       ├── Input.vue
│       └── Card.vue
└── composables/
    ├── useScrollReveal.ts
    ├── useParallax.ts
    └── useImageLazy.ts
```

---

## Componentes Prioritários

### 1. Container (Layout Base)
Componente wrapper que centraliza conteúdo e aplica padding responsivo.

### 2. Button (UI Base)
Botão reutilizável com variantes:
- Primary (com acento)
- Secondary (outline)
- Text (minimalista)
- Com estados: hover, active, disabled

### 3. ProjectCard (Portfolio)
Card para exibir projetos:
- Imagem com hover zoom
- Overlay com informações
- Link para detalhes

### 4. Header (Navegação)
- Logo/Identidade do artista
- Menu de navegação
- Mobile: Menu hamburger
- Sticky scroll

### 5. HeroSection (Primeira Impressão)
- Imagem/vídeo de fundo (opcional)
- Título grande e impactante
- Subtítulo
- CTA button

---

## Animações a Implementar

### Scroll Reveal
```typescript
// composables/useScrollReveal.ts
// Revela elementos quando entram no viewport
```

### Parallax Sutil
```typescript
// composables/useParallax.ts
// Movimento paralaxe para backgrounds
```

### Hover States
- Cards: Scale + shadow
- Buttons: Background color transition
- Links: Underline animation
- Images: Zoom + overlay

### Loading States
- Skeleton screens para imagens
- Spinner para carregamento
- Fade-in quando conteúdo carrega

---

## Performance - Checklist

- [ ] Imagens otimizadas (WebP, lazy loading)
- [ ] Fontes otimizadas (woff2, preload)
- [ ] CSS crítico inline
- [ ] Code splitting (rotas)
- [ ] Minificação de assets
- [ ] Compressão (gzip/brotli)
- [ ] Cache strategy

---

## Acessibilidade - Checklist

- [ ] Contraste de cores adequado (WCAG AA mínimo)
- [ ] Navegação por teclado
- [ ] ARIA labels em elementos interativos
- [ ] Alt text em todas as imagens
- [ ] Foco visível em elementos focáveis
- [ ] Tamanhos de fonte escaláveis
- [ ] Semântica HTML correta

---

## SEO - Checklist

- [ ] Meta tags (title, description, OG tags)
- [ ] Structured data (JSON-LD)
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] URLs amigáveis
- [ ] Alt text descritivo
- [ ] Heading hierarchy (H1, H2, H3...)

---

## Próximos Passos

1. **Escolher paleta de cores** (recomendação: Opção 1)
2. **Importar fontes** (Google Fonts ou arquivos locais)
3. **Criar componentes base** (Container, Button, Card)
4. **Implementar seções principais** (Hero, About, Portfolio, Contact)
5. **Adicionar animações** (scroll reveal, hover states)
6. **Otimizar imagens** (formatos, tamanhos, lazy loading)
7. **Testar responsividade** (mobile, tablet, desktop)
8. **Otimizar performance** (lighthouse score)
9. **Implementar SEO** (meta tags, structured data)
10. **Testes finais** (acessibilidade, navegadores)

---

*Use este documento como checklist durante o desenvolvimento.*
