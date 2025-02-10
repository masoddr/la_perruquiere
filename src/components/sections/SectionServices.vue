<template>
  <section id="services" class="services">
    <div class="container">
      <h2>Nos Services</h2>
      <p class="section-description">
        Découvrez notre large gamme de perruques et accessoires, adaptés à tous les styles et besoins
      </p>
      
      <div class="services-grid">
        <div v-for="service in services" 
             :key="service.id" 
             class="service-card"
             :class="{ 'highlight': service.highlight }">
          <div class="service-image">
            <img :src="service.image" :alt="service.title">
            <div class="service-overlay">
              <i :class="service.icon"></i>
            </div>
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" 
                  :key="feature">
                <i class="fas fa-check"></i>
                {{ feature }}
              </li>
            </ul>
            <a :href="service.link" class="btn-service">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'Perruques Femmes',
    description: 'Une collection exclusive de perruques naturelles et synthétiques pour femmes, adaptées à tous les styles.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: 'fas fa-female',
    features: [
      'Plus de 100 styles disponibles',
      'Fibres de haute qualité',
      'Coupe personnalisée',
      'Conseils d\'entretien'
    ],
    link: '#contact',
    highlight: true
  },
  {
    id: 2,
    title: 'Perruques Hommes',
    description: 'Des solutions capillaires discrètes et naturelles pour hommes, conçues pour un confort optimal.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: 'fas fa-male',
    features: [
      'Styles contemporains',
      'Ajustement parfait',
      'Matériaux respirants',
      'Aspect naturel garanti'
    ],
    link: '#contact'
  },
  {
    id: 3,
    title: 'Accessoires',
    description: 'Tous les accessoires nécessaires pour l\'entretien et la mise en beauté de votre perruque.',
    image: 'https://images.unsplash.com/photo-1522337094846-8a818d7adf91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    icon: 'fas fa-shopping-bag',
    features: [
      'Produits d\'entretien',
      'Supports et têtes',
      'Brosses spéciales',
      'Fixatifs adaptés'
    ],
    link: '#contact'
  }
]
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.services {
  padding: $spacing-xl 0;
  background-color: $light;
  position: relative;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    z-index: 0;
  }
  
  &::before {
    background: $primary;
    opacity: 0.1;
    top: -150px;
    left: -150px;
  }
  
  &::after {
    background: $secondary;
    opacity: 0.1;
    bottom: -150px;
    right: -150px;
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
  margin-bottom: $spacing-sm;
}

.section-description {
  text-align: center;
  max-width: 600px;
  margin: 0 auto $spacing-xl;
  color: $text;
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: $font-primary;
  font-style: italic;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: $spacing-xl;
  
  @include mobile {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
}

.service-card {
  background: white;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba($primary, 0.1);
  transition: $transition-base;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba($primary, 0.15);
    
    .service-image {
      img {
        transform: scale(1.1);
      }
      
      .service-overlay {
        opacity: 1;
        
        i {
          transform: scale(1.2) rotate(10deg);
        }
      }
    }
  }
  
  &.highlight {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba($primary, 0.2);
    border: 3px solid $accent;
    
    .service-overlay {
      background-color: rgba($accent, 0.8);
    }
    
    &:hover {
      transform: scale(1.05) translateY(-10px);
    }
  }
}

.service-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: $transition-slow;
  }
}

.service-overlay {
  @include overlay(rgba($primary, 0.7));
  @include flex(row, center, center);
  opacity: 0;
  transition: $transition-base;
  
  i {
    font-size: 3.5rem;
    color: white;
    transition: $transition-base;
  }
}

.service-content {
  padding: $spacing-xl;
  
  h3 {
    color: $primary;
    font-size: 1.8rem;
    margin-bottom: $spacing-md;
    font-family: $font-primary;
  }
  
  p {
    color: $text;
    margin-bottom: $spacing-lg;
    line-height: 1.8;
    font-size: 1.1rem;
  }
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: $spacing-lg;
  
  li {
    margin-bottom: $spacing-md;
    color: $text;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    
    i {
      color: $secondary;
      margin-right: $spacing-sm;
      font-size: 1.2rem;
    }
  }
}

.btn-service {
  display: inline-block;
  padding: $spacing-sm $spacing-xl;
  background: $accent;
  color: $primary;
  border-radius: $radius-full;
  text-decoration: none;
  font-weight: 600;
  transition: $transition-base;
  text-align: center;
  width: 100%;
  
  &:hover {
    background: lighten($accent, 10%);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba($primary, 0.2);
  }
}
</style> 