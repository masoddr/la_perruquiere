<script setup>
import NavBar from './components/NavBar.vue'
import SectionAccueil from './components/sections/SectionAccueil.vue'
import SectionConcept from './components/sections/SectionConcept.vue'
import SectionPourquoiNous from './components/sections/SectionPourquoiNous.vue'
import SectionTemoignages from './components/sections/SectionTemoignages.vue'
import SectionServices from './components/sections/SectionServices.vue'
import SectionEtapes from './components/sections/SectionEtapes.vue'
import SectionContact from './components/sections/SectionContact.vue'
import BoutonRetourHaut from './components/BoutonRetourHaut.vue'
</script>

<template>
  <div class="app">
    <nav-bar />
    <main>
      <section-accueil />
      <section-concept />
      <section-pourquoi-nous />
      <section-temoignages />
      <section-services />
      <section-etapes />
      <section-contact />
    </main>
    <bouton-retour-haut />
  </div>
</template>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

:root {
  --primary: #{$primary};
  --secondary: #{$secondary};
  --text: #{$text};
  --light: #{$light};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: $font-secondary;
  color: var(--text);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $font-primary;
}

.app {
  min-height: 100vh;
}

main {
  section {
    padding: 4rem 2rem;
    
    @include mobile {
      padding: 6rem 4rem;
    }
  }
}
</style>
