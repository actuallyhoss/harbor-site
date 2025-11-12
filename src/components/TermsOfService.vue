<template>
  <div class="legal-page">
    <LegalNav />

    <div class="legal-content">
      <h1 class="legal-title">
        <span class="company-name">WINDWALK GAMES CORP.</span><br>
        TERMS OF SERVICE
      </h1>

      <div class="legal-section">
        <h2>Introduction</h2>
        <p>Windwalk Games Corp. ("Windwalk") presents itself as committed to "trust and transparency" in digital community building. The terms govern use of Harbor (the Application) and related websites/Discord communities.</p>

        <p><strong>Company Address:</strong><br>
        210 Lavaca Street Apt. 2304<br>
        Austin, TX 78701<br>
        Contact: <a href="mailto:support@windwalk.com">support@windwalk.com</a></p>
      </div>

      <div class="legal-section">
        <h2>Core Terms of Use</h2>

        <h3>Account Registration</h3>
        <p>Users must create accounts with complete, truthful information. Users bear responsibility for maintaining credential confidentiality and "all activities that occur under their username and password."</p>

        <h3>Account Termination & Suspension</h3>
        <p>Users may terminate accounts using provided tools. Windwalk reserves discretionary rights to suspend or delete accounts deemed "inappropriate, offensive or in violation of these Terms" without compensation entitlement.</p>

        <h3>Content Rights</h3>
        <p>Windwalk retains all intellectual property rights to application content. Users cannot "copy, download, share, modify, translate, transform, publish, transmit, sell, sublicense, edit" or create derivative works, except where explicitly permitted for personal, non-commercial use.</p>
      </div>

      <div class="legal-section">
        <h2>Acceptable Use</h2>
        <p>Users must comply with applicable laws and cannot violate third-party rights. The Owner may deny access or terminate services for violations, including illegal activity or infringement.</p>
      </div>

      <div class="legal-section">
        <h2>Liability & Warranties</h2>

        <h3>For US Users:</h3>
        <p>The service is provided "strictly on an 'as is' and 'as available' basis." Windwalk disclaims "all conditions, representations, and warranties" regarding accuracy, reliability, availability, or freedom from viruses.</p>
        <p>Liability is capped at amounts paid in preceding 12 months. The company is not liable for indirect, consequential, or punitive damages.</p>

        <h3>For Australian Users:</h3>
        <p>Liability limitations exclude non-excludable statutory rights under Consumer Act 2010.</p>

        <h3>Indemnification:</h3>
        <p>Users must indemnify Windwalk against claims arising from their service use, policy violations, or misconduct.</p>
      </div>

      <div class="legal-section">
        <h2>Additional Provisions</h2>
        <ul>
          <li><strong>Service Interruption:</strong> Windwalk may suspend service for maintenance or terminate altogether</li>
          <li><strong>Reselling:</strong> Prohibited without express written permission</li>
          <li><strong>Privacy:</strong> Governed by separate privacy policy at <a href="https://www.harbor.gg/privacy-policy" target="_blank" rel="noopener noreferrer">harbor.gg/privacy-policy</a></li>
          <li><strong>Modifications:</strong> Terms may be amended; continued use indicates acceptance</li>
          <li><strong>Governing Law:</strong> Location-based (Austin, TX) without conflict-of-law principles; European consumers receive enhanced protections</li>
        </ul>
      </div>

      <div class="legal-footer">
        <p>©2023 Windwalk Games Corp. All rights reserved. Windwalk and the Windwalk logo are trademarks of Windwalk Games Corp. and its affiliates.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'
import LegalNav from './LegalNav.vue'

useHead({
  title: 'Terms of Service - Harbor',
  meta: [
    { name: 'description', content: 'Terms of service for using Harbor and Windwalk Games Corp services.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Terms of Service - Harbor' },
    { property: 'og:description', content: 'Terms of service for using Harbor and Windwalk Games Corp services.' },
    { property: 'og:url', content: 'https://harbor-site.pages.dev/terms-of-service' },
    { property: 'twitter:title', content: 'Terms of Service - Harbor' },
    { property: 'twitter:description', content: 'Terms of service for using Harbor and Windwalk Games Corp services.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://harbor-site.pages.dev/terms-of-service' }
  ]
})
</script>

<style>
@import '../styles/legal.css';
</style>
