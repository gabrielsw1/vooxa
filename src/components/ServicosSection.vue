<template>
  <section id="services" class="servicos-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">O que fazemos</h2>
        <p class="section-subtitle">A jornada da automação inteligente começa aqui</p>
      </div>

      <div class="timeline desktop-only">
        <div class="timeline-item">
          <div class="timeline-dot">
            <q-icon name="mdi-magnify" />
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-step">Etapa 1</span>
              <h3 class="timeline-title">Diagnóstico e análise de processos</h3>
            </div>
            <p class="timeline-text">
              Começamos entendendo a fundo os seus desafios. Mapeamos processos manuais e identificamos oportunidades reais de automação com base em dados e estratégia.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot">
            <q-icon name="mdi-robot" />
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-step">Etapa 2</span>
              <h3 class="timeline-title">Automação Robótica de Processos (RPA)</h3>
            </div>
            <p class="timeline-text">
              Desenvolvemos robôs personalizados que executam tarefas repetitivas com precisão, integrando-se aos sistemas já utilizados pela sua empresa.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot">
            <q-icon name="mdi-brain" />
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-step">Etapa 3</span>
              <h3 class="timeline-title">Inteligência Artificial aplicada</h3>
            </div>
            <p class="timeline-text">
              Implementamos IA para interpretar documentos, classificar informações e tomar decisões automatizadas, elevando o nível da automação.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot">
            <q-icon name="mdi-connection" />
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-step">Etapa 4</span>
              <h3 class="timeline-title">Integrações e fluxos inteligentes</h3>
            </div>
            <p class="timeline-text">
              Conectamos APIs, sistemas internos e ferramentas externas, criando fluxos contínuos e inteligentes que eliminam retrabalho.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot">
            <q-icon name="mdi-school" />
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-step">Etapa 5</span>
              <h3 class="timeline-title">Capacitação e autonomia</h3>
            </div>
            <p class="timeline-text">
              Treinamos equipes para que dominem o uso das automações no dia a dia, promovendo uma cultura de inovação e independência tecnológica.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot">
            <q-icon name="mdi-head-cog" />
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <span class="timeline-step">Etapa 6</span>
              <h3 class="timeline-title">Suporte e evolução contínua</h3>
            </div>
            <p class="timeline-text">
              Acompanhamos a performance das soluções e ajudamos a escalar novas automações conforme as necessidades da sua operação crescem.
            </p>
          </div>
        </div>
      </div>

      <div class="mobile-timeline mobile-only">
        <div
          v-for="(item, index) in [
            {
              icon: 'mdi-magnify',
              step: 'Etapa 1',
              title: 'Diagnóstico e análise de processos',
              text: 'Começamos entendendo a fundo os seus desafios. Mapeamos processos manuais e identificamos oportunidades reais de automação com base em dados e estratégia.'
            },
            {
              icon: 'mdi-robot',
              step: 'Etapa 2',
              title: 'Automação Robótica de Processos (RPA)',
              text: 'Desenvolvemos robôs personalizados que executam tarefas repetitivas com precisão, integrando-se aos sistemas já utilizados pela sua empresa.'
            },
            {
              icon: 'mdi-brain',
              step: 'Etapa 3',
              title: 'Inteligência Artificial aplicada',
              text: 'Implementamos IA para interpretar documentos, classificar informações e tomar decisões automatizadas, elevando o nível da automação.'
            },
            {
              icon: 'mdi-connection',
              step: 'Etapa 4',
              title: 'Integrações e fluxos inteligentes',
              text: 'Conectamos APIs, sistemas internos e ferramentas externas, criando fluxos contínuos e inteligentes que eliminam retrabalho.'
            },
            {
              icon: 'mdi-school',
              step: 'Etapa 5',
              title: 'Capacitação e autonomia',
              text: 'Treinamos equipes para que dominem o uso das automações no dia a dia, promovendo uma cultura de inovação e independência tecnológica.'
            },
            {
              icon: 'mdi-head-cog',
              step: 'Etapa 6',
              title: 'Suporte e evolução contínua',
              text: 'Acompanhamos a performance das soluções e ajudamos a escalar novas automações conforme as necessidades da sua operação crescem.'
            }
          ]"
          :key="index"
          class="mobile-timeline-item"
          :class="{ 'is-expanded': expandedItem === index }"
        >
          <div class="mobile-timeline-header" @click="toggleItem(index)">
            <div class="mobile-timeline-dot">
              <q-icon :name="item.icon" />
            </div>
            <div class="mobile-timeline-content">
              <span class="mobile-timeline-step">{{ item.step }}</span>
              <h3 class="mobile-timeline-title">{{ item.title }}</h3>
            </div>
            <q-icon
              :name="expandedItem === index ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              class="mobile-timeline-chevron"
            />
          </div>
          <div class="mobile-timeline-text" v-show="expandedItem === index">
            {{ item.text }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const expandedItem = ref(null)

const toggleItem = (index) => {
  expandedItem.value = expandedItem.value === index ? null : index
}
</script>

<style lang="scss" scoped>
.servicos-section {
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

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(38, 198, 218, 0.05) 0%, transparent 70%);
    pointer-events: none;
    animation: pulse 8s ease-in-out infinite;
  }
}

