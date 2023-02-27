<script setup>
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

const route = useRoute();
const posts = ref([]);

const id = route.params.id;
const topNotice = computed(() => {
  return posts.value.slice(0, 3);
});

onMounted(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => (posts.value = response.data))
    .catch((error) => console.log(error));
});
</script>

<template>
  <div class="list-group">
    <router-link
      :to="`/blog/${post.id}`"
      class="list-group-item list-group-item-action"
      v-for="post in topNotice"
      :key="id"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ post.title }}</h5>
        <!--<small>3 days ago</small>-->
      </div>
      <p class="mb-1 txt-limit">{{ post.body }}</p>
      <!--<small>And some small print.</small>-->
    </router-link>
  </div>
</template>

<style scoped>
.txt-limit {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
