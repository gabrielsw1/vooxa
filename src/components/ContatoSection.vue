<template>
  <section id="contact" class="contato-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Entre em Contato</h2>
        <p class="section-subtitle">Estamos prontos para transformar suas ideias em realidade</p>
      </div>

      <div class="form-container">
        <form class="contact-form" @submit.prevent="onSubmit">
          <div class="form-group">
            <input
              v-model="form.nome"
              type="text"
              placeholder="Nome Completo"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <input
              v-model="form.email"
              type="email"
              placeholder="E-mail"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <input
              v-model="form.telefone"
              type="tel"
              placeholder="Telefone"
              class="form-input"
              required
            />
          </div>

          <div class="form-group">
            <input
              v-model="form.empresa"
              type="text"
              placeholder="Empresa"
              class="form-input"
            />
          </div>

          <div class="form-group full-width">
            <textarea
              v-model="form.mensagem"
              placeholder="Mensagem"
              class="form-input"
              rows="4"
              required
            ></textarea>
          </div>

          <div class="form-group full-width">
            <button type="submit" class="submit-btn" :disabled="loading">
              {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: 'ContatoSection',
  setup() {
    const $q = useQuasar()
    const loading = ref(false)
    const form = ref({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: ''
    })

    // Adiciona movimento ao brilho
    onMounted(() => {
      const section = document.querySelector('.contato-section')
      if (section) {
        section.addEventListener('mousemove', (e) => {
          const rect = section.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          section.style.setProperty('--x', `${x}%`)
          section.style.setProperty('--y', `${y}%`)
        })
      }
    })

    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    const onSubmit = () => {
      loading.value = true

      setTimeout(() => {
        loading.value = false
        $q.notify({
          color: 'positive',
          message: 'Mensagem enviada com sucesso!',
          icon: 'check'
        })
        form.value = {
          nome: '',
          email: '',
          telefone: '',
          empresa: '',
          mensagem: ''
        }
      }, 1500)
    }

    return {
      form,
      loading,
      onSubmit,
      isValidEmail
    }
  }
}
</script>

<style lang="scss" scoped>
.contato-section {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-dark) 100%);
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 0;
}

.section-title {
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-light);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.2rem;
  color: var(--color-light);
  opacity: 0.8;
  font-weight: 300;
}

.form-container {
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 3rem;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.form-group {
  &.full-width {
    grid-column: 1 / -1;
  }
}

.form-input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border: none;
  border-radius: 8px;
  color: var(--color-light);
  font-size: 1rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.03);
  }
}

textarea.form-input {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  background: rgba(135, 215, 201, 0.1);
  color: var(--color-primary);
  font-weight: 500;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  border: 1px solid rgba(135, 215, 201, 0.2);
  cursor: pointer;
  margin-top: 1rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.9rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background: rgba(135, 215, 201, 0.15);
    transform: translateY(-2px);

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
}

@media (max-width: 768px) {
  .contato-section {
    padding: 2rem 0;
    min-height: auto;
  }

  .container {
    padding: 0;
    max-width: 100%;
  }

  .section-header {
    padding: 0 1.5rem;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  .section-subtitle {
    font-size: 1rem;
    opacity: 0.9;
  }

  .form-container {
    padding: 1.5rem;
    margin: 0;
    border-radius: 0;
  }

  .contact-form {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }

  .form-group {
    &.full-width {
      grid-column: 1;
    }
  }

  .form-input {
    padding: 0.8rem;
    font-size: 0.9rem;

    &::placeholder {
      font-size: 0.9rem;
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
}
</style>
