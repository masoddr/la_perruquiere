<template>
  <button 
    class="scroll-top-btn"
    :class="{ 'visible': isVisible }"
    @click="scrollToTop"
    aria-label="Retour en haut de la page"
  >
    <i class="fas fa-chevron-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)
const scrollThreshold = 300

const checkScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.scroll-top-btn {
  position: fixed;
  bottom: $spacing-lg;
  right: $spacing-lg;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: $z-fixed;
  
  &:hover {
    background-color: $secondary;
    transform: translateY(-2px);
  }
  
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  i {
    font-size: 1.2rem;
  }
  
  @include mobile {
    bottom: $spacing-md;
    right: $spacing-md;
    width: 40px;
    height: 40px;
  }
}
</style> 