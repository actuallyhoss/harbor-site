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
        ONLINE PRIVACY POLICY
      </h1>

      <div class="legal-section">
        <h2>Document Overview</h2>
        <p><strong>Effective Date:</strong> May 5, 2023<br>
        <strong>Last Modified:</strong> June 15, 2023</p>
      </div>

      <div class="legal-section">
        <h2>Welcome to Windwalk</h2>
        <p>Windwalk Games Corp. describes itself as committed to "forging relationships rooted in trust and transparency." The policy applies to website visitors, community members, clients, job applicants, and business partners engaging with their platforms (windwalk.com and harbor.gg) and Discord communities.</p>
        <p><strong>Services Offered:</strong> Community strategy, engagement initiatives, content creation, partnership establishment, moderation, growth tracking, and customized website/application design.</p>
      </div>

      <div class="legal-section">
        <h2>Data Collection</h2>

        <h3>Data You Provide Directly</h3>
        <ul>
          <li><strong>Website visits:</strong> Contact forms, social media links, Discord server participation</li>
          <li><strong>Services usage:</strong> Client data during sign-up; usage metrics for gamification, amplification, and community management</li>
          <li><strong>Community engagement:</strong> Discord activity, rewards unlocked, linked social media accounts</li>
          <li><strong>Events:</strong> Name, email, billing information</li>
          <li><strong>Job applications:</strong> Resume, employment history, educational background, references, citizenship status, salary expectations</li>
          <li><strong>Partnerships:</strong> Name, email, phone, job title, company name, business address</li>
        </ul>

        <h3>Automatically Collected Data</h3>
        <ul>
          <li>Device and usage information (IP address, device type, browser type, operating system)</li>
          <li>Log data and engagement metrics</li>
          <li>Cookies (essential, performance, functional)</li>
          <li>Click-through analytics from social media links</li>
        </ul>

        <h3>Age Requirements</h3>
        <p>Services target adults. Communities are "not intended for children under the age of 13." The company requests children under 13 not submit personal data and commits to removing inadvertently collected child data "as quickly as possible."</p>
      </div>

      <div class="legal-section">
        <h2>Data Processing</h2>

        <h3>Legal Bases for Processing</h3>
        <p>The company processes data under CCPA and GDPR frameworks, relying on:</p>
        <ul>
          <li><strong>Consent:</strong> Email marketing, cookies, social media integration</li>
          <li><strong>Contractual necessity:</strong> Service provision, purchases, giveaways</li>
          <li><strong>Legitimate interests:</strong> Responding to inquiries, preventing fraud, analytics</li>
          <li><strong>Legal obligations:</strong> Tax and accounting compliance</li>
          <li><strong>Vital/public interests:</strong> Rare cases protecting vital interests</li>
        </ul>

        <h3>Data Management Matrix</h3>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Data Subject</th>
                <th>Information Type</th>
                <th>Purpose</th>
                <th>Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Website visitors</strong></td>
                <td>Contact information, online activity</td>
                <td>Respond to inquiries; improve functionality</td>
                <td>Legitimate interest</td>
              </tr>
              <tr>
                <td><strong>Discord members</strong></td>
                <td>Account identifiers, activity details, crypto wallet addresses</td>
                <td>Community engagement; virtual transactions</td>
                <td>Consent; contractual obligation</td>
              </tr>
              <tr>
                <td><strong>Harbor clients</strong></td>
                <td>Contact, financial, and contractual details</td>
                <td>Client support; fulfill contracts</td>
                <td>Contractual obligation; legitimate interest</td>
              </tr>
              <tr>
                <td><strong>Employees/contractors</strong></td>
                <td>Demographic, employment, and special category data</td>
                <td>Manage employment; process payroll; evaluate applications</td>
                <td>Legal obligation; legitimate interest</td>
              </tr>
              <tr>
                <td><strong>Business partners</strong></td>
                <td>Contact, financial, and partnership information</td>
                <td>Facilitate collaboration; process payments</td>
                <td>Contractual obligation; legitimate interest</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Data Purposes</h3>
        <p>Communication, service provision, gamification, amplification, content creation, community management, employment evaluation, and legal compliance.</p>
      </div>

      <div class="legal-section">
        <h2>Data Disclosures</h2>

        <h3>Disclosure Events</h3>
        <ul>
          <li>With explicit consent</li>
          <li>To protect Windwalk or others (law enforcement, legal process)</li>
          <li>During merger, sale, or bankruptcy</li>
          <li>To authorized agents (with verification)</li>
        </ul>

        <h3>Recipient Categories</h3>
        <ul>
          <li>Clients and business partners</li>
          <li>Vendors and service providers</li>
          <li>Law enforcement and courts</li>
          <li>Government bodies as required by law</li>
        </ul>
      </div>

      <div class="legal-section">
        <h2>Data Storage & Security</h2>

        <h3>Storage Location</h3>
        <p>Data is "generally collected by us directly and processed in the United States."</p>

        <h3>Retention</h3>
        <p>Data retained "as long as necessary to provide our services" with potential extension for legal/operational reasons. De-identification and anonymization applied where possible.</p>

        <h3>Security Measures</h3>
        <ul>
          <li>Multifactor authentication</li>
          <li>Database encryption</li>
          <li>Secure API transport</li>
          <li>Cloud-hosted network segmentation</li>
          <li>Access controls</li>
          <li>Regular security examination and refinement</li>
        </ul>

        <p><strong>Limitation:</strong> "No security measure is entirely foolproof." Company not responsible for unauthorized access or data theft.</p>
      </div>

      <div class="legal-section">
        <h2>Rights & Controls</h2>

        <h3>User Rights</h3>
        <ul>
          <li><strong>Authorized agents:</strong> Can represent users (with verification)</li>
          <li><strong>Right to be informed:</strong> Know what data is collected and how</li>
          <li><strong>Right of access:</strong> Obtain personal data held</li>
          <li><strong>Right to rectification:</strong> Correct inaccurate data</li>
          <li><strong>Right to data portability:</strong> Receive data in machine-readable format</li>
          <li><strong>Right to erasure:</strong> Delete data in certain circumstances</li>
          <li><strong>Right to object:</strong> Opt-out of processing or automated decision-making</li>
          <li><strong>Right to restrict processing:</strong> Limit data use pending accuracy disputes</li>
        </ul>

        <h3>User Controls</h3>
        <ul>
          <li><strong>Account settings:</strong> Windwalk and third-party platform controls</li>
          <li><strong>Email opt-out:</strong> Unsubscribe links in marketing emails</li>
          <li><strong>Do Not Track:</strong> Not honored by company</li>
          <li><strong>Advertising preferences:</strong> Contact company or use platform tools</li>
          <li><strong>Cookie management:</strong> Browser controls available (though some site features may not work)</li>
        </ul>

        <h3>Third-Party Links</h3>
        <ul>
          <li><a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer">Discord Privacy Policy</a></li>
          <li><a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer">Twitter Privacy</a></li>
          <li><a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer">Steam Privacy Agreement</a></li>
          <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">Facebook Policy</a></li>
          <li><a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Instagram Data Policy</a></li>
          <li><a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">TikTok Privacy Policy</a></li>
          <li><a href="https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/" target="_blank" rel="noopener noreferrer">YouTube Community Guidelines</a></li>
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
        </ul>

        <h3>Advertising Opt-Outs</h3>
        <ul>
          <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-Out</a></li>
          <li><a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">Facebook Pixel Ads Preferences</a></li>
          <li><a href="https://twitter.com/settings/account/personalization" target="_blank" rel="noopener noreferrer">Twitter Personalization Settings</a></li>
          <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative</a></li>
          <li><a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a></li>
          <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">European Digital Advertising Alliance</a></li>
          <li><a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance of Canada</a></li>
        </ul>
      </div>

      <div class="legal-section">
        <h2>General Provisions</h2>

        <h3>Policy Updates</h3>
        <p>Changes announced via prominent notices or direct notification. Last updated date revised accordingly.</p>

        <h3>Contact Information</h3>
        <p><strong>Data Protection Team:</strong><br>
        Attention: Data Protection Team<br>
        Windwalk Games Corp (Windwalk)<br>
        210 Lavaca Street, Unit 2304<br>
        Austin, TX 78703<br>
        USA<br>
        Email: <a href="mailto:privacy@Windwalk.com">privacy@Windwalk.com</a></p>

        <h3>EU Representative</h3>
        <p>IT Governance Europe Limited<br>
        Email: <a href="mailto:eurep@itgovernance.eu">eurep@itgovernance.eu</a><br>
        Address: Third Floor, The Boyne Tower, Bull Ring, Lagavooren, Drogheda, Co. Louth, A92 F682</p>

        <h3>DPA Contact Options</h3>
        <ul>
          <li><strong>California:</strong> Attorney General of California</li>
          <li><strong>Europe:</strong> DPA Directory (EDPB members list)</li>
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
  document.title = 'Privacy Policy - Harbor'
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

.legal-section h4 {
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 20px 0 10px;
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

.table-wrapper {
  overflow-x: auto;
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Stack Sans Text', sans-serif;
  font-size: 0.9rem;
}

table th {
  background: rgba(139, 92, 246, 0.2);
  color: #fff;
  padding: 12px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 600;
}

table td {
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}

table tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
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

  table {
    font-size: 0.8rem;
  }

  table th,
  table td {
    padding: 8px;
  }
}
</style>
