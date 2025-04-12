<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="~assets/logo.png" alt="Vooxa" class="footer-logo">
          <p class="footer-description">
            Transformando negócios através da automação e inteligência artificial.
          </p>
          <div class="social-links">
            <q-btn
              flat
              icon="fab fa-linkedin"
              href="https://linkedin.com/company/vooxa"
              target="_blank"
              class="social-btn"
            />
            <q-btn
              flat
              icon="fab fa-instagram"
              href="https://instagram.com/vooxa"
              target="_blank"
              class="social-btn"
            />
            <q-btn
              flat
              icon="fab fa-whatsapp"
              href="https://wa.me/5511999999999"
              target="_blank"
              class="social-btn"
            />
          </div>
        </div>

        <div class="footer-links">
          <div class="links-column">
            <h3 class="links-title">Contato</h3>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="fas fa-envelope" />
                </q-item-section>
                <q-item-section>contato@vooxa.com.br</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="fas fa-phone" />
                </q-item-section>
                <q-item-section>(11) 99999-9999</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="fas fa-map-marker-alt" />
                </q-item-section>
                <q-item-section>São Paulo, SP</q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="links-column">
            <h3 class="links-title">Links Rápidos</h3>
            <q-list>
              <q-item clickable v-ripple to="/privacidade">
                <q-item-section>Política de Privacidade</q-item-section>
              </q-item>
              <q-item clickable v-ripple to="/termos">
                <q-item-section>Termos de Uso</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © 2025 Vooxa. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Component logic here
</script>

<style lang="scss" scoped>
.footer-section {
  background: linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary) 100%);
  color: var(--color-light);
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('~assets/pattern.png') repeat;
    opacity: 0.1;
    pointer-events: none;
  }
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  .footer-logo {
    width: 150px;
    margin-bottom: 1.5rem;
  }

  .footer-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0.8;
  }
}

.social-links {
  display: flex;
  gap: 1rem;

  .social-btn {
    color: var(--color-light);
    font-size: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.links-column {
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    color: var(--color-light);
  }

  .q-list {
    background: transparent;
  }

  .q-item {
    padding: 0.5rem 0;
    color: var(--color-light);
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }

    .q-icon {
      font-size: 1.2rem;
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  text-align: center;

  .copyright {
    font-size: 0.9rem;
    opacity: 0.7;
  }
}
</style>
