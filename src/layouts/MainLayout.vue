<template>
  <q-layout view="lHh Lpr lFf">
    <MainNavbar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <ScrollToTop />
  </q-layout>
</template>

<script setup>
import MainNavbar from 'components/MainNavbar.vue'
import ScrollToTop from 'components/ScrollToTop.vue'
</script>

<style>
.q-layout {
  background-color: var(--color-light);
}
</style>
