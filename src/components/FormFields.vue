<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div class="form-group">
      <label for="name">FULL NAME</label>
      <input
        type="text"
        id="name"
        v-model="formData.name"
        required
        placeholder="John Smith"
      />
    </div>

    <div class="form-group">
      <label for="email">PLEASE SHARE YOUR EMAIL</label>
      <input
        type="email"
        id="email"
        v-model="formData.email"
        required
        placeholder="john@company.com"
      />
    </div>

    <div class="form-group">
      <label for="company">COMPANY</label>
      <input
        type="text"
        id="company"
        v-model="formData.company"
        placeholder="Your Company Name"
      />
    </div>

    <div class="form-group">
      <label for="industry">WHAT INDUSTRY IS YOUR COMPANY FOCUSED ON?</label>
      <p class="field-hint">Please let us know in broad strokes what your company focuses on</p>
      <select
        id="industry"
        v-model="formData.industry"
        required
      >
        <option value="" disabled>Select an option</option>
        <option value="Gaming">Gaming</option>
        <option value="AI">AI</option>
        <option value="Music">Music</option>
        <option value="Podcast and Entertainment">Podcast and Entertainment</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div class="form-group">
      <label for="message">TELL US A LITTLE BIT ABOUT WHAT YOU ARE LOOKING FOR!</label>
      <textarea
        id="message"
        v-model="formData.message"
        required
        rows="5"
        placeholder="Tell us about your project, goals, or how we can help..."
      ></textarea>
    </div>

    <div class="form-group">
      <label>HOW DID YOU HEAR ABOUT US?</label>
      <div class="checkbox-group">
        <label class="checkbox-label">
          <input
            type="checkbox"
            value="Fan of our work"
            v-model="formData.hearAboutUs"
          />
          <span>Fan of our work</span>
        </label>
        <label class="checkbox-label">
          <input
            type="checkbox"
            value="Friend / Colleague"
            v-model="formData.hearAboutUs"
          />
          <span>Friend / Colleague</span>
        </label>
        <label class="checkbox-label">
          <input
            type="checkbox"
            value="LinkedIn"
            v-model="formData.hearAboutUs"
          />
          <span>LinkedIn</span>
        </label>
        <label class="checkbox-label">
          <input
            type="checkbox"
            value="News / Article"
            v-model="formData.hearAboutUs"
          />
          <span>News / Article</span>
        </label>
        <label class="checkbox-label">
          <input
            type="checkbox"
            value="Other"
            v-model="formData.hearAboutUs"
          />
          <span>Other</span>
        </label>
      </div>
    </div>

    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>

    <button type="submit" class="submit-btn" :disabled="isSubmitting">
      <span v-if="!isSubmitting">SUBMIT</span>
      <span v-else>SUBMITTING...</span>
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue';

const emit = defineEmits(['submitted']);

const formData = reactive({
  name: '',
  email: '',
  company: '',
  industry: '',
  message: '',
  hearAboutUs: []
});

const isSubmitting = ref(false);
const errorMessage = ref('');
const successMessage = ref('');

const resetForm = () => {
  formData.name = '';
  formData.email = '';
  formData.company = '';
  formData.industry = '';
  formData.message = '';
  formData.hearAboutUs = [];
};

const handleSubmit = async () => {
  isSubmitting.value = true;
  errorMessage.value = '';
  successMessage.value = '';

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    successMessage.value = 'Thank you! We\'ll be in touch soon.';
    resetForm();

    emit('submitted');

  } catch (error) {
    errorMessage.value = 'Something went wrong. Please try again or email us directly.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-group > label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 11px;
  font-weight: 500;
  font-family: 'Stack Sans Text', sans-serif;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.field-hint {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: 'Stack Sans Text', sans-serif;
  margin-top: -8px;
  font-style: italic;
}

.form-group input,
.form-group textarea,
.form-group select {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  padding: 14px 16px;
  color: #fff;
  font-size: 15px;
  font-family: 'Stack Sans Text', sans-serif;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.form-group select {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  background-size: 12px 12px;
  padding-right: 40px;
}

.form-group select option {
  background: #0f0527;
  color: #fff;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.form-group select:focus {
  outline: none;
  border-color: rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.08);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  background-size: 12px 12px;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: 'Stack Sans Text', sans-serif;
  text-transform: none;
  letter-spacing: normal;
  font-weight: 400;
}

.checkbox-label input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
}

.checkbox-label input[type="checkbox"]:hover {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}

.checkbox-label input[type="checkbox"]:checked {
  background: rgba(139, 92, 246, 0.3);
  border-color: #8b5cf6;
}

.checkbox-label input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  width: 5px;
  height: 10px;
  border: solid #8b5cf6;
  border-width: 0 2px 2px 0;
  transform: translate(-50%, -60%) rotate(45deg);
}

.checkbox-label:hover {
  color: #fff;
}

.error-message {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  padding: 14px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Stack Sans Text', sans-serif;
}

.success-message {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  color: #86efac;
  padding: 14px 18px;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Stack Sans Text', sans-serif;
}

.submit-btn {
  background-color: white;
  color: #170533;
  border: none;
  border-radius: 10px;
  padding: 0.8rem 1.6rem;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: 'Stack Sans Text', sans-serif;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
  text-transform: uppercase;
}

.submit-btn:hover:not(:disabled) {
  background-color: #e8e0ff;
  box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
