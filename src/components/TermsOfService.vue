<template>
  <div class="legal-page">
    <nav class="navbar">
      <div class="navbar-container-centered">
        <div class="navbar-logo">
          <router-link to="/">
            <img :src="logoSvg" alt="Harbor Logo" draggable="false" />
          </router-link>
        </div>
      </div>
    </nav>

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
import { onMounted } from 'vue'
import logoSvg from '../assets/logo.svg'

onMounted(() => {
  document.title = 'Terms of Service - Harbor'
})
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #170533 0%, #170533 60%, #150628 100%);
}

.navbar {
  position: relative;
  z-index: 1000;
  padding-top: 1.5rem;
}

.legal-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 40px 80px;
  color: rgba(255, 255, 255, 0.9);
}

.legal-title {
  font-family: 'Krona One', sans-serif;
  font-size: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #d4c5ff 50%, #ffffff 70%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 60px;
  letter-spacing: 0.02em;
  line-height: 1.3;
}

.company-name {
  font-size: 1rem;
}

.legal-section {
  margin-bottom: 50px;
}

.legal-section h2 {
  font-family: 'Krona One', sans-serif;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
  letter-spacing: 0.02em;
}

.legal-section h3 {
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.95);
  margin: 30px 0 15px;
  font-weight: 600;
}

.legal-section p {
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 15px;
}

.legal-section ul {
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 25px;
  margin-bottom: 15px;
}

.legal-section li {
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.7);
}

.legal-section a {
  color: #8b5cf6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.legal-section a:hover {
  color: #a78bfa;
  text-decoration: underline;
}

.legal-footer {
  margin-top: 60px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.navbar-container-centered {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .legal-content {
    padding: 50px 24px 60px;
  }

  .legal-title {
    font-size: 1.5rem;
  }

  .company-name {
    font-size: 0.85rem;
  }

  .legal-section h2 {
    font-size: 1.2rem;
  }

  .legal-section h3 {
    font-size: 1.1rem;
  }

  .legal-section p,
  .legal-section ul {
    font-size: 0.95rem;
  }
}
</style>
