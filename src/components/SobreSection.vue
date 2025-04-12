<template>
  <section id="sobre" class="about-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Quem Somos</h2>
        <p class="section-subtitle">Transformando o futuro com inovação e tecnologia</p>
      </div>

      <div class="about-content">
        <div class="about-text">
          <p class="about-description">
            Somos uma empresa especializada em automação e inteligência artificial,
            dedicada a transformar processos empresariais através de soluções inovadoras.
          </p>
          <p class="about-description">
            Nossa missão é simplificar a complexidade, tornando a tecnologia acessível
            e eficiente para todos os tipos de negócios.
          </p>
        </div>

        <div class="destaques-grid desktop-only">
          <div class="destaque-card">
            <div class="icon-circle">
              <q-icon name="mdi-lightbulb-on" />
            </div>
            <h3>Inovação</h3>
            <p>Soluções criativas e personalizadas para cada desafio</p>
          </div>

          <div class="destaque-card">
            <div class="icon-circle">
              <q-icon name="mdi-shield-check" />
            </div>
            <h3>Confiança</h3>
            <p>Resultados comprovados e suporte contínuo</p>
          </div>

          <div class="destaque-card">
            <div class="icon-circle">
              <q-icon name="mdi-rocket" />
            </div>
            <h3>Eficiência</h3>
            <p>Processos otimizados e resultados mensuráveis</p>
          </div>
        </div>

        <div class="mobile-only">
          <div class="carousel-container">
            <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div class="carousel-slide">
                <div class="destaque-card">
                  <div class="icon-circle">
                    <q-icon name="mdi-lightbulb-on" />
                  </div>
                  <h3>Inovação</h3>
                  <p>Soluções criativas e personalizadas para cada desafio</p>
                </div>
              </div>
              <div class="carousel-slide">
                <div class="destaque-card">
                  <div class="icon-circle">
                    <q-icon name="mdi-shield-check" />
                  </div>
                  <h3>Confiança</h3>
                  <p>Resultados comprovados e suporte contínuo</p>
                </div>
              </div>
              <div class="carousel-slide">
                <div class="destaque-card">
                  <div class="icon-circle">
                    <q-icon name="mdi-rocket" />
                  </div>
                  <h3>Eficiência</h3>
                  <p>Processos otimizados e resultados mensuráveis</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-controls">
            <q-btn flat icon="chevron_left" @click="prevSlide" />
            <div class="carousel-dots">
              <span
                v-for="n in 3"
                :key="n"
                :class="{ active: currentSlide === n - 1 }"
                @click="goToSlide(n - 1)"
              ></span>
            </div>
            <q-btn flat icon="chevron_right" @click="nextSlide" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + 3) % 3
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style lang="scss" scoped>
.about-section {
  padding: 6rem 0;
  background: var(--color-dark);
  color: var(--color-light);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(135, 215, 201, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-light);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
}

.section-subtitle {
  font-size: 1.4rem;
  color: var(--color-light);
  opacity: 0.8;
  font-weight: 300;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.about-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--color-light);
  margin-bottom: 1.5rem;
  opacity: 0.9;
}

.destaques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.destaque-card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(135, 215, 201, 0.1) 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(135, 215, 201, 0.2);

    &::before {
      opacity: 1;
    }

    .icon-circle {
      transform: scale(1.1) rotate(5deg);
    }
  }
}

.icon-circle {
  width: 80px;
  height: 80px;
  background: rgba(135, 215, 201, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  .q-icon {
    font-size: 2.5rem;
    color: var(--color-primary);
  }
}

.destaque-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-light);
  margin-bottom: 1rem;
}

.destaque-card p {
  font-size: 1rem;
  color: var(--color-light);
  opacity: 0.8;
  line-height: 1.5;
}

.desktop-only {
  @media (max-width: 768px) {
    display: none;
  }
}

.mobile-only {
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-top: 2rem;

    .carousel-container {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.3s ease;
    }

    .carousel-slide {
      min-width: 100%;
      padding: 0 1rem;
    }

    .carousel-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      gap: 1rem;

      .q-btn {
        color: var(--color-primary);
      }
    }

    .carousel-dots {
      display: flex;
      gap: 0.5rem;

      span {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--color-primary);
        opacity: 0.3;
        cursor: pointer;
        transition: opacity 0.3s ease;

        &.active {
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 3rem 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
  }

  .about-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .destaque-card {
    padding: 1.2rem;
    min-height: 180px;
  }

  .icon-circle {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;

    .q-icon {
      font-size: 1.8rem;
    }
  }

  .destaque-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .destaque-card p {
    font-size: 0.9rem;
  }
}
</style>
