# 🎨 Portfolio Artístico

Landing page minimalista, clássica e suave desenvolvida com Vue.js 3, TypeScript e Pinia. Design focado em destacar o trabalho artístico com paleta pastel e composição elegante.

## 🎨 Características do Design

- **Estilo**: Minimalista, Clássico, Pastel, Doce e Suave
- **Paleta**: Tons pastéis suaves (pêssego, verde menta, creme, lavanda)
- **Tipografia**: Playfair Display (títulos) + Inter (corpo)
- **Animações**: Suaves e elegantes (fade-in, scroll reveal)

## 🛠️ Tecnologias

- **Vue.js 3** - Framework JavaScript progressivo
- **TypeScript** - Tipagem estática
- **Pinia** - Gerenciamento de estado
- **Vue Router** - Roteamento
- **Vite** - Build tool moderna
- **CSS Variables** - Sistema de design consistente

## 📁 Estrutura do Projeto

```
src/
├── assets/
│   └── styles/
│       ├── variables.css    # Variáveis CSS (cores, tipografia, espaçamento)
│       └── base.css          # Estilos base e reset
├── components/
│   ├── Layout/
│   │   ├── Header.vue       # Cabeçalho com navegação
│   │   └── Footer.vue       # Rodapé
│   ├── Sections/
│   │   ├── HeroSection.vue  # Seção hero (primeira impressão)
│   │   ├── AboutSection.vue # Sobre o artista
│   │   ├── PortfolioSection.vue # Grid de projetos
│   │   └── ContactSection.vue   # Formulário de contato
│   └── UI/
│       ├── Container.vue    # Wrapper responsivo
│       ├── Button.vue       # Botão reutilizável
│       └── Card.vue         # Card para projetos
├── composables/
│   └── useScrollReveal.ts   # Hook para animações de scroll
├── router/
│   └── index.ts             # Configuração do roteador
├── stores/
│   └── index.ts             # Store do Pinia
├── views/
│   └── Home.vue             # Página principal
└── App.vue                  # Componente raiz
```

## 🚀 Instalação

```bash
# Instalar dependências
npm install
```

## 💻 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 📦 Build

```bash
# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 🎨 Personalização

### Cores

As cores podem ser alteradas em `src/assets/styles/variables.css`. A paleta atual usa tons pastéis suaves:

- **Acento 1**: Pêssego suave (#f5c5b8)
- **Acento 2**: Verde menta suave (#b8d4c5)
- **Acento 3**: Creme doce (#f7e0c4)
- **Acento 4**: Lavanda suave (#e8d5e3)
- **Acento 5**: Azul céu suave (#d4e8f0)

### Tipografia

As fontes são importadas do Google Fonts em `src/assets/styles/base.css`:
- **Títulos**: Playfair Display
- **Corpo**: Inter

Para alterar, modifique a importação e as variáveis CSS correspondentes.

### Componentes

Todos os componentes estão em `src/components/` e podem ser facilmente modificados ou estendidos.

## 📝 Seções da Landing Page

1. **Hero** - Primeira impressão com título impactante e CTAs
2. **Sobre** - Informações sobre o artista e estatísticas
3. **Portfolio** - Grid de projetos com cards interativos
4. **Contato** - Formulário de contato e informações

## 🎯 Próximos Passos

- [ ] Adicionar imagens reais dos projetos
- [ ] Implementar galeria de imagens com lightbox
- [ ] Adicionar mais projetos ao portfolio
- [ ] Integrar formulário com backend
- [ ] Adicionar mais animações e interações
- [ ] Otimizar performance (lazy loading de imagens)
- [ ] Implementar SEO (meta tags, structured data)

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

*Desenvolvido com ❤️ para artistas visuais*
