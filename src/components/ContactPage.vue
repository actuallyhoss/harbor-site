<template>
  <div class="contact-page">
    <LegalNav />

    <div class="contact-content">
      <div class="form-header">
        <h2>GET STARTED WITH HARBOR</h2>
        <p>Fill out the form below and we'll get back to you shortly.</p>
      </div>

      <FormFields />
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import LegalNav from './LegalNav.vue'
import FormFields from './FormFields.vue'

useHead({
  title: 'Contact Us - Harbor',
  meta: [
    { name: 'description', content: 'Get in touch with Harbor. Let us help you build engaging, gamified experiences for your digital community.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Contact Us - Harbor' },
    { property: 'og:description', content: 'Get in touch with Harbor. Let us help you build engaging, gamified experiences for your digital community.' },
    { property: 'og:url', content: 'https://harbor-site.pages.dev/contact' },
    { property: 'twitter:title', content: 'Contact Us - Harbor' },
    { property: 'twitter:description', content: 'Get in touch with Harbor. Let us help you build engaging, gamified experiences for your digital community.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://harbor-site.pages.dev/contact' }
  ]
})
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #170533 0%, #170533 60%, #150628 100%);
}

.contact-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 60px 40px 80px;
}

.form-header {
  margin-bottom: 48px;
  text-align: center;
}

.form-header h2 {
  font-family: 'Krona One', sans-serif;
  font-size: 32px;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #d4c5ff 50%, #ffffff 70%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.form-header p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
  font-family: 'Stack Sans Text', sans-serif;
}

@media (max-width: 768px) {
  .contact-content {
    padding: 50px 24px 60px;
  }

  .form-header h2 {
    font-size: 24px;
  }
}
</style>