@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.6; }
  100% { opacity: 0.3; }
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

.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0.5rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom,
      transparent 0%,
      var(--color-primary) 10%,
      var(--color-primary) 90%,
      transparent 100%
    );
    opacity: 0.2;
    box-shadow: 0 0 20px rgba(135, 215, 201, 0.3);
  }
}

.timeline-item {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  position: relative;
  width: 100%;

  &:nth-child(odd) {
    .timeline-content {
      margin-left: auto;
      text-align: right;
      padding-right: 2rem;

      &::before {
        right: -8px;
        left: auto;
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      margin-right: auto;
      text-align: left;
      padding-left: 2rem;

      &::before {
        left: -8px;
        right: auto;
      }
    }
  }
}

.timeline-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 4px var(--color-dark), 0 0 0 8px rgba(135, 215, 201, 0.2);
  z-index: 2;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle at center, rgba(135, 215, 201, 0.8) 0%, transparent 70%);
    animation: glow 2s ease-in-out infinite;
  }

  .q-icon {
    font-size: 1.2rem;
    color: var(--color-dark);
    position: relative;
    z-index: 1;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 0 0 4px var(--color-dark), 0 0 0 8px rgba(135, 215, 201, 0.3), 0 0 20px rgba(135, 215, 201, 0.5);
  }
}

@keyframes glow {
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
}

.timeline-content {
  width: 40%;
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 16px;
    height: 2px;
    background: var(--color-primary);
    opacity: 0.5;
    box-shadow: 0 0 10px rgba(135, 215, 201, 0.3);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(135, 215, 201, 0.2);
  }
}

.timeline-header {
  margin-bottom: 0.8rem;
}

.timeline-step {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: rgba(135, 215, 201, 0.1);
  color: var(--color-primary);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-light);
  margin: 0;
}

.timeline-text {
  color: var(--color-light);
  opacity: 0.9;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .servicos-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }

  .timeline {
    display: none;
  }

  .mobile-timeline {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  .mobile-timeline-item {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    &.is-expanded {
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 0 20px rgba(135, 215, 201, 0.1);
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--color-primary);
      opacity: 0.5;
    }
  }

  .mobile-timeline-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.02);
    }
  }

  .mobile-timeline-dot {
    width: 40px;
    height: 40px;
    background: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    .q-icon {
      font-size: 1.2rem;
      color: var(--color-dark);
    }
  }

  .mobile-timeline-content {
    flex: 1;
  }

  .mobile-timeline-step {
    display: inline-block;
    padding: 0.2rem 0.6rem;
    background: rgba(135, 215, 201, 0.1);
    color: var(--color-primary);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  .mobile-timeline-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-light);
    margin: 0;
  }

  .mobile-timeline-chevron {
    color: var(--color-primary);
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }

  .mobile-timeline-text {
    color: var(--color-light);
    opacity: 0.9;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    padding: 0 1.2rem 1.2rem 1.2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
}
</style>
