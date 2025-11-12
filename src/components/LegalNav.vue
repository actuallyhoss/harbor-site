<template>
  <nav class="navbar">
    <div class="navbar-container-centered">
      <div class="navbar-logo">
        <router-link to="/">
          <img :src="logoSvg" alt="Harbor Logo" draggable="false" />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logoSvg from '../assets/branding/logo.svg'
</script>

<style scoped>
.navbar {
  position: relative;
  z-index: 1000;
  padding-top: 1.5rem;
}

.navbar-container-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
</style>
