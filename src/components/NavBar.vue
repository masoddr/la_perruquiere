<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-content">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="La Perruquière" />
      </div>
      
      <button class="hamburger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ 'is-open': isMenuOpen }">
        <a v-for="section in sections" 
           :key="section.id" 
           :href="`#${section.id}`"
           @click="closeMenu">
          {{ section.name }}
        </a>
      </div>
    </div>
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const scrollProgress = ref(0)

const sections = [
  { id: 'accueil', name: 'Accueil' },
  { id: 'concept', name: 'Concept' },
  { id: 'pourquoi-nous', name: 'Pourquoi Nous' },
  { id: 'temoignages', name: 'Témoignages' },
  { id: 'services', name: 'Services' },
  { id: 'etapes', name: 'Étapes' },
  { id: 'contact', name: 'Contact' }
]

const handleScroll = () => {
  const scrollPosition = window.scrollY
  isScrolled.value = scrollPosition > 50
  
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollPosition / windowHeight) * 100
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  transition: all 0.3s ease;
  z-index: $z-fixed;

  &.nav-scrolled {
    background: rgba(white, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: $shadow-sm;

    .nav-links a {
      color: $primary;
      
      &::after {
        background: $secondary;
      }
      
      &:hover {
        color: $secondary;
      }
    }
  }
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  img {
    height: 50px;
  }
}

.nav-links {
  display: flex;
  gap: 2rem;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: $transition-base;
    position: relative;
    padding: 0.5rem 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: white;
      transition: $transition-base;
    }

    &:hover {
      color: rgba(white, 0.9);

      &::after {
        width: 100%;
      }
    }
  }
}

.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, $primary, $secondary);
  transition: width 0.3s ease;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  span {
    width: 100%;
    height: 2px;
    background: white;
    transition: $transition-base;
  }

  &.is-active {
    span {
      &:first-child {
        transform: translateY(9px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}

@include mobile {
  .hamburger {
    display: flex;

    .nav-scrolled & {
      span {
        background: $primary;
      }
    }
  }

  .nav-links {
    position: fixed;
    top: 73px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: rgba($primary, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    gap: 1rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: $shadow-md;
    
    &.is-open {
      transform: translateX(0);
    }

    a {
      padding: 0.5rem 2rem;
      color: white;
      
      &:hover {
        background: rgba(white, 0.1);
        border-radius: $radius-full;
      }

      &::after {
        display: none;
      }
    }

    .nav-scrolled & {
      background: rgba(white, 0.98);
      
      a {
        color: $primary;
        
        &:hover {
          background: rgba($secondary, 0.1);
        }
      }
    }
  }
}
</style> 