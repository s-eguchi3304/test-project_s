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
  <!--<div class="container mt-5 mb-5">
    <ul>
      <li v-for="post in posts" :key="id">
        {{ post.id }}
        <router-link :to="`/blog/${post.id}`">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>-->

  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" v-for="post in posts" :key="post.id">
          <div class="card shadow-sm h-100">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="225"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <title>カード画像のキャプション</title>
              <rect fill="#55595c" width="100%" height="100%" />
              <!--<text fill="#eceeef" dy=".3em" x="50%" y="50%">サムネイル</text>-->
            </svg>
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.body }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <router-link :to="`/blog/${post.id}`" class="btn btn-primary"
                  >見る
                </router-link>
                <!--<div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">見る</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">編集</button>
                  </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.album  -->
</template>

<style scoped>
.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
