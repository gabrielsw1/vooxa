<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn
      v-show="showButton"
      fab
      icon="mdi-chevron-up"
      color="primary"
      class="scroll-to-top-btn"
      @click="scrollToTop"
    />
  </q-page-sticky>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style lang="scss" scoped>
.scroll-to-top-btn {
  z-index: 9999 !important;
  opacity: 0.8;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 1;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
}

:deep(.q-page-sticky) {
  z-index: 9999 !important;
}
</style>
