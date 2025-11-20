<script setup>
import { inject } from 'vue'
import { useHead } from '@vueuse/head'
import logoSvg from '../assets/branding/logo.svg'
import harborMain from '../assets/branding/harbor-main.png'
import limitbreak from '../assets/clients/limitbreak.png'
import nzxt from '../assets/clients/nzxt.png'
import nzxtBg from '../assets/clients/bg/nzxt.png'
import madMushroom from '../assets/clients/mad-mushroom.png'
import nway from '../assets/clients/nway.png'
import scopely from '../assets/clients/scopely.png'
import scopelyBg from '../assets/clients/bg/scopely.png'
import ccp from '../assets/clients/ccp.png'
import ccpBg from '../assets/clients/bg/ccp.png'
import harborIcon from '../assets/branding/harbor-icon.svg'
import audienceSvg from '../assets/illustrations/audience.svg'
import visibilityIcon from '../assets/product-icons/harbor-visbility.svg'
import segmentIcon from '../assets/product-icons/harbor-segment.svg'
import analyticsIcon from '../assets/product-icons/harbor-analytics.svg'
import economyIcon from '../assets/product-icons/harbor-economy.svg'
import hubIcon from '../assets/product-icons/harbor-hub.svg'
import questsIcon from '../assets/product-icons/harbor-quests.svg'
import contentVisibility from '../assets/illustrations/content-visibility.webp'
import contentSegmentation from '../assets/illustrations/content-segmentation.webp'
import contentAnalytics from '../assets/illustrations/content-analytics.webp'
import contentHub from '../assets/illustrations/content-hub.webp'
import contentGamification from '../assets/illustrations/content-gamification.webp'
import contentNotifications from '../assets/illustrations/content-notifications.webp'

useHead({
  title: 'Harbor - Own Your Audience',
  meta: [
    { name: 'description', content: 'Harbor is a CRM and marketing automation platform that connects all audience data into a singular source of truth through no-code gamified digital experiences.' },
    { property: 'og:title', content: 'Harbor - Own Your Audience' },
    { property: 'og:description', content: 'Harbor is a CRM and marketing automation platform that connects all audience data into a singular source of truth through no-code gamified digital experiences.' },
    { property: 'og:url', content: 'https://harbor-site.pages.dev/' },
    { property: 'twitter:title', content: 'Harbor - Own Your Audience' },
    { property: 'twitter:description', content: 'Harbor is a CRM and marketing automation platform that connects all audience data into a singular source of truth through no-code gamified digital experiences.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://harbor-site.pages.dev/' }
  ]
})

const clients = [
  { name: 'Limitbreak', logo: limitbreak },
  { name: 'NZXT', logo: nzxt },
  { name: 'CCP', logo: ccp },
  { name: 'Mad Mushroom', logo: madMushroom },
  { name: 'nWay', logo: nway },
  { name: 'Scopely', logo: scopely }
]

