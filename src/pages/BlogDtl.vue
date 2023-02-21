<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const id = route.params.id;
const dtls = ref({});

onMounted(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts', { params: { id } })
    .then((response) => (dtls.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  <div class="container mt-5 mb-5">
    <div v-for="dtl of dtls" :key="dtl.id">
      <h1>{{ dtl.title }}</h1>
      <p>{{ dtl.body }}</p>
    </div>
  </div>
</template>
