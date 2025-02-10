<template>
  <section id="temoignages" class="testimonials">
    <div class="container">
      <h2>Ce que nos clients disent</h2>
      <div class="carousel" ref="carousel">
        <div class="carousel-inner" :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
          <div v-for="(temoignage, index) in temoignages" 
               :key="index" 
               class="testimonial-card">
            <div class="quote">"</div>
            <p class="content">{{ temoignage.content }}</p>
            <div class="author">
              <img :src="temoignage.avatar" :alt="temoignage.name">
              <div class="author-info">
                <h4>{{ temoignage.name }}</h4>
                <p>{{ temoignage.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="carousel-controls">
        <button @click="prevSlide" class="control-btn prev" :disabled="activeIndex === 0">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="carousel-dots">
          <button v-for="(_, index) in temoignages" 
                  :key="index"
                  @click="goToSlide(index)"
                  :class="{ active: activeIndex === index }"
                  class="dot-btn">
          </button>
        </div>
        <button @click="nextSlide" class="control-btn next" :disabled="activeIndex === temoignages.length - 1">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)
const autoplayInterval = ref(null)

const temoignages = [
  {
    content: "J'ai retrouvé confiance en moi grâce aux conseils experts de La Perruquière. Le choix de perruques est impressionnant et la qualité est exceptionnelle.",
    name: "Marie L.",
    date: "Mars 2024",
    avatar: "@/assets/images/testimonial-1.jpg"
  },
  {
    content: "Un accompagnement personnalisé et professionnel. Je me sens écoutée et comprise. La perruque que j'ai choisie est parfaitement adaptée à mes besoins.",
    name: "Sophie D.",
    date: "Février 2024",
    avatar: "@/assets/images/testimonial-2.jpg"
  },
  {
    content: "Le service est exceptionnel, de la première consultation jusqu'au suivi. Je recommande vivement La Perruquière à toutes les personnes en recherche d'une solution capillaire.",
    name: "Claire M.",
    date: "Janvier 2024",
    avatar: "@/assets/images/testimonial-3.jpg"
  }
]

const nextSlide = () => {
  if (activeIndex.value < temoignages.length - 1) {
    activeIndex.value++
  }
}

const prevSlide = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }
}

const goToSlide = (index) => {
  activeIndex.value = index
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    if (activeIndex.value === temoignages.length - 1) {
      activeIndex.value = 0
    } else {
      nextSlide()
    }
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style lang="scss" scoped>
.testimonials {
  background-color: var(--light);
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  text-align: center;
  color: var(--primary);
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.carousel {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  max-width: 800px;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-card {
  flex: 0 0 100%;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.quote {
  position: absolute;
  top: -20px;
  left: 20px;
  font-size: 4rem;
  color: var(--secondary);
  opacity: 0.2;
  font-family: 'Playfair Display', serif;
}

.content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 2rem;
}

.author {
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .author-info {
    h4 {
      margin: 0;
      color: var(--primary);
      font-size: 1.1rem;
    }

    p {
      margin: 0;
      color: var(--text);
      opacity: 0.7;
      font-size: 0.9rem;
    }
  }
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.control-btn {
  background: none;
  border: none;
  color: var(--primary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    color: var(--secondary);
  }
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;

  .dot-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: none;
    background: #ccc;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: var(--secondary);
      transform: scale(1.2);
    }
  }
}

@media (max-width: 768px) {
  .testimonials {
    padding: 4rem 0;
  }

  h2 {
    font-size: 2rem;
  }

  .content {
    font-size: 1rem;
  }
}
</style> 