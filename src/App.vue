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
          <img :src="logoSvg" alt="Harbor Logo" />
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
          <img :src="harborMain" alt="Harbor Platform" />
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

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  background: transparent;
  z-index: 1000;
  padding: 2rem 0;
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-logo img {
  height: 70px;
  width: auto;
}

.navbar-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.btn-discord {
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  font-family: 'Stack Sans Text', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-discord:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.btn-contact {
  background-color: white;
  color: #170533;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  font-family: 'Stack Sans Text', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.btn-contact:hover {
  background-color: #e8e0ff;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

/* Jumbotron */
.jumbotron {
  padding: 4rem 2rem 4rem;
}

.jumbotron-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.jumbotron-title {
  font-family: 'Krona One', sans-serif;
  font-size: 3.8rem;
  font-weight: 400;
  margin: 0 0 2rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #d4c5ff 50%, #ffffff 70%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 100% 100%;
}

.gradient-text {
  /* gradient now applied to parent */
}

.jumbotron-description {
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 1.15rem;
  font-weight: 400;
  color: #ffffff;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.btn-contact-large {
  display: inline-block;
  background-color: white;
  color: #170533;
  text-decoration: none;
  padding: 0.8rem 1.6rem;
  font-family: 'Stack Sans Text', sans-serif;
  font-weight: 500;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  border-radius: 10px;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

.btn-contact-large:hover {
  background-color: #e8e0ff;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.jumbotron-image {
  margin: 1rem 0 0.5rem;
}

.jumbotron-image img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  mix-blend-mode: lighten;
  opacity: 0.95;
}

/* Trusted Section */
.trusted-section {
  margin-top: 2rem;
}

.trusted-text {
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: white;
  letter-spacing: 0.08em;
  margin-bottom: 2rem;
}

.clients-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  flex-wrap: wrap;
}

.client-logo {
  height: 80px;
  width: auto;
  opacity: 1;
  transition: opacity 0.3s ease;
  filter: brightness(0) invert(1);
}

.client-logo:hover {
  opacity: 0.6;
}

/* Responsive */
@media (max-width: 768px) {
  .jumbotron-title {
    font-size: 2rem;
  }

  .jumbotron-description {
    font-size: 1rem;
  }

  .navbar-logo img {
    height: 45px;
  }

  .btn-discord,
  .btn-contact,
  .btn-contact-large {
    padding: 0.7rem 1.4rem;
    font-size: 0.8rem;
  }

  .clients-logos {
    gap: 3rem;
  }

  .client-logo {
    height: 60px;
  }
}
</style>
