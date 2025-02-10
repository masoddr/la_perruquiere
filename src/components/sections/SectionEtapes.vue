<template>
  <section id="etapes" class="steps">
    <div class="container">
      <h2>Notre Processus</h2>
      <p class="section-description">
        Un accompagnement personnalisé en 4 étapes pour trouver votre solution idéale
      </p>

      <div class="steps-timeline">
        <div v-for="(step, index) in steps" 
             :key="step.id" 
             class="step-item"
             :class="{ 'active': activeStep === index }"
             @mouseenter="activeStep = index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <ul class="step-features">
              <li v-for="feature in step.features" 
                  :key="feature">
                <i class="fas fa-check-circle"></i>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="step-icon">
            <i :class="step.icon"></i>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h3>Prêt à commencer votre parcours ?</h3>
        <p>Prenez rendez-vous pour une consultation personnalisée</p>
        <a href="#contact" class="btn-cta">
          Prendre Rendez-vous
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeStep = ref(0)

const steps = [
  {
    id: 1,
    title: 'Consultation Initiale',
    description: 'Une première rencontre pour comprendre vos besoins et vos attentes.',
    icon: 'fas fa-comments',
    features: [
      'Évaluation personnalisée',
      'Discussion des options',
      'Conseils adaptés'
    ]
  },
  {
    id: 2,
    title: 'Choix et Essayage',
    description: 'Sélection et essayage des modèles qui correspondent à vos critères.',
    icon: 'fas fa-search',
    features: [
      'Large gamme de modèles',
      'Essayage en cabine privée',
      'Conseils stylistiques'
    ]
  },
  {
    id: 3,
    title: 'Personnalisation',
    description: 'Ajustement et personnalisation de votre perruque pour un résultat naturel.',
    icon: 'fas fa-cut',
    features: [
      'Coupe sur mesure',
      'Ajustements précis',
      'Coloration possible'
    ]
  },
  {
    id: 4,
    title: 'Suivi et Entretien',
    description: 'Accompagnement continu pour l\'entretien et le maintien de votre perruque.',
    icon: 'fas fa-heart',
    features: [
      'Conseils d\'entretien',
      'Rendez-vous de suivi',
      'Support continu'
    ]
  }
]
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.steps {
  padding: $spacing-xl 0;
  background-color: white;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/pattern.svg') repeat;
    opacity: 0.05;
    z-index: 0;
  }
}

.container {
  @include container;
  position: relative;
  z-index: 1;
}

h2 {
  @include heading-2;
  text-align: center;
  color: $primary;
}

.section-description {
  text-align: center;
  max-width: 600px;
  margin: 0 auto $spacing-xl;
  color: $text;
  font-size: 1.1rem;
  line-height: 1.6;
}

.steps-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50px;
    height: 100%;
    width: 2px;
    background: $secondary;
    opacity: 0.3;
    
    @include mobile {
      left: 30px;
    }
  }
}

.step-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: $spacing-xl;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &.active {
    .step-number {
      background: $secondary;
      color: white;
      transform: scale(1.1);
    }
    
    .step-content {
      transform: translateX(10px);
      
      h3 {
        color: $secondary;
      }
    }
  }
}

.step-number {
  width: 100px;
  height: 100px;
  background: white;
  border: 2px solid $secondary;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 700;
  color: $secondary;
  flex-shrink: 0;
  transition: $transition-base;
  z-index: 1;
  
  @include mobile {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
}

.step-content {
  margin-left: $spacing-lg;
  transition: $transition-base;
  
  h3 {
    color: $primary;
    font-size: 1.5rem;
    margin-bottom: $spacing-sm;
    font-family: $font-primary;
    transition: $transition-base;
  }
  
  p {
    color: $text;
    margin-bottom: $spacing-md;
    line-height: 1.6;
  }
}

.step-features {
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: $spacing-xs;
    color: $text;
    display: flex;
    align-items: center;
    
    i {
      color: $secondary;
      margin-right: $spacing-sm;
      font-size: 0.9rem;
    }
  }
}

.step-icon {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba($secondary, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 1.5rem;
    color: $secondary;
  }
  
  @include mobile {
    display: none;
  }
}

.cta-section {
  text-align: center;
  margin-top: $spacing-xl;
  padding: $spacing-xl;
  background: linear-gradient(135deg, $primary 0%, darken($primary, 10%) 100%);
  border-radius: $radius-lg;
  color: white;
  
  h3 {
    font-size: 2rem;
    margin-bottom: $spacing-sm;
    font-family: $font-primary;
  }
  
  p {
    margin-bottom: $spacing-lg;
    opacity: 0.9;
  }
  
  .btn-cta {
    @include button-primary;
    background: $secondary;
    padding: $spacing-md $spacing-xl;
    font-size: 1.1rem;
    
    i {
      margin-left: $spacing-sm;
      transition: transform 0.3s ease;
    }
    
    &:hover {
      i {
        transform: translateX(5px);
      }
    }
  }
}

@include mobile {
  .step-content {
    margin-left: $spacing-md;
  }
  
  .cta-section {
    padding: $spacing-lg;
    
    h3 {
      font-size: 1.5rem;
    }
  }
}
</style> 