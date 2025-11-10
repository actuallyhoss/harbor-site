<script setup>
import logoSvg from './assets/logo.svg'
import harborMain from './assets/harbor-main.png'
import limitbreak from './assets/clients/limitbreak.png'
import nzxt from './assets/clients/nzxt.png'
import ccp from './assets/clients/ccp.png'
import madMushroom from './assets/clients/mad-mushroom.png'
import nway from './assets/clients/nway.png'

const clients = [
  { name: 'Limitbreak', logo: limitbreak },
  { name: 'NZXT', logo: nzxt },
  { name: 'CCP', logo: ccp },
  { name: 'Mad Mushroom', logo: madMushroom },
  { name: 'nWay', logo: nway }
]
</script>

<template>
  <div class="app">
    <!-- Sticky Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <a href="/">
            <img :src="logoSvg" alt="Harbor Logo" draggable="false" />
          </a>
        </div>
        <div class="navbar-buttons">
          <a href="#" class="btn-discord">JOIN OUR DISCORD &#8594;</a>
          <a href="#" class="btn-contact">CONTACT US</a>
        </div>
      </div>
    </nav>

    <!-- Jumbotron -->
    <section class="jumbotron">
      <div class="jumbotron-container">
        <h1 class="jumbotron-title">
          <span class="gradient-text">COMMUNITY</span><br>
          <span class="gradient-text">EXPERIENCES</span><br>
          <span class="gradient-text">REIMAGINED</span>
        </h1>
        <p class="jumbotron-description">
          Build engaging, gamified experiences for your digital communities. Create custom hubs, quests, and rewards without writing code.
        </p>
        <a href="#" class="btn-contact-large">CONTACT US</a>

        <div class="jumbotron-image">
          <img :src="harborMain" alt="Harbor Platform" draggable="false" />
        </div>

        <div class="trusted-section">
          <p class="trusted-text">TRUSTED BY TOP OPERATORS AT</p>
          <div class="clients-logos">
            <img
              v-for="client in clients"
              :key="client.name"
              :src="client.logo"
              :alt="client.name"
              class="client-logo"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import './styles/navbar.css';
@import './styles/jumbotron.css';
@import './styles/clients.css';
@import './styles/responsive.css';

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
