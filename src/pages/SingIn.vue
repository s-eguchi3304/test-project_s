<script setup>
import { ref } from 'vue';
import { supabase } from '/supabase';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const handleSubmit = async () => {
  try {
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    if (user)
      router.push({
        name: 'dashboard',
      });
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <div class="container mt-5 mb-5">
    <h1>サインイン</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email: </label>
        <input type="email" placeholder="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input
          type="password"
          placeholder="password"
          v-model="password"
          autocomplete="off"
        />
      </div>
      <div>
        <button>サインイン</button>
      </div>
    </form>
  </div>
</template>
