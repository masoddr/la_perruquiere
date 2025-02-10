<template>
  <section id="pourquoi-nous" class="why-us">
    <div class="container">
      <h2>Pourquoi Nous Choisir</h2>
      <p class="section-description">
        Notre engagement est de vous offrir une expérience unique et personnalisée
      </p>

      <div class="advantages-grid">
        <div v-for="advantage in advantages" 
             :key="advantage.id" 
             class="advantage-card">
          <div class="advantage-icon">
            <i :class="advantage.icon"></i>
          </div>
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
        </div>
      </div>

      <div class="stats-section">
        <div v-for="stat in statistics" 
             :key="stat.id" 
             class="stat-card">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    id: 1,
    icon: 'fas fa-user-friends',
    title: 'Consultation Privée',
    description: 'Un espace intime et confortable pour des consultations personnalisées dans le respect de votre vie privée.'
  },
  {
    id: 2,
    icon: 'fas fa-star',
    title: 'Expertise Reconnue',
    description: 'Une équipe de professionnels formés et passionnés, à l\'écoute de vos besoins et de vos attentes.'
  },
  {
    id: 3,
    icon: 'fas fa-palette',
    title: 'Large Choix',
    description: 'Plus de 150 modèles de perruques disponibles, pour tous les styles et tous les budgets.'
  },
  {
    id: 4,
    icon: 'fas fa-heart',
    title: 'Accompagnement',
    description: 'Un suivi personnalisé tout au long de votre parcours, de la première consultation à l\'entretien.'
  }
]

const statistics = [
  {
    id: 1,
    number: '10+',
    label: 'Années d\'expérience'
  },
  {
    id: 2,
    number: '1000+',
    label: 'Clients satisfaits'
  },
  {
    id: 3,
    number: '150+',
    label: 'Modèles disponibles'
  },
  {
    id: 4,
    number: '100%',
    label: 'Satisfaction client'
  }
]
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.why-us {
  padding: $spacing-xl 0;
  background: linear-gradient(135deg, rgba($primary, 0.2) 0%, rgba($secondary, 0.2) 100%);
  color: $text;
}

.container {
  @include container;
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
  font-family: $font-primary;
  font-style: italic;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: $spacing-lg;
  margin-bottom: $spacing-xl;
}

.advantage-card {
  text-align: center;
  background: rgba(white, 0.9);
  backdrop-filter: blur(10px);
  border-radius: $radius-lg;
  padding: $spacing-lg;
  transition: $transition-base;
  box-shadow: $shadow-md;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: $shadow-lg;
    
    .advantage-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }
  
  .advantage-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto $spacing-md;
    background: linear-gradient(135deg, $primary, $secondary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: $transition-base;
    
    i {
      font-size: 2rem;
      color: white;
    }
  }
  
  h3 {
    color: $primary;
    font-size: 1.3rem;
    margin-bottom: $spacing-sm;
    font-family: $font-primary;
  }
  
  p {
    color: $text;
    line-height: 1.6;
  }
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: $spacing-lg;
  margin-top: $spacing-xl;
  
  .stat-card {
    text-align: center;
    padding: $spacing-lg;
    background: white;
    border-radius: $radius-lg;
    transition: $transition-base;
    box-shadow: $shadow-sm;
    border: 2px solid rgba($primary, 0.1);
    
    &:hover {
      border-color: $secondary;
      transform: translateY(-5px);
      box-shadow: $shadow-md;
    }
    
    .stat-number {
      font-size: 3rem;
      font-weight: 700;
      color: $primary;
      margin-bottom: $spacing-xs;
      font-family: $font-primary;
    }
    
    .stat-label {
      font-size: 1.1rem;
      color: $text;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }
}

@include mobile {
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-section {
    grid-template-columns: repeat(2, 1fr);
    
    .stat-card {
      padding: $spacing-md;
      
      .stat-number {
        font-size: 2rem;
      }
      
      .stat-label {
        font-size: 0.9rem;
      }
    }
  }
}
</style> 