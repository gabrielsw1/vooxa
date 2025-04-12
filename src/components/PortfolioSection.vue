<template>
  <section id="portfolio" class="portfolio-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Resultados que falam por si</h2>
        <p class="section-subtitle">Transformação digital com resultados mensuráveis</p>
      </div>

      <div class="results-grid">
        <q-intersection
          v-for="(result, index) in results"
          :key="index"
          transition="fade"
          class="result-card"
        >
          <q-card class="result-card-inner">
            <div class="result-icon">
              <q-icon :name="result.icon" />
            </div>
            <div class="result-metric">{{ result.metric }}</div>
            <h3 class="result-title">{{ result.title }}</h3>
            <p class="result-description">{{ result.description }}</p>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </section>
</template>

<script setup>
const results = [
  {
    icon: 'mdi-timer-sand',
    metric: '92%',
    title: 'Redução no tempo de execução',
    description: 'Automatizações inteligentes eliminam tarefas manuais e aceleram processos de forma surpreendente.'
  },
  {
    icon: 'mdi-cash-multiple',
    metric: '30%',
    title: 'Redução nos custos operacionais',
    description: 'Ao automatizar tarefas repetitivas, as empresas operam com menos recursos e maior eficiência.'
  },
  {
    icon: 'mdi-chart-line',
    metric: '3x',
    title: 'Aumento de produtividade',
    description: 'Com robôs e IA atuando em conjunto, as equipes podem focar no que realmente importa.'
  },
  {
    icon: 'mdi-cog-sync',
    metric: '24/7',
    title: 'Processos integrados com precisão',
    description: 'A automação funciona sem interrupções, garantindo consistência, agilidade e escalabilidade.'
  },
  {
    icon: 'mdi-trending-up',
    metric: 'ROI Elevado',
    title: 'Retorno sobre investimento',
    description: 'Projetos bem implementados geram retorno real e mensurável logo nos primeiros meses.'
  }
]
</script>

<style lang="scss" scoped>
.portfolio-section {
  padding: 6rem 0;
  background: var(--color-dark);
  color: var(--color-light);
  position: relative;
  overflow: hidden;
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;

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

.results-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  align-items: stretch;

  .result-card {
    grid-column: span 2;
    height: 100%;
    min-height: 320px;
  }

  .result-card:nth-child(4),
  .result-card:nth-child(5) {
    grid-column: span 3;
  }
}

.result-card {
  perspective: 1000px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.result-card-inner {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 320px;
  height: 100%;

  .result-description {
    flex: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(135, 215, 201, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 30px rgba(135, 215, 201, 0.2);

    &::before {
      opacity: 1;
    }

    .result-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }
}

.result-icon {
  width: 65px;
  height: 65px;
  background: rgba(135, 215, 201, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;

  .q-icon {
    font-size: 2rem;
    color: var(--color-primary);
  }
}

.result-metric {
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 0.8rem;
  line-height: 1;
}

.result-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-light);
  margin-bottom: 0.8rem;
  text-align: center;
  line-height: 1.3;
}

.result-description {
  color: var(--color-light);
  opacity: 0.8;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin: 0;
}

@media (max-width: 992px) {
  .results-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    .result-card {
      grid-column: span 1;
      min-height: 300px;
    }

    .result-card:nth-child(4),
    .result-card:nth-child(5) {
      grid-column: span 1;
    }
  }

  .result-card-inner {
    min-height: 300px;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }

  .results-grid {
    grid-template-columns: 1fr;
    gap: 1rem;

    .result-card {
      min-height: 280px;
    }
  }

  .result-card-inner {
    min-height: 280px;
    padding: 1.5rem;
  }

  .result-icon {
    width: 60px;
    height: 60px;

    .q-icon {
      font-size: 2rem;
    }
  }

  .result-metric {
    font-size: 2.5rem;
  }
}
</style>
