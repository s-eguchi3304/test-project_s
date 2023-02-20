<script setup>
import { supabase } from '/supabase';
import { useRouter } from 'vue-router';
const router = useRouter();

const handleSignOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    router.push({
      name: 'index',
    });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <button @click="handleSignOut">サインアウト</button>
    <h1>ダッシュボード</h1>
    <p>ようこそ！</p>
  </div>
</template>
