<template>
  <Transition name="overlay">
    <div v-if="isOpen" class="form-overlay" @click="closeForm">
      <div class="form-container" @click.stop>
        <button class="close-btn" @click="closeForm" aria-label="Close form">
          ×
        </button>

        <div class="form-header">
          <h2>GET STARTED WITH HARBOR</h2>
          <p>Fill out the form below and we'll get back to you shortly.</p>
        </div>

        <FormFields @submitted="handleFormSubmitted" />
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue';
import FormFields from './FormFields.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeForm = () => {
  emit('close');
};

const handleFormSubmitted = () => {
  setTimeout(() => {
    closeForm();
  }, 2000);
};

const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeForm();
  }
};

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    // Delay removing overflow until after the closing animation completes (300ms)
    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }, 300);
  }
});

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
});
</script>

<style scoped>
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 9998;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  overflow-y: auto;
}

.form-container {
  position: relative;
  width: 100%;
  max-width: 50%;
  min-height: 100vh;
  background: #0f0527;
  padding: 100px 60px 60px;
  z-index: 9999;
}

.close-btn {
  position: absolute;
  top: 30px;
  left: 30px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 36px;
  font-weight: 200;
  line-height: 1;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  transform: rotate(90deg);
}

.form-header {
  margin-bottom: 48px;
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
}

.form-header {
  margin-bottom: 48px;
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
}

.form-header p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  line-height: 1.6;
  font-family: 'Stack Sans Text', sans-serif;
}

.overlay-enter-active {
  transition: opacity 0.3s ease;
}

.overlay-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-active .form-container {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.overlay-leave-active .form-container {
  transition: transform 0.3s cubic-bezier(0.6, 0, 0.8, 0.2);
}

.overlay-enter-from .form-container {
  transform: translateX(100%);
}

.overlay-leave-to .form-container {
  transform: translateX(100%);
}

@media (max-width: 1200px) {
  .form-container {
    max-width: 60%;
  }
}

@media (max-width: 768px) {
  .form-container {
    max-width: 100%;
    padding: 80px 24px 40px;
  }

  .form-header h2 {
    font-size: 24px;
  }

  .close-btn {
    top: 16px;
    left: auto;
    right: 16px;
  }
}
</style>
