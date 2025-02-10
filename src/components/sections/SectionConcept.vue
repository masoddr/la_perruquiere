<template>
  <section id="concept" class="concept">
    <div class="container">
      <div class="concept-grid">
        <div class="concept-content">
          <h2>Notre Concept</h2>
          <p class="subtitle">L'art de sublimer votre beauté naturelle</p>
          
          <div class="concept-features">
            <div class="feature">
              <i class="fas fa-gem"></i>
              <h3>Qualité Premium</h3>
              <p>Des perruques sélectionnées avec soin, créées avec des matériaux d'exception pour un résultat naturel époustouflant.</p>
            </div>
            
            <div class="feature">
              <i class="fas fa-hand-holding-heart"></i>
              <h3>Accompagnement Sur-mesure</h3>
              <p>Une expérience personnalisée unique, où chaque détail est pensé pour votre confort et votre satisfaction.</p>
            </div>
            
            <div class="feature">
              <i class="fas fa-certificate"></i>
              <h3>Expertise Reconnue</h3>
              <p>Notre passion et notre savoir-faire au service de votre beauté, pour des résultats qui dépassent vos attentes.</p>
            </div>
          </div>
        </div>
        
        <div class="concept-image">
          <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Notre salon de consultation">
          <div class="experience-badge">
            <span class="number">10+</span>
            <span class="text">ans d'expertise</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// La logique sera ajoutée si nécessaire
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.concept {
  padding: $spacing-xl 0;
  background-color: $light;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: $accent;
    opacity: 0.1;
    border-radius: 50%;
    transform: translate(150px, -150px);
  }
}

.container {
  @include container;
  position: relative;
}

.concept-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xl;
  align-items: center;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.concept-content {
  h2 {
    @include heading-2;
    color: $primary;
    margin-bottom: $spacing-sm;
  }
  
  .subtitle {
    font-size: 1.4rem;
    color: $secondary;
    margin-bottom: $spacing-xl;
    font-family: $font-primary;
    font-style: italic;
  }
}

.concept-features {
  display: grid;
  gap: $spacing-lg;
  
  .feature {
    background: white;
    padding: $spacing-lg;
    border-radius: $radius-lg;
    box-shadow: 0 10px 30px rgba($primary, 0.1);
    transition: $transition-base;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba($primary, 0.15);
      
      i {
        transform: scale(1.2) rotate(5deg);
      }
    }
    
    i {
      font-size: 2.5rem;
      color: $primary;
      margin-bottom: $spacing-sm;
      transition: $transition-base;
      display: inline-block;
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
      font-size: 1.1rem;
    }
  }
}

.concept-image {
  position: relative;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba($primary, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba($primary, 0.2),
      rgba($secondary, 0.2)
    );
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: $transition-slow;
    
    &:hover {
      transform: scale(1.05);
    }
  }
  
  .experience-badge {
    position: absolute;
    bottom: $spacing-lg;
    right: $spacing-lg;
    background: $accent;
    color: $primary;
    padding: $spacing-md $spacing-lg;
    border-radius: $radius-full;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 120px;
    z-index: 2;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    
    .number {
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1;
      font-family: $font-primary;
    }
    
    .text {
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }
  }
  
  @include mobile {
    margin-top: $spacing-lg;
    
    .experience-badge {
      bottom: $spacing-md;
      right: $spacing-md;
    }
  }
}
</style> 