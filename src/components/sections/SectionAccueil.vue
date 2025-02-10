<template>
  <section id="accueil" class="hero">
    <div class="hero-content">
      <h1 class="title">La Perruquière</h1>
      <p class="subtitle">Révélez votre beauté naturelle</p>
      <div class="features">
        <div class="feature">
          <i class="fas fa-feather-alt"></i>
          <span>Délicatesse</span>
        </div>
        <div class="feature">
          <i class="fas fa-spa"></i>
          <span>Bien-être</span>
        </div>
        <div class="feature">
          <i class="fas fa-magic"></i>
          <span>Transformation</span>
        </div>
      </div>
      <div class="cta-buttons">
        <a href="#services" class="btn btn-primary">Découvrir nos services</a>
        <a href="#contact" class="btn btn-secondary">Prendre rendez-vous</a>
      </div>
    </div>
    <div class="hero-overlay"></div>
  </section>
</template>

<script setup>
// Pas de logique nécessaire pour le moment
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.hero {
  height: 100vh;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 2rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba($primary, 0.7),
    rgba($secondary, 0.7)
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  background: rgba(white, 0.1);
  padding: $spacing-xl;
  border-radius: $radius-lg;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(white, 0.2);
}

.title {
  font-size: 4.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  animation: fadeInDown 1s ease-out;
  text-shadow: 2px 2px 15px rgba($primary, 0.5);
  color: white;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
}

.subtitle {
  font-size: 1.8rem;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out 0.5s both;
  font-family: $font-primary;
  font-style: italic;
  color: white;
  text-shadow: 1px 1px 10px rgba($primary, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
}

.features {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  animation: fadeIn 1s ease-out 1s both;

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    background: rgba(white, 0.1);
    padding: 1.5rem;
    border-radius: $radius-full;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(white, 0.2);
    min-width: 140px;
    transition: $transition-base;

    &:hover {
      transform: translateY(-3px);
      background: rgba(white, 0.15);
      border-color: rgba(white, 0.3);

      i {
        transform: scale(1.1) rotate(5deg);
      }
    }

    i {
      font-size: 2rem;
      color: $accent;
      transition: $transition-base;
      text-shadow: 0 2px 10px rgba($accent, 0.3);
    }

    span {
      font-size: 1.1rem;
      font-weight: 500;
      font-family: $font-primary;
      letter-spacing: 0.5px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;

    .feature {
      width: 100%;
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
      padding: 1rem;

      i {
        font-size: 1.5rem;
      }
    }
  }
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  animation: fadeIn 1s ease-out 1.5s both;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

.btn {
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-size: 1.1rem;
  backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba($primary, 0.3);
  }

  &-primary {
    background: rgba($accent, 0.9);
    color: $text;
    border: 1px solid rgba(white, 0.2);
    
    &:hover {
      background: rgba($accent, 1);
    }
  }

  &-secondary {
    background: rgba(white, 0.1);
    color: white;
    border: 2px solid rgba(white, 0.5);
    
    &:hover {
      background: rgba(white, 0.2);
      border-color: white;
    }
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style> 