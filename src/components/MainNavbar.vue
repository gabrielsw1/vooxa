<template>
  <q-header elevated class="main-navbar">
    <q-toolbar>
      <q-toolbar-title>
        <img src="~assets/vooxa_logo.svg" alt="Logo" class="logo" />
      </q-toolbar-title>

      <q-space />

      <div class="nav-links">
        <q-btn flat @click="scrollToSection('hero')" class="nav-link">Início</q-btn>
        <q-btn flat @click="scrollToSection('sobre')" class="nav-link">Quem Somos</q-btn>
        <q-btn flat @click="scrollToSection('services')" class="nav-link">Serviços</q-btn>
        <q-btn flat @click="scrollToSection('portfolio')" class="nav-link">Resultados</q-btn>
        <q-btn flat @click="scrollToSection('contact')" class="nav-link">Contato</q-btn>
      </div>

      <q-btn flat @click="toggleDrawer" class="menu-btn">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawerOpen" side="right" overlay elevated class="bg-dark text-white">
    <q-list class="text-white">
      <q-item clickable @click="scrollToSection('hero')" class="text-white">
        <q-item-section>Início</q-item-section>
      </q-item>
      <q-item clickable @click="scrollToSection('sobre')" class="text-white">
        <q-item-section>Quem Somos</q-item-section>
      </q-item>
      <q-item clickable @click="scrollToSection('services')" class="text-white">
        <q-item-section>Serviços</q-item-section>
      </q-item>
      <q-item clickable @click="scrollToSection('portfolio')" class="text-white">
        <q-item-section>Resultados</q-item-section>
      </q-item>
      <q-item clickable @click="scrollToSection('contact')" class="text-white">
        <q-item-section>Contato</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawerOpen = ref(false)

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

const scrollToSection = (sectionId) => {
  // Fecha o drawer primeiro
  drawerOpen.value = false

  // Aguarda um pequeno delay para o drawer fechar
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Altura do navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, 100) // Delay de 100ms para o drawer fechar
}
</script>

<style lang="scss" scoped>
.main-navbar {
  background: transparent;
  backdrop-filter: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.6rem 0;
  position: fixed;
  z-index: 1000;

  :deep(.q-toolbar) {
    min-height: 40px;
    padding: 0 1rem;
    background: transparent;
  }
}

.logo {
  height: 40px;
  width: auto;
  margin-left: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
}

.nav-link {
  color: var(--color-light);
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.5px;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--color-primary);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--color-primary);

    &::after {
      transform: scaleX(1);
    }
  }
}

.menu-btn {
  display: none;
  color: var(--color-light);

  @media (max-width: 768px) {
    display: block;
  }
}

:deep(.q-drawer) {
  background: #0a0a0a !important;
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(135, 215, 201, 0.1);

  .q-list {
    padding: 1rem 0;
    background: transparent !important;
  }

  .q-item {
    color: var(--color-light) !important;
    padding: 1rem 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: transparent !important;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--color-primary);
      transform: scaleY(0);
      transition: transform 0.3s ease;
    }

    &:hover {
      background: rgba(135, 215, 201, 0.05) !important;
      color: var(--color-primary) !important;

      &::before {
        transform: scaleY(1);
      }
    }

    .q-item__section {
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--color-light) !important;
    }
  }
}

@media (max-width: 768px) {
  .main-navbar {
    padding: 0.5rem 0;
  }

  .logo {
    height: 35px;
    margin-left: 0.8rem;
  }
}
</style>
