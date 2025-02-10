<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Contactez-nous</h2>
      <p class="section-description">
        Prenez rendez-vous pour une consultation personnalisée ou posez-nous vos questions
      </p>
      
      <div class="contact-grid">
        <div class="contact-info">
          <div class="info-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Notre Adresse</h3>
            <p>123 Rue de la Perruque<br>75000 Paris, France</p>
          </div>
          
          <div class="info-card">
            <i class="fas fa-phone"></i>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          
          <div class="info-card">
            <i class="fas fa-clock"></i>
            <h3>Horaires</h3>
            <ul>
              <li>Lundi - Vendredi: 9h - 19h</li>
              <li>Samedi: 10h - 17h</li>
              <li>Dimanche: Fermé</li>
            </ul>
          </div>
          
          <div class="social-links">
            <a href="#" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nom complet</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name"
              required
              placeholder="Votre nom"
            >
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email"
              required
              placeholder="votre@email.com"
            >
          </div>
          
          <div class="form-group">
            <label for="phone">Téléphone</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone"
              placeholder="Votre numéro de téléphone"
            >
          </div>
          
          <div class="form-group">
            <label for="subject">Sujet</label>
            <select id="subject" v-model="formData.subject" required>
              <option value="">Sélectionnez un sujet</option>
              <option value="consultation">Consultation</option>
              <option value="information">Demande d'information</option>
              <option value="rendez-vous">Prise de rendez-vous</option>
              <option value="autre">Autre</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="formData.message"
              required
              placeholder="Votre message"
              rows="5"
            ></textarea>
          </div>
          
          <button type="submit" class="btn-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Envoyer le message</span>
            <span v-else>
              <i class="fas fa-spinner fa-spin"></i>
              Envoi en cours...
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Réinitialiser le formulaire
    Object.keys(formData).forEach(key => formData[key] = '')
    
    // Afficher un message de succès
    alert('Votre message a été envoyé avec succès !')
  } catch (error) {
    alert('Une erreur est survenue. Veuillez réessayer.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

.contact {
  padding: $spacing-xl 0;
  background-color: white;
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
  line-height: 1.6;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: $spacing-xl;
  
  @include mobile {
    grid-template-columns: 1fr;
  }
}

.contact-info {
  .info-card {
    @include card;
    margin-bottom: $spacing-md;
    text-align: center;
    
    i {
      font-size: 2rem;
      color: $secondary;
      margin-bottom: $spacing-sm;
    }
    
    h3 {
      color: $primary;
      margin-bottom: $spacing-sm;
      font-size: 1.2rem;
    }
    
    p, ul {
      color: $text;
      margin: 0;
      padding: 0;
      list-style: none;
    }
    
    ul li {
      margin-bottom: $spacing-xs;
    }
  }
}

.social-links {
  @include flex(row, center, center);
  gap: $spacing-md;
  margin-top: $spacing-lg;
  
  .social-link {
    @include flex(row, center, center);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: $primary;
    color: white;
    text-decoration: none;
    transition: $transition-base;
    
    &:hover {
      background-color: $secondary;
      transform: translateY(-2px);
    }
  }
}

.contact-form {
  @include card;
  
  .form-group {
    margin-bottom: $spacing-md;
    
    label {
      display: block;
      margin-bottom: $spacing-xs;
      color: $primary;
      font-weight: 500;
    }
    
    input,
    select,
    textarea {
      width: 100%;
      padding: $spacing-sm;
      border: 1px solid #ddd;
      border-radius: $radius-sm;
      font-family: $font-secondary;
      font-size: 1rem;
      
      &:focus {
        outline: none;
        border-color: $secondary;
      }
    }
    
    textarea {
      resize: vertical;
    }
  }
}

.btn-submit {
  @include button-primary;
  width: 100%;
  height: 50px;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  i {
    margin-right: $spacing-sm;
  }
}
</style> 