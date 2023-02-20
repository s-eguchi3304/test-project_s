<script setup>
import appHeader from './components/header.vue';
import appFooter from './components/footer.vue';

import { supabase } from './supabase';
import { useAuthStore } from './stores/auth';
const auth = useAuthStore();

auth.setUser(supabase.auth.user());

supabase.auth.onAuthStateChange((event, session) => {
  if (event == 'SIGNED_IN') auth.setUser(session.user);
  if (event == 'SIGNED_OUT') auth.clearUser();
});
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <appHeader />
    <main class="flex-shrink-0"><router-view></router-view></main>
    <appFooter />
  </div>
</template>
