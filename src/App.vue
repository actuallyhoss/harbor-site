<script setup>
import logoSvg from './assets/logo.svg'
import harborMain from './assets/harbor-main.png'
import limitbreak from './assets/clients/limitbreak.png'
import nzxt from './assets/clients/nzxt.png'
import ccp from './assets/clients/ccp.png'
import madMushroom from './assets/clients/mad-mushroom.png'
import nway from './assets/clients/nway.png'
import harborIcon from './assets/harbor-icon.svg'
import audienceSvg from './assets/audience.svg'
import visibilityIcon from './assets/harbor-visbility.svg'
import segmentIcon from './assets/harbor-segment.svg'
import analyticsIcon from './assets/harbor-analytics.svg'
import economyIcon from './assets/harbor-economy.svg'
import hubIcon from './assets/harbor-hub.svg'
import questsIcon from './assets/harbor-quests.svg'
import contentVisibility from './assets/content-visibility.webp'
import contentSegmentation from './assets/content-segmentation.webp'
import contentAnalytics from './assets/content-analytics.webp'

const clients = [
  { name: 'Limitbreak', logo: limitbreak },
  { name: 'NZXT', logo: nzxt },
  { name: 'CCP', logo: ccp },
  { name: 'Mad Mushroom', logo: madMushroom },
  { name: 'nWay', logo: nway }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
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

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <!-- Know Your People -->
        <div class="feature-group">
          <div class="section-label">
            <span class="label-number">01</span>
            <span class="label-text">KNOW YOUR PEOPLE</span>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="visibilityIcon" alt="Visibility" />
                </div>
                <h3 class="feature-title">Visibility</h3>
              </div>
              <p class="feature-description">See who's in your community across all platforms in real-time.</p>
              <div class="feature-content-image">
                <img :src="contentVisibility" alt="Visibility Content" />
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="segmentIcon" alt="Segmentation" />
                </div>
                <h3 class="feature-title">Segmentation</h3>
              </div>
              <p class="feature-description">Group your audience by behavior, activity, and engagement levels.</p>
              <div class="feature-content-image">
                <img :src="contentSegmentation" alt="Segmentation Content" />
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="analyticsIcon" alt="Analytics" />
                </div>
                <h3 class="feature-title">Analytics</h3>
              </div>
              <p class="feature-description">Track engagement metrics and make data-driven decisions.</p>
              <div class="feature-content-image">
                <img :src="contentAnalytics" alt="Analytics Content" />
              </div>
            </div>
          </div>
        </div>

        <!-- Retain and Engage -->
        <div class="feature-group">
          <div class="section-label">
            <span class="label-number">02</span>
            <span class="label-text">RETAIN AND ENGAGE</span>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="economyIcon" alt="Economy" />
                </div>
                <h3 class="feature-title">Economy</h3>
              </div>
              <p class="feature-description">Create virtual currencies, rewards, and incentive systems.</p>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="hubIcon" alt="Hub" />
                </div>
                <h3 class="feature-title">Hub</h3>
              </div>
              <p class="feature-description">Build customizable community hubs that match your brand.</p>
            </div>

            <div class="feature-card">
              <div class="feature-header">
                <div class="feature-icon">
                  <img :src="questsIcon" alt="Quests" />
                </div>
                <h3 class="feature-title">Quests</h3>
              </div>
              <p class="feature-description">Design interactive missions and challenges to boost engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-tagline">
          TAILORED TO YOU<br>
          <span class="tagline-light">POWERED BY HARBOR</span>
        </div>

        <a href="#" class="footer-logo" @click.prevent="scrollToTop">
          <img :src="harborIcon" alt="Harbor Icon" />
        </a>

        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
        </div>

        <div class="footer-social">
          <a href="#" class="social-icon" aria-label="Twitter">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" class="social-icon" aria-label="Discord">
            <i class="fa-brands fa-discord"></i>
          </a>
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import './styles/components.css';
@import './styles/audience.css';
@import './styles/features.css';
@import './styles/footer.css';
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
