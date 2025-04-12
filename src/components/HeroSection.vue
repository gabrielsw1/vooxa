<template>
  <section id="hero" class="hero-section">
    <div class="video-container">
      <video
        autoplay
        loop
        muted
        playsinline
        class="background-video"
      >
        <source src="~assets/fundoinfinitovideo.mp4" type="video/mp4">
      </video>
      <div class="video-overlay"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          Transforme sua empresa com
          <span class="highlight">Inteligência Artificial</span>
        </h1>
        <p class="hero-subtitle">
          Soluções inovadoras em automação e IA para otimizar seus processos
        </p>
        <div class="hero-buttons">
          <q-btn
            class="btn-primary"
            label="Fale Conosco"
            @click="scrollToContact"
            size="lg"
          />
          <q-btn
            class="btn-secondary"
            label="Nossos Serviços"
            @click="scrollToServices"
            size="lg"
            outline
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const scrollToServices = () => {
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.background-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  filter: grayscale(0.3) brightness(0.7);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(18, 18, 18, 0.75) 0%,
    rgba(18, 18, 18, 0.85) 100%
  );
  z-index: 2;
}

.container {
  position: relative;
  z-index: 3;
  width: 100%;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;

  .highlight {
    color: var(--color-primary);
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--color-primary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s ease;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-text-light);
  margin-bottom: 3rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary) 0%, #5BC4A0 100%) !important;
  color: #121212 !important;
  border: none !important;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(135, 215, 201, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(135, 215, 201, 0.4);

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(135, 215, 201, 0.3);
  }
}

.btn-secondary {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%) !important;
  color: var(--color-text) !important;
  border: 2px solid var(--color-text) !important;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.25) 100%) !important;

    &::before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.15);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
