<script setup>
import appHeader from './components/header.vue';
import appFooter from './components/footer.vue';
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <appHeader />
    <main class="flex-shrink-0"><router-view /></main>
    <appFooter />
  </div>
</template>