const openContactForm = inject('openContactForm')

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="home">
    <!-- Sticky Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-logo">
          <a href="/">
            <img :src="logoSvg" alt="Harbor Logo" draggable="false" />
          </a>
        </div>
        <div class="navbar-buttons">
          <a href="https://discord.gg/E2U6Ck77CR" target="_blank" rel="noopener noreferrer" class="btn-discord"><span>JOIN OUR DISCORD &#8594;</span></a>
          <button @click="openContactForm" class="btn-contact">CONTACT US</button>
        </div>
      </div>
    </nav>

    <!-- Jumbotron -->
    <section class="jumbotron">
      <div class="jumbotron-container">
        <h1 class="jumbotron-title">
          <span class="gradient-text">OWN YOUR</span><br>
          <span class="gradient-text">AUDIENCE</span><br>
        </h1>
        <p class="jumbotron-description">
          Harbor is a CRM and marketing automation platform that connects all audience data into a singular source of truth through no-code gamified digital experiences.
        </p>
        <button @click="openContactForm" class="btn-contact-large">CONTACT US</button>

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

    <!-- Audience Data Section -->
    <section class="audience-section">
      <div class="audience-container">
        <h2 class="audience-title">
          ALL YOUR AUDIENCE DATA<br>
          IN ONE PLACE
        </h2>

        <div class="audience-visualization">
          <!-- Connection Pills at Top -->
          <div class="connection-pills">
            <div class="pill">
              <i class="fa-solid fa-users"></i>
              <span>Social Media Platforms</span>
            </div>
            <div class="pill">
              <i class="fa-solid fa-store"></i>
              <span>Digital Storefronts</span>
            </div>
            <div class="pill">
              <i class="fa-solid fa-plus"></i>
              <span>Your Applications</span>
            </div>
          </div>

          <!-- Connection Lines -->
          <svg class="connection-lines" viewBox="0 0 900 250" preserveAspectRatio="xMidYMid meet">
            <!-- Left line - from left pill to harbor icon -->
            <path d="M 200 20 Q 200 125, 450 250" stroke="rgba(139, 92, 246, 0.4)" stroke-width="2" fill="none"/>
            <!-- Middle line - from middle pill to harbor icon -->
            <path d="M 450 5 L 450 250" stroke="rgba(139, 92, 246, 0.4)" stroke-width="2" fill="none"/>
            <!-- Right line - from right pill to harbor icon -->
            <path d="M 700 20 Q 700 125, 450 250" stroke="rgba(139, 92, 246, 0.4)" stroke-width="2" fill="none"/>
          </svg>

          <!-- Center Harbor Icon Box -->
          <div class="harbor-icon-box">
            <img :src="harborIcon" alt="Harbor Icon" class="harbor-icon" />
          </div>

          <!-- Radial Glow Background -->
          <div class="radial-glow"></div>

          <!-- Audience SVG -->
          <div class="audience-image">
            <img :src="audienceSvg" alt="Audience Data Visualization" />
          </div>
        </div>
      </div>
    </section>

    <!-- Quote Section -->
    <section class="quote-section">
      <div class="quote-container">
        <div class="quote-left">
          <div class="quote-bg-image" :style="{ backgroundImage: `url(${scopelyBg})` }">
            <img :src="scopely" alt="Scopely" class="quote-logo" />
          </div>
        </div>
        <div class="quote-right">
          <p class="quote-text">
            "Harbor has transformed how we engage with our mobile gaming community. The platform's ability to unify player data across touchpoints while delivering personalized experiences has driven meaningful retention and engagement across our portfolio. It's become an essential part of our player relationship strategy."
          </p>
          <div class="quote-attribution">
            <span class="quote-author">Sarah Mitchell</span>
            <span class="quote-company">Scopely</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <!-- Unique Digital Experiences -->
        <div class="feature-group">
          <div class="section-label">
            <!-- <span class="label-number">01</span> -->
            <span class="label-text">UNIQUE DIGITAL EXPERIENCES</span>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="hubIcon" alt="No Code Hub" />
                </div>
                <h3 class="feature-title">No Code Hub</h3>
              </div>
              <p class="feature-description">Build customizable community hubs without writing a single line of code.</p>
              <div class="feature-content-image">
                <img :src="contentHub" alt="No Code Hub Content" />
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="economyIcon" alt="Gamified Modules" />
                </div>
                <h3 class="feature-title">Tons of Gamified Modules</h3>
              </div>
              <p class="feature-description">Engage your audience with interactive quests, challenges, and gamified experiences.</p>
              <div class="feature-content-image">
                <img :src="contentGamification" alt="Gamified Modules Content" />
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="questsIcon" alt="Personalized Notifications" />
                </div>
                <h3 class="feature-title">Personalized Notifications</h3>
              </div>
              <p class="feature-description">Send targeted messages and notifications based on user behavior and preferences.</p>
              <div class="feature-content-image">
                <img :src="contentNotifications" alt="Personalized Notifications Content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CCP Quote Section -->
    <section class="quote-section">
      <div class="quote-container quote-reversed">
        <div class="quote-left">
          <div class="quote-bg-image" :style="{ backgroundImage: `url(${ccpBg})` }">
            <img :src="ccp" alt="CCP" class="quote-logo" />
          </div>
        </div>
        <div class="quote-right">
          <p class="quote-text">
            "Harbor has been instrumental in the growth of EVE as we continue development and engage our audiences across multiple channels. Its allowed us to reward and delight our player base through an end-to-end platform that holds real value. We look forward to continuing our partnership with Windwalk and connecting with our fans in new ways"
          </p>
          <div class="quote-attribution">
            <span class="quote-author">Eyrún Jónsdóttir</span>
            <span class="quote-company">CCP Games</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <!-- Zero-Party Data -->
        <div class="feature-group">
          <div class="section-label">
            <!-- <span class="label-number">02</span> -->
            <span class="label-text">ZERO-PARTY DATA</span>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="visibilityIcon" alt="Full Visibility" />
                </div>
                <h3 class="feature-title">Full Visibility</h3>
              </div>
              <p class="feature-description">See who's in your community across all platforms in real-time with complete transparency.</p>
              <div class="feature-content-image">
                <img :src="contentVisibility" alt="Full Visibility Content" />
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="segmentIcon" alt="Custom Segmentation" />
                </div>
                <h3 class="feature-title">Custom Segmentation</h3>
              </div>
              <p class="feature-description">Group your audience by behavior, activity, and custom attributes you define.</p>
              <div class="feature-content-image">
                <img :src="contentSegmentation" alt="Custom Segmentation Content" />
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="analyticsIcon" alt="Deep Insights" />
                </div>
                <h3 class="feature-title">Deep Insights</h3>
              </div>
              <p class="feature-description">Track engagement metrics and make data-driven decisions with powerful analytics.</p>
              <div class="feature-content-image">
                <img :src="contentAnalytics" alt="Deep Insights Content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NZXT Quote Section -->
    <section class="quote-section">
      <div class="quote-container">
        <div class="quote-left">
          <div class="quote-bg-image" :style="{ backgroundImage: `url(${nzxtBg})` }">
            <img :src="nzxt" alt="NZXT" class="quote-logo" />
          </div>
        </div>
        <div class="quote-right">
          <p class="quote-text">
            "Harbor has been a huge part of our growth this year. Their platform hasn’t just helped us scale our community, it’s helped us keep people genuinely engaged with meaningful activities and rewards. Because of that engagement, we’ve been able to show real value to our partners and secure new brand relationships that see the benefit of connecting with a passionate, active audience. Harbor has become a core part of how we build, nurture, and grow the NZXT community."
          </p>
          <div class="quote-attribution">
            <span class="quote-author">Ivan Barajas</span>
            <span class="quote-company">NZXT</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-tagline">
          <span class="tagline-main">We're building the future of direct to consumer</span>
          <span class="tagline-subtitle">Empowering digital enterprise to delight and deeply understand their audience.</span>
        </div>

        <button @click="openContactForm" class="footer-contact-btn">CONTACT US</button>

        <button type="button" class="footer-logo" @click="scrollToTop">
          <img :src="harborIcon" alt="Harbor Icon" />
        </button>

        <div class="footer-links">
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" class="footer-link">Privacy Policy</a>
          <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" class="footer-link">Terms of Service</a>
        </div>

        <div class="footer-social">
          <a href="https://x.com/harbordotgg" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="https://discord.gg/E2U6Ck77CR" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="Discord">
            <i class="fa-brands fa-discord"></i>
          </a>
          <a href="https://www.linkedin.com/company/windwalk/" target="_blank" rel="noopener noreferrer" class="social-icon" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import '../styles/components.css';
@import '../styles/audience.css';
@import '../styles/quote.css';
@import '../styles/features.css';
@import '../styles/footer.css';
@import '../styles/responsive.css';

.home {
  position: relative;
}
</style>
