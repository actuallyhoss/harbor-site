<template>
  <div class="not-found">
    <LegalNav />

    <div class="not-found-container">
      <h1 class="error-code">404</h1>
      <h2 class="error-message">PAGE NOT FOUND</h2>
      <p class="error-description">The page you're looking for doesn't exist or has been moved.</p>
      <router-link to="/" class="btn-home">BACK TO HOME</router-link>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import LegalNav from './LegalNav.vue'

useHead({
  title: '404 - Page Not Found - Harbor',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  background: linear-gradient(to bottom, #170533 0%, #170533 60%, #150628 100%);
}

.not-found-container {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.error-code {
  font-family: 'Krona One', sans-serif;
  font-size: 120px;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #d4c5ff 50%, #ffffff 70%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
}

.error-message {
  font-family: 'Krona One', sans-serif;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  letter-spacing: 0.05em;
}

.error-description {
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Stack Sans Text', sans-serif;
  margin-bottom: 48px;
}

.btn-home {
  display: inline-block;
  background-color: white;
  color: #170533;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1.4rem;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Stack Sans Text', sans-serif;
  letter-spacing: 0.08em;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-home:hover {
  background-color: #e8e0ff;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .not-found-container {
    padding: 24px;
  }

  .error-code {
    font-size: 80px;
  }

  .error-message {
    font-size: 24px;
  }

  .error-description {
    font-size: 14px;
  }
}
</style>
