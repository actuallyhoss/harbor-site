<script setup>
import { ref, provide } from 'vue'
import ContactForm from './components/ContactForm.vue'

const isFormOpen = ref(false)

const openContactForm = () => {
  isFormOpen.value = true
}

const closeContactForm = () => {
  isFormOpen.value = false
}

// Provide the openContactForm function to all child components
provide('openContactForm', openContactForm)
</script>

<template>
  <div class="app">
    <!-- Router View for different pages -->
    <router-view @open-contact-form="openContactForm" />

    <!-- Contact Form -->
    <ContactForm :isOpen="isFormOpen" @close="closeContactForm" />
  </div>
</template>

<style>
/* App Specific Styles */
.app {
  min-height: 100vh;
  background: linear-gradient(to bottom, #170533 0%, #170533 60%, #150628 100%);
  position: relative;
}

.app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%);
  pointer-events: none;
  z-index: 999;
}
</style>
