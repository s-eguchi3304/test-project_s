<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const posts = ref([]);

const id = route.params.id;

onMounted(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => (posts.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  <div class="container mt-5 mb-5">
    <ul>
      <li v-for="post in posts" :key="id">
        {{ post.id }}
        <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
