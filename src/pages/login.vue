<script setup>
import { useAuthStore } from '../stores/auth';
const auth = useAuthStore();
</script>
<template>
  <div class="container mt-5 mb-5">
    <ul>
      <li v-if="auth.isLoggedIn">
        <router-link to="/dashboard">ダッシュボード</router-link>
      </li>
      <li v-if="!auth.isLoggedIn">
        <router-link to="/signup">サインアップ</router-link>
      </li>
      <li v-if="!auth.isLoggedIn">
        <router-link to="/signin">サインイン</router-link>
      </li>
    </ul>
  </div>
</template>
